const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 2000 }
  });
  
  // Navigate to innovation page
  await page.goto('http://localhost:3000/en/innovation', { waitUntil: 'networkidle' });
  
  // Wait for hydration and animations
  await page.waitForTimeout(3000);
  
  // Scroll to trigger animations
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  
  // Take full page screenshot
  await page.screenshot({ 
    path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-full.png',
    fullPage: true 
  });
  console.log('Full page screenshot saved');
  
  // Get computed styles for key elements
  const styles = await page.evaluate(() => {
    const main = document.querySelector('main');
    const sections = Array.from(document.querySelectorAll('section'));
    const glassCards = Array.from(document.querySelectorAll('.glass-card'));
    const headings = Array.from(document.querySelectorAll('h1, h2'));
    
    return {
      bodyBg: window.getComputedStyle(document.body).backgroundColor,
      mainBg: main ? window.getComputedStyle(main).backgroundColor : null,
      sectionCount: sections.length,
      sectionBgs: sections.slice(0, 5).map((s, i) => ({
        index: i,
        bg: window.getComputedStyle(s).backgroundColor,
        hasBgClass: s.className.includes('bg-')
      })),
      glassCardCount: glassCards.length,
      glassCardStyles: glassCards.slice(0, 3).map((c, i) => ({
        index: i,
        bg: window.getComputedStyle(c).backgroundColor,
        border: window.getComputedStyle(c).border,
        backdropFilter: window.getComputedStyle(c).backdropFilter
      })),
      headingColors: headings.slice(0, 3).map(h => window.getComputedStyle(h).color)
    };
  });
  
  console.log('=== STYLES ANALYSIS ===');
  console.log('Body background:', styles.bodyBg);
  console.log('Main background:', styles.mainBg);
  console.log('Section count:', styles.sectionCount);
  console.log('Section backgrounds:', styles.sectionBgs);
  console.log('Glass cards found:', styles.glassCardCount);
  console.log('Glass card styles (first 3):', styles.glassCardStyles);
  console.log('Heading colors:', styles.headingColors);
  
  // Check for aqua (#2EC4B6) color usage
  const aquaCheck = await page.evaluate(() => {
    const allElements = Array.from(document.querySelectorAll('*'));
    const aquaElements = [];
    
    allElements.forEach((el, i) => {
      if (aquaElements.length >= 10) return;
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bg = style.backgroundColor;
      const borderColor = style.borderColor;
      
      // Check for aqua rgb(46, 196, 182) or close variations
      if (color.includes('46, 196') || bg.includes('46, 196') || borderColor.includes('46, 196') ||
          color.includes('61, 212') || bg.includes('61, 212')) { // lighter variant
        aquaElements.push({
          tag: el.tagName,
          className: el.className.substring(0, 50),
          color: color,
          bg: bg.substring(0, 50)
        });
      }
    });
    
    return aquaElements;
  });
  
  console.log('=== AQUA COLOR CHECK ===');
  console.log('Elements with aqua color:', aquaCheck);
  
  // Take section screenshots
  const sections = await page.$$('section');
  console.log(`\nTaking screenshots of ${sections.length} sections...`);
  
  for (let i = 0; i < sections.length; i++) {
    await sections[i].screenshot({ 
      path: `/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-section-${i}.png` 
    });
    console.log(`Section ${i} screenshot saved`);
  }
  
  // Footer screenshot
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-footer.png' 
    });
    console.log('Footer screenshot saved');
  }
  
  // Summary
  console.log('\n=== TEST SUMMARY ===');
  const isDarkNavy = styles.bodyBg === 'rgb(11, 31, 63)' || 
                     styles.mainBg === 'rgb(11, 31, 63)' ||
                     styles.sectionBgs.some(s => s.bg === 'rgb(11, 31, 63)');
  const hasGlassCards = styles.glassCardCount > 0;
  const hasAqua = aquaCheck.length > 0;
  
  console.log('Dark navy background (#0B1F3F):', isDarkNavy ? 'PASS' : 'FAIL');
  console.log('Glass cards present:', hasGlassCards ? `PASS (${styles.glassCardCount} found)` : 'FAIL');
  console.log('Aqua accents (#2EC4B6):', hasAqua ? `PASS (${aquaCheck.length} elements)` : 'FAIL');
  console.log('Sections rendered:', styles.sectionCount > 0 ? `PASS (${styles.sectionCount} sections)` : 'FAIL');
  
  await browser.close();
})();
