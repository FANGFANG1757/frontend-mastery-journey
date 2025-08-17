// TODO: Implement interactive features for Wuli Home

// Hero image lazy loading optimization
document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(".hero-image");

  // Add loaded class when image is fully loaded
  if (heroImage.complete) {
    heroImage.classList.add("loaded");
  } else {
    heroImage.addEventListener("load", () => {
      heroImage.classList.add("loaded");
    });
  }

  // Smooth scroll for CTA button
  const ctaButton = document.querySelector('.cta-button[href^="#"]');
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = ctaButton.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Mobile navigation toggle functionality
  function initMobileNav() {
    // TODO: Add hamburger menu toggle for mobile
    // TODO: Handle mobile menu open/close with proper ARIA states
    // TODO: Manage focus when menu opens/closes
    // TODO: Handle escape key to close mobile menu
    // TODO: Close menu when clicking outside
    // TODO: Trap focus within mobile menu when open
  }

  // TODO: Shopping cart functionality
  function initShoppingCart() {
    // TODO: Initialize cart from localStorage
    // TODO: Update cart count badge on load
    // TODO: Add to cart functionality for each product
    // TODO: Show loading state on "Add to Cart" buttons
    // TODO: Display success message with animation
    // TODO: Update cart count with bounce animation
    // TODO: Save cart to localStorage
    // TODO: Show cart preview on hover (desktop)
    // TODO: Announce cart updates to screen readers
  }

  // TODO: Product interactions
  function initProductCards() {
    // TODO: Quick view functionality
    // TODO: Image gallery/carousel for products
    // TODO: Wishlist toggle (heart icon)
    // TODO: Size/variant selection if applicable
    // TODO: Stock availability checking
    // TODO: Price formatting with currency
  }

  // TODO: Search functionality
  function initSearch() {
    // TODO: Toggle search overlay/modal
    // TODO: Search input with autocomplete
    // TODO: Search suggestions based on categories
    // TODO: Recent searches from localStorage
    // TODO: Popular searches display
    // TODO: Search results with product previews
    // TODO: Close search with Escape key
    // TODO: Announce search results count
  }

  // TODO: Newsletter form handling
  function initNewsletterForm() {
    // TODO: Email validation (format and required)
    // TODO: Check for duplicate submissions
    // TODO: Show loading state during submission
    // TODO: Display success message with discount code
    // TODO: Error handling with friendly messages
    // TODO: Save email preference to localStorage
    // TODO: Confetti animation on success (fun touch!)
    // TODO: Reset form after successful submission
    // TODO: Announce form status to screen readers
  }

  // TODO: Hero section interactions
  function initHeroSection() {
    // TODO: Hero banner carousel/slider if multiple
    // TODO: Parallax effect on scroll (subtle)
    // TODO: Auto-pause carousel on hover
    // TODO: Keyboard navigation for carousel
    // TODO: Touch/swipe support for mobile
    // TODO: Lazy load hero images
    // TODO: Smooth scroll to shop section on CTA click
  }

  // TODO: Category filtering
  function initCategoryFilter() {
    // TODO: Filter products by category
    // TODO: Smooth transition animations
    // TODO: Update URL with selected category
    // TODO: Active category highlighting
    // TODO: Show product count per category
    // TODO: "Show all" option
    // TODO: Maintain scroll position after filter
  }

  // TODO: Announcement bar
  function initAnnouncementBar() {
    // TODO: Rotate through multiple announcements
    // TODO: Pause rotation on hover
    // TODO: Close/dismiss functionality
    // TODO: Save dismissed state in sessionStorage
    // TODO: Countdown timer for limited offers
  }

  // TODO: User account menu
  function initUserAccount() {
    // TODO: Toggle account dropdown
    // TODO: Login/signup modal trigger
    // TODO: Guest vs logged-in state
    // TODO: Recently viewed products
    // TODO: Order tracking link
    // TODO: Wishlist count display
  }

  // TODO: Accessibility enhancements
  function initA11yFeatures() {
    // TODO: Skip link functionality
    // TODO: Focus management for modals
    // TODO: Keyboard navigation patterns
    // TODO: Live regions for dynamic content
    // TODO: High contrast mode toggle
    // TODO: Font size adjustment controls
    // TODO: Reduced motion preferences
    // TODO: Screen reader announcements
  }

  // TODO: Image handling and optimization
  function initImageOptimization() {
    // TODO: Lazy loading for all product images
    // TODO: Progressive image loading (blur-up)
    // TODO: Retina/high-DPI image support
    // TODO: WebP with fallbacks
    // TODO: Error handling with placeholder images
    // TODO: Aspect ratio to prevent layout shift
  }

  // TODO: Social proof features
  function initSocialProof() {
    // TODO: Customer reviews carousel
    // TODO: Instagram feed integration
    // TODO: Recently purchased notifications
    // TODO: Product view count ("X people viewing")
    // TODO: Limited stock warnings
  }

  // TODO: Smooth scrolling
  function initSmoothScroll() {
    // TODO: Smooth scroll for anchor links
    // TODO: Back to top button
    // TODO: Progress indicator on scroll
    // TODO: Sticky header on scroll down
    // TODO: Hide header on scroll up (mobile)
  }

  // TODO: Initialize all features
  // Uncomment as you implement each feature:
  // initMobileNav();
  // initShoppingCart();
  // initProductCards();
  // initSearch();
  // initNewsletterForm();
  // initHeroSection();
  // initCategoryFilter();
  // initAnnouncementBar();
  // initUserAccount();
  // initA11yFeatures();
  // initImageOptimization();
  // initSocialProof();
  // initSmoothScroll();

  // TODO: Performance monitoring
  function initPerformanceMonitoring() {
    // TODO: Track Core Web Vitals
    // TODO: Monitor cart abandonment
    // TODO: Track user interactions
    // TODO: Error logging
  }

  // TODO: Global event handlers
  document.addEventListener("keydown", function (e) {
    // TODO: Global keyboard shortcuts
    // TODO: Escape to close modals/overlays
    // TODO: "/" to focus search
    // TODO: Arrow keys for gallery navigation
  });

  // TODO: Window resize handler
  let resizeTimer;
  window.addEventListener("resize", function () {
    // TODO: Debounce resize events
    // TODO: Update mobile/desktop specific features
    // TODO: Recalculate dynamic layouts
    // TODO: Close mobile menu if switching to desktop
  });

  // TODO: Intersection Observer for animations
  function initScrollAnimations() {
    // TODO: Fade in products on scroll
    // TODO: Parallax effects
    // TODO: Sticky elements
    // TODO: Infinite scroll for products
  }

  // TODO: Utility functions
  function formatCurrency(amount) {
    // TODO: Format price with currency symbol
    // TODO: Handle different locales
  }

  function debounce(func, wait) {
    // TODO: Debounce utility for search/resize
  }

  function showNotification(message, type = "success") {
    // TODO: Show toast notifications
    // TODO: Auto-dismiss after timeout
    // TODO: Stack multiple notifications
    // TODO: Announce to screen readers
  }

  function saveToLocalStorage(key, value) {
    // TODO: Safe localStorage with fallback
    // TODO: Handle quota exceeded errors
  }

  function getFromLocalStorage(key, defaultValue) {
    // TODO: Safe localStorage retrieval
    // TODO: Parse JSON with error handling
  }
});
// Enhanced Header Functionality - Fixed Version
class HeaderManager {
  constructor() {
    this.header = document.querySelector(".site-header");
    this.mobileToggle = document.querySelector(".mobile-menu-toggle");
    this.mobileOverlay = document.querySelector(".mobile-menu-overlay");
    this.searchToggle = document.querySelector(".search-toggle");
    this.searchOverlay = document.querySelector(".search-overlay");
    this.searchClose = document.querySelector(".search-close");

    this.init();
  }

  init() {
    this.setupScrollEffect();
    this.setupMobileMenu();
    this.setupSearch();
    this.setupDropdowns();
    this.setupKeyboardNavigation();
  }

  setupScrollEffect() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.header.classList.add("scrolled");
      } else {
        this.header.classList.remove("scrolled");
      }
    });
  }

  setupMobileMenu() {
    if (!this.mobileToggle || !this.mobileOverlay) return;

    this.mobileToggle.addEventListener("click", () => {
      const isExpanded =
        this.mobileToggle.getAttribute("aria-expanded") === "true";

      this.mobileToggle.setAttribute("aria-expanded", !isExpanded);

      if (!isExpanded) {
        this.mobileOverlay.classList.add("active");
        this.mobileOverlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      } else {
        this.closeMobileMenu();
      }
    });

    // Mobile dropdown toggles
    document.querySelectorAll(".mobile-dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        const icon = toggle.querySelector("i");

        dropdown.classList.toggle("expanded");

        if (icon) {
          icon.style.transform = dropdown.classList.contains("expanded")
            ? "rotate(180deg)"
            : "rotate(0deg)";
        }
      });
    });

    // Close mobile menu when clicking outside
    this.mobileOverlay.addEventListener("click", (e) => {
      if (e.target === this.mobileOverlay) {
        this.closeMobileMenu();
      }
    });
  }

  setupSearch() {
    if (!this.searchToggle || !this.searchOverlay) return;

    this.searchToggle.addEventListener("click", () => {
      this.searchOverlay.classList.add("active");
      this.searchOverlay.setAttribute("aria-hidden", "false");
      this.searchToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";

      // Focus search input after animation
      setTimeout(() => {
        const searchInput = this.searchOverlay.querySelector(".search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    });

    if (this.searchClose) {
      this.searchClose.addEventListener("click", () => {
        this.closeSearch();
      });
    }

    // Close search when clicking overlay background
    this.searchOverlay.addEventListener("click", (e) => {
      if (e.target === this.searchOverlay) {
        this.closeSearch();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeSearch();
        this.closeMobileMenu();
      }
    });
  }

  closeSearch() {
    if (!this.searchOverlay) return;

    this.searchOverlay.classList.remove("active");
    this.searchOverlay.setAttribute("aria-hidden", "true");
    this.searchToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  closeMobileMenu() {
    if (!this.mobileToggle || !this.mobileOverlay) return;

    this.mobileToggle.setAttribute("aria-expanded", "false");
    this.mobileOverlay.classList.remove("active");
    this.mobileOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  setupDropdowns() {
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !isExpanded);
      });
    });
  }

  setupKeyboardNavigation() {
    // Enhanced keyboard navigation for mobile menu
    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          const focusableElements = this.mobileOverlay.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }
  }
}

// Initialize header when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HeaderManager();
});
