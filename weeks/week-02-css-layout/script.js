// Week 2: Basic JavaScript for Layout Interactions
// Focus: Simple DOM manipulation to support CSS layouts
// Note: Advanced JavaScript features will be covered in Week 3

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // TODO: Implement mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            // TODO: Toggle aria-expanded attribute
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // TODO: Toggle menu visibility with CSS class
            navMenu.classList.toggle('nav-menu--open');
        });
    }

    // TODO: Filter dropdown functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // TODO: Get the associated dropdown
            const dropdownId = button.getAttribute('aria-controls');
            const dropdown = document.getElementById(dropdownId);
            
            if (dropdown) {
                // TODO: Toggle dropdown visibility
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                dropdown.hidden = isExpanded;
                
                // TODO: Close other dropdowns
                filterButtons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.setAttribute('aria-expanded', 'false');
                        const otherDropdownId = otherButton.getAttribute('aria-controls');
                        const otherDropdown = document.getElementById(otherDropdownId);
                        if (otherDropdown) {
                            otherDropdown.hidden = true;
                        }
                    }
                });
            }
        });
    });

    // TODO: Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        // Check if click is outside filter area
        if (!event.target.closest('.filter-group')) {
            filterButtons.forEach(button => {
                button.setAttribute('aria-expanded', 'false');
                const dropdownId = button.getAttribute('aria-controls');
                const dropdown = document.getElementById(dropdownId);
                if (dropdown) {
                    dropdown.hidden = true;
                }
            });
        }
    });

    // TODO: Pagination functionality (basic)
    const paginationButtons = document.querySelectorAll('.pagination button');
    
    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // TODO: Remove current page styling from all buttons
            paginationButtons.forEach(btn => {
                btn.removeAttribute('aria-current');
            });
            
            // TODO: Add current page styling to clicked button
            if (button.textContent.match(/^\d+$/)) { // Only for number buttons
                button.setAttribute('aria-current', 'page');
            }
        });
    });

    // TODO: Product color selection
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // TODO: Remove selection from siblings
            const siblings = option.parentElement.querySelectorAll('.color-option');
            siblings.forEach(sibling => {
                sibling.classList.remove('color-option--selected');
            });
            
            // TODO: Add selection to clicked option
            option.classList.add('color-option--selected');
        });
    });

    // TODO: Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // TODO: Get email value
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // TODO: Basic validation (HTML5 handles most of it)
            if (email) {
                // TODO: Show success message (replace with proper feedback in Week 3)
                alert('Thank you for subscribing!');
                emailInput.value = '';
            }
        });
    }

    // TODO: Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                
                // TODO: Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // TODO: Basic product data (Week 3 will make this dynamic)
    const products = [
        {
            id: 1,
            name: 'Insulated Winter Jacket',
            description: 'Waterproof and windproof protection',
            price: 189.00,
            originalPrice: 279.00,
            discount: 32,
            image: 'https://via.placeholder.com/400x500',
            badge: 'Sale',
            colors: ['black', 'navy', 'green']
        },
        {
            id: 2,
            name: 'Trail Running Shoes',
            description: 'Lightweight with superior grip',
            price: 129.00,
            image: 'https://via.placeholder.com/400x500',
            badge: 'New',
            colors: ['gray', 'blue']
        },
        {
            id: 3,
            name: 'Hiking Backpack 40L',
            description: 'Ergonomic design with rain cover',
            price: 159.00,
            image: 'https://via.placeholder.com/400x500',
            colors: ['black', 'red', 'blue']
        },
        {
            id: 4,
            name: 'Merino Wool Base Layer',
            description: 'Temperature regulating comfort',
            price: 69.00,
            originalPrice: 89.00,
            discount: 22,
            image: 'https://via.placeholder.com/400x500',
            badge: 'Sale',
            colors: ['gray', 'navy']
        }
    ];

    // TODO: Week 3 will use this data to dynamically generate product cards
    // For now, this serves as a reference for the static HTML structure
    
    console.log('Week 2: CSS Layout template loaded');
    console.log('Products data:', products);
    console.log('TODO: Week 3 will make this interactive!');
});