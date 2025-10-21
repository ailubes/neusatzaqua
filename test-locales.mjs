import { chromium } from 'playwright';

async function testPage(url, name) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('\n=== Testing ' + name + ': ' + url + ' ===');
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
    
    const status = response.status();
    console.log('HTTP Status: ' + status);
    
    const finalUrl = page.url();
    console.log('Final URL: ' + finalUrl);
    
    const title = await page.title();
    console.log('Page Title: ' + title);
    
    const bodyText = await page.textContent('body');
    const has404 = bodyText.includes('404') || bodyText.includes('Not Found');
    console.log('Has 404 error: ' + has404);
    
    const screenshotPath = '/tmp/screenshot-' + name + '.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Screenshot saved: ' + screenshotPath);
    
    const h1Text = await page.locator('h1').first().textContent().catch(() => 'No H1 found');
    console.log('First H1: ' + h1Text);
    
    return { status, finalUrl, title, has404 };
    
  } catch (error) {
    console.error('Error: ' + error.message);
    return { error: error.message };
  } finally {
    await browser.close();
  }
}

async function runTests() {
  const tests = [
    { url: 'http://localhost:3030/', name: 'root-redirect' },
    { url: 'http://localhost:3030/en', name: 'en-home' },
    { url: 'http://localhost:3030/en/about', name: 'en-about' },
    { url: 'http://localhost:3030/en/hatchery', name: 'en-hatchery' },
    { url: 'http://localhost:3030/uk', name: 'uk-home' },
    { url: 'http://localhost:3030/uk/about', name: 'uk-about' },
    { url: 'http://localhost:3030/de', name: 'de-home' },
    { url: 'http://localhost:3030/de/about', name: 'de-about' },
  ];
  
  console.log('Starting comprehensive locale tests...\n');
  
  const results = [];
  for (const test of tests) {
    const result = await testPage(test.url, test.name);
    results.push(Object.assign({}, test, result));
  }
  
  console.log('\n\n=== SUMMARY ===');
  let allPassed = true;
  for (const result of results) {
    const ok = result.status && result.status < 400 && !result.has404 && !result.error;
    console.log((ok ? 'PASS' : 'FAIL') + ' ' + result.name + ': ' + (result.status || 'ERROR'));
    if (!ok) allPassed = false;
  }
  
  console.log('\nOverall: ' + (allPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'));
  process.exit(allPassed ? 0 : 1);
}

runTests();
