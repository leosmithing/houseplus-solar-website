/**
 * HousePlus Solar Series - Breadcrumb Navigation System
 * Provides semantic breadcrumb navigation for all pages
 * Improves SEO and user experience
 */

class BreadcrumbNavigator {
  constructor() {
    this.breadcrumbs = {
      '/': { label: 'Home', icon: '🏠' },
      '/products.html': { label: 'Products', parent: '/' },
      '/products.html#inverters': { label: 'Solar Inverters', parent: '/products.html' },
      '/products.html#batteries': { label: 'Lithium Batteries', parent: '/products.html' },
      '/products.html#controllers': { label: 'MPPT Controllers', parent: '/products.html' },
      '/products.html#panels': { label: 'Solar Panels', parent: '/products.html' },
      '/products.html#stations': { label: 'Power Stations', parent: '/products.html' },
      '/products.html#lights': { label: 'Solar Street Lights', parent: '/products.html' },
      '/about.html': { label: 'About Us', parent: '/' },
      '/contact.html': { label: 'Contact', parent: '/' },
      '/news.html': { label: 'News', parent: '/' },
    };
  }

  /**
   * Generate breadcrumb HTML for the current page
   */
  generateBreadcrumbs() {
    const currentPath = this.getCurrentPath();
    const breadcrumbTrail = this.getBreadcrumbTrail(currentPath);
    
    if (breadcrumbTrail.length <= 1) return ''; // Don't show for home page

    let html = '<nav class="breadcrumb-nav" aria-label="Breadcrumb">\n';
    html += '  <ol class="breadcrumb-list">\n';

    breadcrumbTrail.forEach((path, index) => {
      const item = this.breadcrumbs[path];
      const isLast = index === breadcrumbTrail.length - 1;
      
      if (isLast) {
        html += `    <li class="breadcrumb-item active">\n`;
        html += `      <span>${item.label}</span>\n`;
        html += `    </li>\n`;
      } else {
        const href = path === '/' ? '/' : path;
        html += `    <li class="breadcrumb-item">\n`;
        html += `      <a href="${href}">${item.label}</a>\n`;
        html += `      <span class="separator"> / </span>\n`;
        html += `    </li>\n`;
      }
    });

    html += '  </ol>\n';
    html += '</nav>\n';

    return html;
  }

  /**
   * Generate JSON-LD structured data for breadcrumbs
   */
  generateBreadcrumbSchema() {
    const currentPath = this.getCurrentPath();
    const breadcrumbTrail = this.getBreadcrumbTrail(currentPath);

    if (breadcrumbTrail.length <= 1) return null;

    const itemListElement = breadcrumbTrail.map((path, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': this.breadcrumbs[path].label,
      'item': `https://houseplus.ng${path === '/' ? '' : path}`
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };
  }

  /**
   * Get the current page path
   */
  getCurrentPath() {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    
    // Remove domain and trailing slash
    let path = pathname.replace(/^\/houseplus-solar-website/, '');
    if (path === '' || path === '/') path = '/';
    
    // Add hash if present
    if (hash) path += hash;
    
    return path;
  }

  /**
   * Build breadcrumb trail from current path
   */
  getBreadcrumbTrail(currentPath) {
    const trail = ['/'];
    
    // If it's just home, return home
    if (currentPath === '/') return trail;
    
    // Add the current page
    const basePath = currentPath.split('#')[0];
    if (basePath && basePath !== '/') {
      trail.push(basePath);
    }
    
    // Add anchor if present
    const hash = currentPath.split('#')[1];
    if (hash) {
      trail.push(currentPath);
    }
    
    return trail;
  }

  /**
   * Inject breadcrumbs into the page
   */
  injectBreadcrumbs(containerId = 'breadcrumb-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const breadcrumbHTML = this.generateBreadcrumbs();
    if (breadcrumbHTML) {
      container.innerHTML = breadcrumbHTML;
      
      // Add JSON-LD schema
      const schema = this.generateBreadcrumbSchema();
      if (schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }
  }

  /**
   * Initialize breadcrumbs on page load
   */
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.injectBreadcrumbs();
      });
    } else {
      this.injectBreadcrumbs();
    }
  }
}

// Auto-initialize on page load
const breadcrumbNav = new BreadcrumbNavigator();
breadcrumbNav.init();
