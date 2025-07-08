#!/bin/bash

echo "🔍 ContractPlan App Module Inventory"

files=(
  "app/ai/assistant.tsx"
  "app/ai/suggestions.tsx"
  "app/reports/dashboard.tsx"
  "app/reports/variance.tsx"
  "app/integrations/index.tsx"
  "app/integrations/salesforce.tsx"
  "app/integrations/stripe.tsx"
  "app/workflow/designer.tsx"
  "app/workflow/templates.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ Found: $file"
  else
    echo "❌ Missing: $file"
  fi
done

