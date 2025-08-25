# Week 2: CSS Layout - Flexbox + Grid

## 🎯 Learning Objectives

Master CSS Grid for 2D layouts and Flexbox for 1D layouts while building an e-commerce product listing page inspired by Patagonia's design.

### Core Concepts to Learn:
- **CSS Grid**: 2D layouts, `grid-template-columns/rows`, `grid-area`, `auto-fit/auto-fill`
- **Flexbox**: 1D layouts, `justify-content`, `align-items`, `flex-wrap`, `gap`
- **Responsive Design**: Mobile-first approach, breakpoints, container queries
- **Modern CSS**: `aspect-ratio`, `clamp()`, CSS custom properties
- **Layout Patterns**: Header navigation, product grids, filters, pagination

## 📁 Project Structure

```
week-02-css-layout/
├── README.md          # This file
├── index.html         # Semantic HTML structure with TODO comments
├── styles.css         # CSS file with Grid/Flexbox TODOs
├── script.js          # Basic JavaScript for interactions
└── package.json       # Development dependencies
```

## 🎨 Design Reference

This project recreates key layout patterns from Patagonia's product listing page:
- Responsive navigation with mobile menu
- Hero section with overlapping content
- Product grid with consistent card layouts
- Filter bar with dropdowns
- Pagination controls
- Multi-column footer

**Simplified for learning**: Focus on layout techniques rather than complex styling.

## 🛠 What You'll Build

### 1. Header Navigation (Flexbox)
- Horizontal navigation with logo, menu, and actions
- Responsive mobile hamburger menu
- Sticky header with proper spacing

### 2. Hero Section (CSS Grid)
- Overlapping text and image content
- Responsive background with `clamp()` sizing
- Call-to-action button with Flexbox layout

### 3. Filter Bar (Flexbox)
- Horizontal filter groups with dropdown positioning
- Sort control aligned to the right using `margin-left: auto`
- Responsive wrapping on smaller screens

### 4. Product Grid (CSS Grid)
- Responsive grid using `repeat(auto-fit, minmax())`
- Consistent aspect ratios for product images
- Hover effects and card layouts

### 5. Product Cards (Flexbox + Grid)
- Vertical card layout with Flexbox
- Price display with multiple values
- Color selection with Flexbox alignment

### 6. Footer (CSS Grid)
- Multi-column layout that adapts to screen size
- Newsletter signup form with Flexbox
- Social media icons with gap spacing

## 📝 TODO Implementation Guide

### Step 1: Header Flexbox Layout
```css
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.nav-menu {
    display: flex;
    gap: 1rem;
    list-style: none;
}

.nav-actions {
    display: flex;
    gap: 1rem;
    margin-left: auto; /* Push to right */
}
```

### Step 2: Hero Grid Layout
```css
.hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    min-height: 500px;
}

.hero-content {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 2;
}

.hero-image {
    grid-area: 1 / 1 / 2 / 3; /* Span both columns */
}
```

### Step 3: Products Grid
```css
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

/* Mobile: 1 column */
@media (max-width: 767px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
    .products-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
```

### Step 4: Product Card Layout
```css
.product-card {
    display: flex;
    flex-direction: column;
}

.product-image {
    aspect-ratio: 4 / 5; /* Consistent sizing */
}

.product-price {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
}

.product-colors {
    display: flex;
    gap: 0.5rem;
}
```

## 🎯 Completion Criteria

### Technical Requirements
- [ ] All TODO comments implemented with proper CSS Grid/Flexbox
- [ ] Responsive design: 1 column mobile → 2 tablet → 4 desktop
- [ ] Consistent aspect ratios using `aspect-ratio` property
- [ ] No layout shift during loading (proper spacing/sizing)
- [ ] Accessible navigation with ARIA labels
- [ ] Mobile-first responsive approach

### Performance Standards
- [ ] Lighthouse Performance score ≥90
- [ ] Cumulative Layout Shift (CLS) ≤0.1
- [ ] Proper semantic HTML structure maintained
- [ ] CSS custom properties used for theming
- [ ] `prefers-reduced-motion` respected

### Learning Validation
- [ ] Can explain difference between Grid vs Flexbox use cases
- [ ] Understands `auto-fit` vs `auto-fill` in CSS Grid
- [ ] Can implement responsive design without media queries (using `minmax()`)
- [ ] Knows when to use `justify-content` vs `align-items`
- [ ] Understands `aspect-ratio` property benefits

## 🔧 Development Setup

```bash
# Install dependencies (optional - for live server)
npm install

# Start development server
npm run dev

# Or open index.html directly in browser
```

## 📚 Key Resources

### CSS Grid
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid Garden](https://cssgridgarden.com/) - Interactive game

### Flexbox
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game
- [Flexbox Patterns](https://www.flexboxpatterns.com/)

### Modern CSS
- [aspect-ratio property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [clamp() function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

## 🎨 Design Inspiration

The layout patterns are simplified versions of:
- **Patagonia Shop**: Grid layouts, filter patterns
- **REI Product Pages**: Card layouts, responsive grids  
- **Outdoor Gear Sites**: Clean, functional e-commerce design

Focus on **layout mastery** rather than complex visual styling.

## 📈 Next Week Preview

**Week 3: JavaScript Fundamentals** will add interactivity to this static layout:
- Filter functionality
- Mobile menu toggle
- Product quick view
- Cart interactions

The CSS layout foundation you build this week will support dynamic content next week!

## 🔍 Self-Assessment

Rate your confidence (1-5) after completing:
- [ ] CSS Grid fundamentals ___/5
- [ ] Flexbox use cases ___/5  
- [ ] Responsive design ___/5
- [ ] Modern CSS properties ___/5
- [ ] Layout debugging ___/5

**Target**: All items ≥4 before advancing to Week 3