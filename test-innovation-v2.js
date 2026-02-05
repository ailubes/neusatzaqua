const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  // Navigate to innovation page
  await page.goto('http://localhost:3000/en/innovation', { waitUntil: 'networkidle' });
  
  // Wait a bit for animations
  await page.waitForTimeout(2000);
  
  // Take full page screenshot
  await page.screenshot({ 
    path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-full.png',
    fullPage: true 
  });
  
  console.log('Full page screenshot saved');
  
  // Get main element background
  const mainBg = await page.evaluate(() => {
    const main = document.querySelector('main');
    const sections = Array.from(document.querySelectorAll('section'));
    return {
      mainExists: !!main,
      mainBg: main ? window.getComputedStyle(main).backgroundColor : null,
      mainClass: main ? main.className : null,
      sectionCount: sections.length,
      sectionBgs: sections.slice(0, 5).map(s => ({
        bg: window.getComputedStyle(s).backgroundColor,
        class: s.className
      }))
    };
  });
  
  console.log('Main element:', mainBg);
  
  // Check for glass cards with more detail
  const glassCards = await page.$$eval('.glass-card', cards => {
    return cards.map((card, i) => ({
      index: i,
      bg: window.getComputedStyle(card).backgroundColor,
      border: window.getComputedStyle(card).border,
      backdropFilter: window.getComputedStyle(card).backdropFilter
    }));
  });
  console.log('Glass cards:', glassCards);
  
  // Check for aqua colored elements
  const aquaElements = await page.$$eval('*', elements => {
    const matches = [];
    elements.forEach((el, i) => {
      if (i > 500) return; // Limit checks
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bg = style.backgroundColor;
      if (color.includes('46, 196') || bg.includes('46, 196')) {
        matches.push({
          tag: el.tagName,
          class: el.className,
          color: color,
          bg: bg
        });
      }
    });
    return matches;
  });
  console.log('Aqua elements (first 10):', aquaElements.slice(0, 10));
  
  // Take screenshot of first section (Hero)
  const heroSection = await page.$('section');
  if (heroSection) {
    await heroSection.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-hero.png' 
    });
    console.log('Hero screenshot saved');
  }
  
  // Get all sections and screenshot specific ones
  const sections = await page.$$('section');
  console.log(`Found ${sections.length} sections`);
  
  for (let i = 0; i < Math.min(sections.length, 8); i++) {
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
  
  await browser.close();
})();
