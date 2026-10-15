#!/usr/bin/env bash
# Generates short, seamless placeholder hover clips (slow push-in and back) for each road trip
# from its first gallery photo. Replace public/video/*.mp4 with real footage when available.
set -euo pipefail
cd "$(dirname "$0")/.."
TMP="${TMPDIR:-/tmp}/rp-hover"; mkdir -p "$TMP" public/video
npx tsx scripts/list-hover-sources.ts | while IFS=$'\t' read -r slug src; do
  out="public/video/$slug.mp4"
  [ -f "$out" ] && [ "${FORCE:-0}" != "1" ] && { echo "skip $slug"; continue; }
  curl -fsSL "$src?auto=format&fit=crop&w=1120&h=1600&q=80&fm=jpg" -o "$TMP/$slug.jpg"
  # 125 frames at 25fps = 5s. Zoom follows sin^2 so the clip loops without a jump.
  ffmpeg -nostdin -loglevel error -y -loop 1 -i "$TMP/$slug.jpg" -vf \
    "scale=1120:1600,zoompan=z='1+0.12*pow(sin(on/125*PI),2)':x='iw/2-(iw/zoom/2)+20*sin(on/125*2*PI)':y='ih/2-(ih/zoom/2)':d=125:s=560x800:fps=25,format=yuv420p" \
    -frames:v 125 -c:v libx264 -preset slow -crf 30 -movflags +faststart -an "$out"
  # Open-codec WebM twin for browsers without H.264 (e.g. some Chromium builds).
  ffmpeg -nostdin -loglevel error -y -i "$out" -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 -an "${out%.mp4}.webm"
  echo "made $out ($(du -k "$out" | cut -f1) KB) + webm ($(du -k "${out%.mp4}.webm" | cut -f1) KB)"
done
