#!/bin/bash
set -e

if [ ! -d node_modules ]; then
  echo "Installing npm dependencies..."
  npm install
else
  echo "Dependencies already installed."
fi
