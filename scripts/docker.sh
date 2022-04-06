#!/usr/bin/env sh
set -e

PWD=$(pwd)
DATADIR="$PWD/.data"

docker run \
  -d \
  --name homedata-timescaledb \
  -p 5432:5432 \
  -v "$DATADIR:/var/lib/postgresql/data" \
  -e POSTGRES_PASSWORD=homedata \
  timescale/timescaledb:latest-pg14
