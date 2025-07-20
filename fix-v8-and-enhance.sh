#!/bin/bash

echo "🛠️ Fixing Button component props..."
mkdir -p components/ui

cat > components/ui/button.tsx << 'EOF'
import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const base = 'rounded px-4 py-2 font-medium transition focus:outline-none';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      ghost: 'bg-transparent text-blue-600 hover:bg-blue-50'
    };
    const sizes = {
      sm: 'text-sm py-1 px-2',
      md: 'text-base',
      lg: 'text-lg py-3 px-6'
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
EOF

echo "🎨 Softening background tone..."

# Replace hard dark values with cool gray + soft variants
sed -i '' 's/bg-[#0f172a]/bg-[#1f2937]/g' app/page.tsx
sed -i '' 's/bg-gray-900/bg-[#1f2937]/g' app/page.tsx
sed -i '' 's/text-white/text-gray-100/g' app/page.tsx
sed -i '' 's/text-gray-200/text-gray-300/g' app/page.tsx
sed -i '' 's/bg-blue-900/bg-[#334155]/g' app/page.tsx

echo "📸 Ensure screenshots exist..."
mkdir -p public/media/screenshots
for i in {1..3}; do
  touch public/media/screenshots/screen$i.png
done

echo "📦 Staging changes..."
git add components/ui/button.tsx app/page.tsx public/media/screenshots
git commit -m "🎨 Tone update: soften dark theme, fix button props, scaffold screenshots"
git push origin main

echo "🚀 Deploying to Vercel..."
vercel --prod --yes

