'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function StartDemoButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      await fetch('/api/start-demo', { method: 'POST' });
      window.location.hash = 'demo';
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      size="lg"
      className="transition-transform hover:scale-105"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? 'Starting…' : 'Start Live Demo'}
    </Button>
  );
}
