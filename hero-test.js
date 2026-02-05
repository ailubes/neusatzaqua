const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set a large viewport so GSAP desktop breakpoint (min-width: 1024px) triggers
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('[1] Navigating to http://localhost:3000/en ...');
  // Navigate; waitUntil: 'load' ensures DOMContentLoaded + resources loaded
  await page.goto('http://localhost:3000/en', { waitUntil: 'load' });

  // Give GSAP entrance timeline a moment to complete
  // Entrance animation total duration: ~0.75s offset + 0.5s duration = ~1.3s
  console.log('[2] Waiting 2s for entrance animations to finish ...');
  await page.waitForTimeout(2000);

  // --- Screenshot 1: Hero on page load, no scroll ---
  console.log('[3] Taking hero-on-load screenshot (no scroll) ...');
  await page.screenshot({ path: '/tmp/hero-on-load.png', fullPage: false });

  // Check for JavaScript console errors
  const jsErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') jsErrors.push(msg.text()); });

  // --- Check visibility of key hero elements via DOM ---
  console.log('[4] Checking element visibility ...');

  const checks = await page.evaluate(() => {
    const results = {};

    // Hero background image
    const bgImg = document.querySelector('#hero img[alt="Underwater background"]');
    results.bgImage = bgImg ? {
      exists: true,
      visible: bgImg.offsetParent !== null || bgImg.closest('[style*="display: none"]') === null,
      naturalWidth: bgImg.naturalWidth,
      src: bgImg.getAttribute('src')?.substring(0, 80)
    } : { exists: false };

    // Hero title
    const h1 = document.querySelector('#hero h1');
    if (h1) {
      const rect = h1.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(h1);
      results.heroTitle = {
        exists: true,
        text: h1.textContent.trim().substring(0, 60),
        inViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
        rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) },
        opacity: computedStyle.opacity,
        // Check GSAP inline style opacity
        gsapOpacity: h1.style.opacity
      };
    } else {
      results.heroTitle = { exists: false };
    }

    // Hero subtitle
    const subtitle = document.querySelector('#hero p');
    if (subtitle) {
      const rect = subtitle.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(subtitle);
      results.heroSubtitle = {
        exists: true,
        text: subtitle.textContent.trim().substring(0, 60),
        inViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
        rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) },
        opacity: computedStyle.opacity,
        gsapOpacity: subtitle.style.opacity
      };
    } else {
      results.heroSubtitle = { exists: false };
    }

    // CTA buttons
    const buttons = document.querySelectorAll('#hero button');
    results.ctaButtons = [];
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const cs = window.getComputedStyle(btn);
      results.ctaButtons.push({
        text: btn.textContent.trim(),
        inViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
        rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) },
        opacity: cs.opacity,
        gsapOpacity: btn.style.opacity
      });
    });

    // Scroll indicator
    const scrollHint = document.querySelector('[aria-label="Scroll to learn more"]');
    if (scrollHint) {
      const rect = scrollHint.getBoundingClientRect();
      results.scrollIndicator = {
        exists: true,
        inViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
        rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) }
      };
    } else {
      results.scrollIndicator = { exists: false };
    }

    // CTA container opacity (GSAP animates this)
    const ctaContainer = document.querySelector('#hero > div > div > div[class*="flex"]');
    if (ctaContainer) {
      results.ctaContainer = {
        gsapOpacity: ctaContainer.style.opacity,
        computedOpacity: window.getComputedStyle(ctaContainer).opacity
      };
    }

    // Background div opacity (GSAP animates this)
    const bgDiv = document.querySelector('#hero > div.absolute');
    if (bgDiv) {
      results.bgDiv = {
        gsapOpacity: bgDiv.style.opacity,
        computedOpacity: window.getComputedStyle(bgDiv).opacity
      };
    }

    return results;
  });

  console.log('\n=== ELEMENT CHECKS ===');
  console.log(JSON.stringify(checks, null, 2));

  // --- Screenshot 2: After scrolling down ~100vh ---
  console.log('\n[5] Scrolling down 900px (one viewport) ...');
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
  await page.waitForTimeout(1500); // let scroll-triggered animations fire

  console.log('[6] Taking hero-after-scroll screenshot ...');
  await page.screenshot({ path: '/tmp/hero-after-scroll.png', fullPage: false });

  // --- Screenshot 3: Full page for reference ---
  console.log('[7] Taking full-page screenshot ...');
  await page.screenshot({ path: '/tmp/hero-fullpage.png', fullPage: true });

  console.log('\n[DONE] Screenshots saved.');
  await browser.close();
})();
