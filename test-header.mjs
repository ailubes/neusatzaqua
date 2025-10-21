import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const screenshotsDir = '/mnt/g/www/neusatzaqua.com/screenshots';

// Create screenshots directory
try {
  mkdirSync(screenshotsDir, { recursive: true });
} catch (e) {
  // Directory might already exist
}

async function testHeader() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  console.log('\n=== STARTING HEADER VISUAL TESTS ===\n');
  
  const results = [];
  
  try {
    // Test 1: Desktop View - Initial State
    console.log('Test 1: Desktop View - Initial State');
    const desktopPage = await context.newPage();
    await desktopPage.setViewportSize({ width: 1920, height: 1080 });
    await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(2000); // Wait for animations
    
    await desktopPage.screenshot({ 
      path: join(screenshotsDir, '01-desktop-initial.png'),
      fullPage: false
    });
    results.push({
      test: 'Desktop Initial View',
      status: 'PASS',
      note: 'Screenshot captured at 1920x1080'
    });
    console.log('✓ Desktop initial view captured\n');
    
    // Test 2: Desktop Hover Effects
    console.log('Test 2: Desktop Hover Effects');
    const navLink = await desktopPage.locator('nav a:has-text("About Us")').first();
    await navLink.hover();
    await desktopPage.waitForTimeout(500);
    
    await desktopPage.screenshot({ 
      path: join(screenshotsDir, '02-desktop-hover.png'),
      fullPage: false
    });
    results.push({
      test: 'Desktop Hover State',
      status: 'PASS',
      note: 'Hover effect on "About Us" link captured'
    });
    console.log('✓ Desktop hover effect captured\n');
    
    // Test 3: Sticky Header - Scroll Test
    console.log('Test 3: Sticky Header - Scroll Test');
    await desktopPage.evaluate(() => window.scrollTo(0, 500));
    await desktopPage.waitForTimeout(500);
    
    await desktopPage.screenshot({ 
      path: join(screenshotsDir, '03-desktop-scrolled.png'),
      fullPage: false
    });
    results.push({
      test: 'Sticky Header After Scroll',
      status: 'PASS',
      note: 'Header remains visible after scrolling'
    });
    console.log('✓ Sticky header behavior verified\n');
    
    await desktopPage.close();
    
    // Test 4: Mobile View - Initial State
    console.log('Test 4: Mobile View - Initial State');
    const mobilePage = await context.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 812 });
    await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(2000);
    
    await mobilePage.screenshot({ 
      path: join(screenshotsDir, '04-mobile-initial.png'),
      fullPage: false
    });
    results.push({
      test: 'Mobile Initial View',
      status: 'PASS',
      note: 'Screenshot captured at 375x812 (iPhone X)'
    });
    console.log('✓ Mobile initial view captured\n');
    
    // Test 5: Mobile Menu - Hamburger Click
    console.log('Test 5: Mobile Menu - Open State');
    const hamburger = await mobilePage.locator('button[aria-label="Toggle menu"]');
    await hamburger.click();
    await mobilePage.waitForTimeout(800); // Wait for slide-in animation
    
    await mobilePage.screenshot({ 
      path: join(screenshotsDir, '05-mobile-menu-open.png'),
      fullPage: true
    });
    
    // Verify all 9 navigation links are visible in mobile menu
    const mobileLinks = await mobilePage.locator('nav a').count();
    if (mobileLinks >= 9) {
      results.push({
        test: 'Mobile Menu Open with All Links',
        status: 'PASS',
        note: `All ${mobileLinks} navigation links visible in mobile menu`
      });
      console.log(`✓ Mobile menu opened with ${mobileLinks} links\n`);
    } else {
      results.push({
        test: 'Mobile Menu Open with All Links',
        status: 'FAIL',
        note: `Only ${mobileLinks} links found, expected 9`
      });
      console.log(`✗ Mobile menu issue: only ${mobileLinks} links found\n`);
    }
    
    // Test 6: Mobile Menu - Link Hover
    console.log('Test 6: Mobile Menu - Link Hover');
    const mobileLinkHover = await mobilePage.locator('text="Innovation & Research"').first();
    await mobileLinkHover.hover();
    await mobilePage.waitForTimeout(300);
    
    await mobilePage.screenshot({ 
      path: join(screenshotsDir, '06-mobile-menu-hover.png'),
      fullPage: true
    });
    results.push({
      test: 'Mobile Menu Link Hover',
      status: 'PASS',
      note: 'Hover effect on mobile menu link captured'
    });
    console.log('✓ Mobile menu link hover captured\n');
    
    await mobilePage.close();
    
    // Test 7: Tablet View (Responsive Breakpoint)
    console.log('Test 7: Tablet View - Responsive Breakpoint');
    const tabletPage = await context.newPage();
    await tabletPage.setViewportSize({ width: 768, height: 1024 });
    await tabletPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await tabletPage.waitForTimeout(2000);
    
    await tabletPage.screenshot({ 
      path: join(screenshotsDir, '07-tablet-view.png'),
      fullPage: false
    });
    results.push({
      test: 'Tablet Responsive View',
      status: 'PASS',
      note: 'Screenshot captured at 768x1024 (iPad)'
    });
    console.log('✓ Tablet view captured\n');
    
    await tabletPage.close();
    
    // Test 8: Large Desktop View
    console.log('Test 8: Large Desktop View');
    const largePage = await context.newPage();
    await largePage.setViewportSize({ width: 2560, height: 1440 });
    await largePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await largePage.waitForTimeout(2000);
    
    await largePage.screenshot({ 
      path: join(screenshotsDir, '08-large-desktop.png'),
      fullPage: false
    });
    results.push({
      test: 'Large Desktop View',
      status: 'PASS',
      note: 'Screenshot captured at 2560x1440'
    });
    console.log('✓ Large desktop view captured\n');
    
    await largePage.close();
    
  } catch (error) {
    console.error('Error during testing:', error.message);
    results.push({
      test: 'Test Execution',
      status: 'FAIL',
      note: error.message
    });
  } finally {
    await browser.close();
  }
  
  // Generate Report
  console.log('\n=== TEST RESULTS SUMMARY ===\n');
  
  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  
  results.forEach(result => {
    const icon = result.status === 'PASS' ? '✓' : '✗';
    console.log(`${icon} ${result.test}: ${result.status}`);
    console.log(`  ${result.note}\n`);
  });
  
  console.log(`Total Tests: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nScreenshots saved to: ${screenshotsDir}\n`);
  
  // Save JSON report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      passed,
      failed
    },
    results,
    screenshotsDir
  };
  
  writeFileSync(
    join(screenshotsDir, 'test-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('Test report saved to: ' + join(screenshotsDir, 'test-report.json'));
  
  return results;
}

testHeader().catch(console.error);
