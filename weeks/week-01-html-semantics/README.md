# Week 1: HTML Semantics + Accessibility - TechShop

## 🎯 Learning Objectives
- [ ] Implement proper HTML landmarks (header, nav, main, footer)
- [ ] Use semantic elements correctly (section vs article)
- [ ] Add skip navigation link for accessibility
- [ ] Implement proper focus states for all interactive elements
- [ ] Use correct alt text and ARIA attributes
- [ ] Achieve Lighthouse accessibility score ≥ 90
- [ ] Create responsive layout without layout shifts

## 🛍️ Project: TechShop E-commerce Homepage

Build a semantic, accessible electronics store homepage with proper HTML structure and responsive design.

## 🚀 Tasks to Complete

### HTML **Semantics**
- [ ] Replace all TODO comments in `index.html` with proper implementations
- [ ] Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` appropriately
- [ ] Implement proper heading hierarchy (h1 → h2 → h3)
- [ ] Use `<article>` elements for product cards
- [ ] Implement proper form structure for newsletter signup

### E-commerce Specific Features
- [ ] Create semantic header with logo and navigation
- [ ] Build hero section with promotional content
- [ ] Implement product grid using CSS Grid
- [ ] Add product cards with images, names, prices, and CTA buttons
- [ ] Create categories navigation section
- [ ] Build accessible newsletter signup form
- [ ] Design comprehensive footer with multiple sections

### Accessibility Features
- [ ] Implement skip link that appears on focus
- [ ] Add proper ARIA labels for navigation and form elements
- [ ] Ensure all images have descriptive alt text
- [ ] Make "Add to Cart" buttons accessible with proper ARIA attributes
- [ ] Implement keyboard navigation for all interactive elements
- [ ] Add form validation and error messaging

### CSS Implementation
- [ ] Complete all TODO items in `styles.css`
- [ ] Implement mobile-first responsive design
- [ ] Use CSS Grid for product layout (1 col mobile → 2-3 tablet → 4+ desktop)
- [ ] Add proper focus indicators for all interactive elements
- [ ] Implement hover states for products and buttons
- [ ] Use `aspect-ratio` for product images to prevent CLS
- [ ] Create mobile navigation menu

### JavaScript Functionality
- [ ] Complete interactive features in `script.js`
- [ ] Implement mobile navigation toggle
- [ ] Add basic "Add to Cart" functionality
- [ ] Handle newsletter form submission
- [ ] Manage focus states for modals/menus
- [ ] Add keyboard shortcuts (Escape to close menus)

## 🧪 Testing Checklist

### Manual Testing
- [ ] Navigate using only keyboard (Tab, Enter, Shift+Tab)
- [ ] Test skip link by tabbing from address bar
- [ ] Verify all interactive elements have focus indicators
- [ ] Test mobile navigation menu functionality
- [ ] Verify "Add to Cart" buttons work properly
- [ ] Test newsletter form submission and validation
- [ ] Test responsive design at different screen sizes

### Accessibility Audit
- [ ] Run Lighthouse accessibility audit (target: ≥90)
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Verify color contrast meets WCAG AA standards
- [ ] Check that all product images have descriptive alt text
- [ ] Test form accessibility and error announcements

### Performance
- [ ] Run Lighthouse performance audit
- [ ] Check for Cumulative Layout Shift (CLS) issues
- [ ] Verify no unnecessary reflows/repaints

## 🛠 Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting (to be implemented)
npm run lint
```

## 📚 What I Learned

### Day 1: HTML Landmarks & E-commerce Structure
- TODO: Document your learnings about semantic HTML for e-commerce
- TODO: Note differences between section vs article for products

### Day 2: Accessibility in E-commerce
- TODO: Note insights about ARIA attributes for shopping interfaces
- TODO: Document form accessibility for newsletters and search

### Day 3: Responsive Product Layouts
- TODO: Record discoveries about CSS Grid for product grids
- TODO: Note mobile-first approach for e-commerce

### Day 4: Interactive E-commerce Features
- TODO: Document mobile navigation patterns
- TODO: Note "Add to Cart" button accessibility

### Day 5: Testing & E-commerce UX
- TODO: Note accessibility testing for shopping flows
- TODO: Document performance considerations for product images

## 🔗 Resources Used
- [MDN: HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM: Skip Navigation](https://webaim.org/techniques/skipnav/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [E-commerce Accessibility Best Practices](https://webaim.org/articles/)

## 🎉 Completion Criteria
- [ ] All TODO comments resolved with proper implementations
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Site deployed and accessible via public URL
- [ ] README updated with learnings and screenshots
- [ ] Repository has proper Git history with meaningful commits

---

**Next Week**: CSS Layout deep-dive with Flexbox and Grid