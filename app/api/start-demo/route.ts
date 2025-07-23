import { NextResponse } from 'next/server';
import { startDemo, isRunning } from '@/lib/demoBot';

export async function POST() {
  if (!isRunning()) {
    // base URL derived from env or default
    const baseUrl = process.env.DEMO_URL || 'http://localhost:3000';
    startDemo(baseUrl); // fire and forget
  }
  return NextResponse.json({ running: isRunning() });
}
