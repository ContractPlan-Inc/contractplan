import { NextResponse } from 'next/server';
import { getImages, isRunning } from '@/lib/demoBot';

export async function GET() {
  return NextResponse.json({ images: getImages(), running: isRunning() });
}
