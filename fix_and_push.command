#!/bin/zsh
cd ~/Dev/ContractPlan || exit 1

# Initialize a Git repository if one doesn't exist
if [ ! -d .git ]; then
  git init
fi

# Stage and commit all files
git add -A
git commit -m "🚀 Pushing ContractPlan homepage with polish and fixes" || true

# Set branch to main
git branch -M main

# Add remote origin (replace if exists)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/ContractPlan-Inc/contractplan.git

# Force push to GitHub
git push -u origin main --force

# Deploy to Vercel (production)
vercel --prod --force

# Alias latest deployment to contractplan.com
DEPLOY_URL=$(vercel ls | grep -Eo 'https://[^ ]+\.vercel\.app' | head -n1)
if [ -n "$DEPLOY_URL" ]; then
  vercel alias set "$DEPLOY_URL" contractplan.com
fi

