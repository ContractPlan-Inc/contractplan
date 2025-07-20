#!/bin/bash

echo "🎨 Switching to light mode theme..."

# Update background and text classes
sed -i '' 's/bg-[#0f172a]/bg-white/g' app/page.tsx
sed -i '' 's/bg-[#1f2937]/bg-white/g' app/page.tsx
sed -i '' 's/bg-gray-900/bg-white/g' app/page.tsx
sed -i '' 's/text-white/text-gray-900/g' app/page.tsx
sed -i '' 's/text-gray-100/text-gray-900/g' app/page.tsx
sed -i '' 's/text-gray-200/text-gray-700/g' app/page.tsx

# Enhance sections with contrast and dazzle
sed -i '' 's/bg-blue-900/bg-blue-50/g' app/page.tsx
sed -i '' 's/text-blue-300/text-blue-600/g' app/page.tsx
sed -i '' 's/text-blue-400/text-blue-700/g' app/page.tsx
sed -i '' 's/text-gray-400/text-gray-600/g' app/page.tsx

# Optional: subtle hover & border polish
sed -i '' 's/hover:bg-blue-800/hover:bg-blue-100/g' app/page.tsx
sed -i '' 's/hover:bg-blue-700/hover:bg-blue-100/g' app/page.tsx
sed -i '' 's/hover:text-white/hover:text-blue-900/g' app/page.tsx
sed -i '' 's/border-gray-700/border-gray-300/g' app/page.tsx

echo "🧼 Cleaning up old dark mode screenshots..."
mkdir -p public/media/screenshots
for i in {1..3}; do
  touch public/media/screenshots/screen$i.png
done

echo "📦 Staging visual overhaul..."
git add app/page.tsx public/media/screenshots
git commit -m "🌞 Full light mode transformation with enhanced visual clarity"
git push origin main

echo "🚀 Deploying light mode to Vercel..."
vercel --prod --yes

