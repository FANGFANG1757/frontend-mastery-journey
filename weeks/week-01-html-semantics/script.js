// Wuli Home E-commerce Interactive Features

// Hero image lazy loading optimization
document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(".hero-image");

  // Add loaded class when image is fully loaded
  if (heroImage?.complete) {
    heroImage.classList.add("loaded");
  } else if (heroImage) {
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
  // Mobile navigation toggle functionality with focus trap
  function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const mobileOverlay = document.querySelector(".mobile-menu-overlay");
    const body = document.body;
    let isOpen = false;
    let focusableElements = [];
    let firstFocusable = null;
    let lastFocusable = null;

    function getFocusableElements() {
      focusableElements = Array.from(
        mobileOverlay?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        ) || []
      );
      firstFocusable = focusableElements[0];
      lastFocusable = focusableElements[focusableElements.length - 1];
    }

    function trapFocus(e) {
      if (!isOpen) return;
      
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    }

    function openMenu() {
      isOpen = true;
      mobileToggle?.setAttribute("aria-expanded", "true");
      mobileOverlay?.classList.add("active");
      mobileOverlay?.setAttribute("aria-hidden", "false");
      body.style.overflow = "hidden";
      
      // Get focusable elements and trap focus
      getFocusableElements();
      firstFocusable?.focus();
      document.addEventListener("keydown", trapFocus);
    }

    function closeMenu() {
      isOpen = false;
      mobileToggle?.setAttribute("aria-expanded", "false");
      mobileOverlay?.classList.remove("active");
      mobileOverlay?.setAttribute("aria-hidden", "true");
      body.style.overflow = "";
      document.removeEventListener("keydown", trapFocus);
      mobileToggle?.focus();
    }

    // Toggle menu on button click
    mobileToggle?.addEventListener("click", () => {
      isOpen ? closeMenu() : openMenu();
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    });

    // Close when clicking outside
    mobileOverlay?.addEventListener("click", (e) => {
      if (e.target === mobileOverlay) {
        closeMenu();
      }
    });

    // Handle mobile dropdown toggles
    const dropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle");
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const dropdown = toggle.nextElementSibling;
        const icon = toggle.querySelector("i");
        
        if (dropdown?.classList.contains("expanded")) {
          dropdown.classList.remove("expanded");
          icon?.classList.remove("fa-chevron-up");
          icon?.classList.add("fa-chevron-down");
        } else {
          dropdown?.classList.add("expanded");
          icon?.classList.remove("fa-chevron-down");
          icon?.classList.add("fa-chevron-up");
        }
      });
    });
  }

  // Dropdown menus functionality
  function initDropdownMenus() {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    
    dropdownToggles.forEach(toggle => {
      const dropdown = toggle.nextElementSibling;
      let timeout;

      // Keyboard navigation
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
      });

      // Mouse interactions
      const parent = toggle.parentElement;
      parent?.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        toggle.setAttribute("aria-expanded", "true");
      });

      parent?.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          toggle.setAttribute("aria-expanded", "false");
        }, 300);
      });

      // Keyboard navigation with arrow keys
      toggle.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          toggle.setAttribute("aria-expanded", "true");
          dropdown?.querySelector("a")?.focus();
        }
      });
    });
  }

  // Search overlay functionality with focus management
  function initSearchOverlay() {
    const searchToggle = document.querySelector(".search-toggle");
    const searchOverlay = document.querySelector(".search-overlay");
    const searchClose = searchOverlay?.querySelector(".search-close");
    const searchInput = searchOverlay?.querySelector(".search-input");
    const body = document.body;
    let previousFocus = null;
    let focusableElements = [];

    function getFocusableElements() {
      focusableElements = Array.from(
        searchOverlay?.querySelectorAll(
          'input, button, a[href], [tabindex]:not([tabindex="-1"])'
        ) || []
      );
    }

    function trapFocus(e) {
      if (!searchOverlay?.classList.contains("active")) return;
      
      if (e.key === "Tab") {
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    }

    function openSearch() {
      previousFocus = document.activeElement;
      searchOverlay?.classList.add("active");
      searchOverlay?.setAttribute("aria-hidden", "false");
      searchToggle?.setAttribute("aria-expanded", "true");
      body.style.overflow = "hidden";
      
      getFocusableElements();
      document.addEventListener("keydown", trapFocus);
      setTimeout(() => searchInput?.focus(), 100);
    }

    function closeSearch() {
      searchOverlay?.classList.remove("active");
      searchOverlay?.setAttribute("aria-hidden", "true");
      searchToggle?.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
      document.removeEventListener("keydown", trapFocus);
      
      // Restore focus to previous element
      if (previousFocus) {
        previousFocus.focus();
        previousFocus = null;
      } else {
        searchToggle?.focus();
      }
    }

    searchToggle?.addEventListener("click", openSearch);
    searchClose?.addEventListener("click", closeSearch);

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchOverlay?.classList.contains("active")) {
        closeSearch();
      }
    });

    // Close when clicking overlay background
    searchOverlay?.addEventListener("click", (e) => {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });

    // Handle search form submission
    const searchForm = searchOverlay?.querySelector(".search-form");
    searchForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput?.value.trim();
      if (query) {
        console.log("Searching for:", query);
        // Implement actual search functionality here
        closeSearch();
      }
    });
  }

  // Shopping cart functionality
  function initCartFunctionality() {
    const cartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartCount = document.querySelector(".cart-count");
    let cart = JSON.parse(localStorage.getItem("wuliCart") || "[]");

    // Update cart count on load
    function updateCartCount() {
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      if (cartCount) {
        cartCount.textContent = count;
        cartCount.parentElement?.setAttribute("aria-label", `Shopping cart (${count} ${count === 1 ? 'item' : 'items'})`);
      }
    }

    updateCartCount();

    // Add to cart functionality
    cartButtons.forEach(button => {
      button.addEventListener("click", async function() {
        const productId = this.dataset.productId;
        const productName = this.dataset.productName;
        const productPrice = parseFloat(this.dataset.productPrice);

        // Show loading state
        this.classList.add("loading");
        this.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        // Add to cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
          });
        }

        // Save to localStorage
        localStorage.setItem("wuliCart", JSON.stringify(cart));
        updateCartCount();

        // Show success state
        this.classList.remove("loading");
        this.classList.add("success");
        const originalText = this.querySelector(".btn-text").textContent;
        this.querySelector(".btn-text").textContent = "Added!";

        // Reset button after delay
        setTimeout(() => {
          this.classList.remove("success");
          this.querySelector(".btn-text").textContent = originalText;
          this.disabled = false;
        }, 2000);

        // Announce to screen readers
        const announcement = document.createElement("div");
        announcement.setAttribute("role", "status");
        announcement.setAttribute("aria-live", "polite");
        announcement.className = "sr-only";
        announcement.textContent = `${productName} added to cart`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      });
    });
  }

  // Form validation
  function initFormValidation() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
      const emailInputs = form.querySelectorAll('input[type="email"]');
      const requiredInputs = form.querySelectorAll('[required]');

      // Email validation
      emailInputs.forEach(input => {
        input.addEventListener("blur", () => {
          const value = input.value.trim();
          const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          
          if (value && !isValid) {
            input.setAttribute("aria-invalid", "true");
            const error = input.parentElement?.querySelector(".form-error");
            if (error) {
              error.classList.add("show");
              error.textContent = "Please enter a valid email address";
            }
          } else {
            input.setAttribute("aria-invalid", "false");
            const error = input.parentElement?.querySelector(".form-error");
            error?.classList.remove("show");
          }
        });
      });

      // Required field validation
      requiredInputs.forEach(input => {
        input.addEventListener("blur", () => {
          if (!input.value.trim()) {
            input.setAttribute("aria-invalid", "true");
            const error = input.parentElement?.querySelector(".form-error");
            if (error) {
              error.classList.add("show");
              error.textContent = "This field is required";
            }
          } else {
            input.removeAttribute("aria-invalid");
            const error = input.parentElement?.querySelector(".form-error");
            error?.classList.remove("show");
          }
        });
      });

      // Form submission
      form.addEventListener("submit", (e) => {
        let isValid = true;

        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.setAttribute("aria-invalid", "true");
            const error = input.parentElement?.querySelector(".form-error");
            if (error) {
              error.classList.add("show");
              error.textContent = "This field is required";
            }
          }
        });

        if (!isValid) {
          e.preventDefault();
          const firstInvalid = form.querySelector('[aria-invalid="true"]');
          firstInvalid?.focus();
        }
      });
    });
  }

  // Product cards interactivity
  function initProductCards() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
      // Enhance keyboard navigation
      const link = card.querySelector(".product-link");
      const button = card.querySelector(".add-to-cart-btn");

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.target === card) {
          link?.click();
        }
      });

      // Add hover effect coordination
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Newsletter form
  function initNewsletterForm() {
    const newsletterForm = document.querySelector(".newsletter-form");
    const emailInput = newsletterForm?.querySelector('input[type="email"]');
    const submitBtn = newsletterForm?.querySelector(".submit-btn");
    const successMessage = newsletterForm?.querySelector(".form-success");

    newsletterForm?.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = emailInput?.value.trim();
      if (!email) return;

      // Show loading state
      submitBtn?.classList.add("loading");
      submitBtn?.setAttribute("disabled", "true");

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success
      submitBtn?.classList.remove("loading");
      submitBtn?.classList.add("success");
      
      if (successMessage) {
        successMessage.classList.add("show");
        successMessage.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <span>Welcome to Wuli Home! Check your email for a special discount.</span>
        `;
      }

      // Reset form
      newsletterForm.reset();
      
      // Remove success state after delay
      setTimeout(() => {
        submitBtn?.classList.remove("success");
        submitBtn?.removeAttribute("disabled");
        successMessage?.classList.remove("show");
      }, 5000);
    });
  }

  // Accessibility features
  function initAccessibilityFeatures() {
    // Skip link functionality
    const skipLink = document.querySelector(".skip-link");
    skipLink?.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#main");
      target?.focus();
      target?.scrollIntoView();
    });

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    interactiveElements.forEach(element => {
      // Add focus visible styles
      element.addEventListener("focus", () => {
        element.style.outline = "2px solid var(--focus-color)";
        element.style.outlineOffset = "2px";
      });

      element.addEventListener("blur", () => {
        element.style.outline = "";
        element.style.outlineOffset = "";
      });
    });

    // Announce dynamic content changes
    const announcer = document.createElement("div");
    announcer.setAttribute("role", "status");
    announcer.setAttribute("aria-live", "polite");
    announcer.className = "sr-only";
    document.body.appendChild(announcer);

    window.announce = function(message) {
      announcer.textContent = message;
      setTimeout(() => {
        announcer.textContent = "";
      }, 1000);
    };
  }

  // Image lazy loading with Intersection Observer
  function observeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add("loaded");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  // Track Core Web Vitals
  function trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          console.log('CLS:', clsValue);
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Sticky header behavior
  function initStickyHeader() {
    const header = document.querySelector(".site-header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }

      // Hide on scroll down, show on scroll up (mobile)
      if (window.innerWidth <= 768) {
        if (currentScroll > lastScroll && currentScroll > 200) {
          header?.style.transform = "translateY(-100%)";
        } else {
          header?.style.transform = "translateY(0)";
        }
      }

      lastScroll = currentScroll;
    });
  }

  // Initialize all features
  initMobileMenu();
  initDropdownMenus();
  initSearchOverlay();
  initCartFunctionality();
  initFormValidation();
  initProductCards();
  initNewsletterForm();
  initAccessibilityFeatures();
  initStickyHeader();
  observeImages();
  trackCoreWebVitals();

  // Global keyboard navigation
  document.addEventListener("keydown", function (e) {
    // Press "/" to focus search
    if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
      const activeElement = document.activeElement;
      if (activeElement?.tagName !== "INPUT" && activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        document.querySelector(".search-toggle")?.click();
      }
    }
  });

  console.log("✨ Wuli Home interactive features initialized");
});