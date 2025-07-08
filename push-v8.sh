#!/bin/bash

echo "🚀 Pushing ContractPlan V8 homepage..."

# Step 1: Stage the updated homepage
git add app/page.tsx

# Step 2: Commit with a clear message
git commit -m "🎯 Launch ContractPlan V8 homepage - trust-optimized design, real content"

# Step 3: Push to main
git push origin main

echo "✅ V8 homepage pushed successfully."

