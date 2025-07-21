#!/bin/bash
set -e

echo "Creating component folders..."
mkdir -p components/ui

echo "Unzipping files..."
unzip homepage_components.zip -d .

echo "Done. Components installed to ./components"
