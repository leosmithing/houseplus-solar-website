/**
 * HousePlus Solar Series - Performance Optimizer
 * Implements lazy loading, image optimization, and performance enhancements
 */

class PerformanceOptimizer {
  constructor() {
    this.lazyImages = [];
    this.observer = null;
  }

  /**
   * Initialize Intersection Observer for lazy loading
   */
  initLazyLoading() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      this.loadAllImages();
      return;
    }

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.observer.observe(img);
      this.lazyImages.push(img);
    });
  }

  /**
   * Load image and handle errors
   */
  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    // Create a new image to preload
    const tempImg = new Image();
    
    tempImg.onload = () => {
      img.src = src;
      if (srcset) img.srcset = srcset;
      img.classList.add('lazy-loaded');
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
    };

    tempImg.onerror = () => {
      console.warn(`Failed to load image: ${src}`);
      img.classList.add('lazy-error');
    };

    tempImg.src = src;
  }

  /**
   * Fallback: load all images immediately
   */
  loadAllImages() {
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.loadImage(img);
    });
  }

  /**
   * Optimize CSS delivery
   */
  optimizeCSSDelivery() {
    // Load non-critical CSS asynchronously
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      if (link.getAttribute('data-async') === 'true') {
        link.media = 'print';
        link.onload = function() {
          this.media = 'all';
        };
      }
    });
  }

  /**
   * Defer non-critical JavaScript
   */
  deferNonCriticalJS() {
    const scripts = document.querySelectorAll('script[data-defer="true"]');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.async = true;
      document.body.appendChild(newScript);
      script.remove();
    });
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources() {
    const criticalResources = [
      { href: '/assets/houseplus-logo.png', as: 'image' },
      { href: '/style.css', as: 'style' },
      { href: '/script.js', as: 'script' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }

  /**
   * Enable DNS prefetching for external resources
   */
  enableDNSPrefetch() {
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://wa.me'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  /**
   * Monitor Core Web Vitals
   */
  monitorCoreWebVitals() {
    if ('web-vital' in window) {
      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.log('LCP monitoring not supported');
        }
      }
    }
  }

  /**
   * Optimize images with modern formats
   */
  optimizeImageFormats() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" attribute for native lazy loading
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for non-blocking image decoding
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }

  /**
   * Minify inline CSS and JS
   */
  minifyInlineCode() {
    // This would typically be done at build time
    // Here we just ensure proper formatting
    const styles = document.querySelectorAll('style');
    const scripts = document.querySelectorAll('script:not([src])');

    // Log optimization opportunities
    console.log(`Found ${styles.length} inline styles and ${scripts.length} inline scripts`);
  }

  /**
   * Initialize all performance optimizations
   */
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initOptimizations();
      });
    } else {
      this.initOptimizations();
    }
  }

  /**
   * Run all optimization tasks
   */
  initOptimizations() {
    this.initLazyLoading();
    this.optimizeCSSDelivery();
    this.deferNonCriticalJS();
    this.enableDNSPrefetch();
    this.optimizeImageFormats();
    this.monitorCoreWebVitals();
  }
}

// Auto-initialize on page load
const performanceOptimizer = new PerformanceOptimizer();
performanceOptimizer.init();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceOptimizer;
}
