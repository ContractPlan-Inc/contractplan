import puppeteer from 'puppeteer';

let running = false;
let images: string[] = [];

async function captureStep(page: any, url: string) {
  await page.goto(url);
  await page.waitForTimeout(1000);
  const screenshot = await page.screenshot({ encoding: 'base64' });
  images.push(`data:image/png;base64,${screenshot}`);
}

export async function startDemo(baseUrl: string) {
  if (running) return;
  running = true;
  images = [];
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    const routes = ['/app', '/contracts', '/workflows/designer'];
    for (const route of routes) {
      await captureStep(page, `${baseUrl}${route}`);
    }
    await browser.close();
  } catch (err) {
    console.error('Demo bot failed', err);
  } finally {
    running = false;
  }
}

export function getImages() {
  return images;
}

export function isRunning() {
  return running;
}
