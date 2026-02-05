const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  // Navigate to innovation page
  await page.goto('http://localhost:3000/en/innovation', { waitUntil: 'networkidle' });
  
  // Take full page screenshot
  await page.screenshot({ 
    path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-full.png',
    fullPage: true 
  });
  
  // Get hero section
  const hero = await page.$('[class*="hero"], section:first-of-type, main > div:first-child');
  if (hero) {
    await hero.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-hero.png' 
    });
  }
  
  // Get overview section
  const overview = await page.$('text=/overview|Overview/i').then(el => el?.evaluateHandle(e => e.closest('section')));
  if (overview) {
    await overview.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-overview.png' 
    });
  }
  
  // Get AI Behavior section
  const aiSection = await page.$('text=/AI|Behavior|behaviour/i').then(el => el?.evaluateHandle(e => e.closest('section')));
  if (aiSection) {
    await aiSection.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-ai.png' 
    });
  }
  
  // Get Digital Twin section
  const twinSection = await page.$('text=/Digital|Twin/i').then(el => el?.evaluateHandle(e => e.closest('section')));
  if (twinSection) {
    await twinSection.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-twin.png' 
    });
  }
  
  // Get Footer
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ 
      path: '/mnt/g/www/neusatzaqua.com/test-screenshots/innovation-footer.png' 
    });
  }
  
  // Check computed styles
  const bodyBg = await page.evaluate(() => {
    const body = document.body;
    const main = document.querySelector('main');
    return {
      bodyBg: window.getComputedStyle(body).backgroundColor,
      mainBg: main ? window.getComputedStyle(main).backgroundColor : null
    };
  });
  
  console.log('Body background:', bodyBg.bodyBg);
  console.log('Main background:', bodyBg.mainBg);
  
  // Check for glass cards
  const glassCards = await page.$$eval('[class*="glass"], .glass-card', cards => cards.length);
  console.log('Glass cards found:', glassCards);
  
  // Check text colors
  const textColors = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    const bodyText = Array.from(document.querySelectorAll('p'));
    return {
      headingColors: [...new Set(headings.map(h => window.getComputedStyle(h).color))].slice(0, 5),
      bodyColors: [...new Set(bodyText.map(p => window.getComputedStyle(p).color))].slice(0, 5)
    };
  });
  
  console.log('Heading colors:', textColors.headingColors);
  console.log('Body text colors:', textColors.bodyColors);
  
  // Check for aqua accents
  const aquaElements = await page.$$eval('*', elements => {
    return elements.filter(el => {
      const color = window.getComputedStyle(el).color;
      const bg = window.getComputedStyle(el).backgroundColor;
      const border = window.getComputedStyle(el).borderColor;
      return color.includes('46, 196, 182') || 
             color.includes('rgb(46, 196') ||
             bg.includes('46, 196, 182') ||
             border.includes('46, 196, 182');
    }).length;
  });
  console.log('Elements with aqua (#2EC4B6):', aquaElements);
  
  await browser.close();
})();
