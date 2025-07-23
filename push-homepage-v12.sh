#!/bin/bash

# Ensure you're in the repo
cd /path/to/your/contractplan-repo

# 1. Add all modified files
git add app/page.tsx components/ public/screens/ public/logo-blue-check.svg

# 2. Commit with a descriptive message
git commit -m "💫 Polish V12 homepage: hero gradient, buttons, carousel, pricing layout, vault copy"

# 3. Push to main branch
git push origin main

# 4. Trigger Vercel deployment (automatic if connected)
echo "✅ Changes pushed to main. Vercel will now deploy the updated homepage."

# Optional: open Vercel site in browser
open "https://contractplan.net"

