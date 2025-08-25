# Week 3: JavaScript Fundamentals - Interactive Pokédex

## 🎯 Learning Objectives

Master JavaScript fundamentals by building an interactive Pokédex application that fetches and displays Pokémon data.

### Core Concepts to Learn:
- **Variables & Scope**: `let`, `const`, `var`, block scope, function scope, closures
- **Data Types**: Primitives vs objects, type coercion, truthy/falsy values
- **Array Methods**: `map()`, `filter()`, `reduce()`, `find()`, `forEach()`
- **Object Manipulation**: Destructuring, spread operator, property access
- **Functions**: Arrow functions, callbacks, pure functions, higher-order functions
- **Async Patterns**: Promises, `async/await`, error handling with `try/catch`
- **DOM Manipulation**: querySelector, event listeners, dynamic content creation
- **API Integration**: `fetch()`, handling responses, error states

## 📁 Project Structure

```
week-03-javascript-fundamentals/
├── README.md          # This file
├── index.html         # Semantic HTML with Pokédex structure
├── styles.css         # CSS styling (focus on JS, not styling)
├── script.js          # JavaScript implementation with TODOs
└── package.json       # Development dependencies
```

## 🎮 What You'll Build: Interactive Pokédex

### Features to Implement:
1. **Pokémon List Display**: Show first 150 Pokémon in a grid
2. **Search Functionality**: Filter Pokémon by name with debouncing
3. **Type Filtering**: Filter by Pokémon type (fire, water, grass, etc.)
4. **Pokémon Details Modal**: Click to view detailed stats and abilities
5. **Pagination**: Load more Pokémon with infinite scroll or button
6. **Favorites System**: Save favorite Pokémon to localStorage
7. **Loading States**: Skeleton loaders during data fetching
8. **Error Handling**: Graceful fallbacks for API failures

## 🛠 Implementation Tasks

### Step 1: Core JavaScript Setup
- [ ] TODO: Set up API configuration and endpoints
- [ ] TODO: Create utility functions (debounce, throttle, formatters)
- [ ] TODO: Implement error handling wrapper for fetch
- [ ] TODO: Set up module pattern for code organization

### Step 2: Data Fetching & State Management
- [ ] TODO: Implement `fetchPokemonList()` with async/await
- [ ] TODO: Create `fetchPokemonDetails()` for individual Pokémon
- [ ] TODO: Build state management object for app data
- [ ] TODO: Implement caching mechanism to reduce API calls

### Step 3: Array & Object Manipulation
- [ ] TODO: Use `map()` to transform API data to display format
- [ ] TODO: Implement `filter()` for search and type filtering
- [ ] TODO: Use `reduce()` to group Pokémon by type
- [ ] TODO: Apply destructuring when handling API responses

### Step 4: DOM Manipulation & Events
- [ ] TODO: Create `renderPokemonCard()` function
- [ ] TODO: Implement `updatePokemonGrid()` for dynamic updates
- [ ] TODO: Add event listeners for search, filter, and clicks
- [ ] TODO: Build modal system for Pokémon details
- [ ] TODO: Implement keyboard navigation (arrow keys, Escape)

### Step 5: Advanced Features
- [ ] TODO: Implement debounced search with 300ms delay
- [ ] TODO: Add infinite scroll or "Load More" pagination
- [ ] TODO: Create favorites system with localStorage
- [ ] TODO: Build comparison feature (select 2 Pokémon)
- [ ] TODO: Add sorting options (by ID, name, stats)

### Step 6: Performance & Error Handling
- [ ] TODO: Implement lazy loading for images
- [ ] TODO: Add try/catch blocks for all async operations
- [ ] TODO: Create fallback UI for offline/error states
- [ ] TODO: Optimize re-renders with data diffing
- [ ] TODO: Add loading skeletons during fetch

## 📝 Code Examples & Patterns

### Fetch with Error Handling
```javascript
// TODO: Implement this pattern
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        // TODO: Show user-friendly error message
        return null;
    }
}
```

### Debounce Implementation
```javascript
// TODO: Implement debounce utility
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

### Array Methods Practice
```javascript
// TODO: Transform Pokémon data
const transformedPokemon = pokemonList
    .filter(pokemon => /* TODO: Filter logic */)
    .map(pokemon => ({
        // TODO: Transform structure
    }))
    .sort((a, b) => /* TODO: Sort logic */);
```

## 🎯 Completion Criteria

### Technical Requirements
- [ ] All JavaScript TODOs implemented with ES6+ syntax
- [ ] Proper error handling for all async operations
- [ ] No global variables (use modules or IIFE)
- [ ] Pure functions where possible (no side effects)
- [ ] Efficient DOM updates (batch operations)
- [ ] localStorage used for persistence

### Functionality Standards
- [ ] Pokédex displays at least 150 Pokémon
- [ ] Search works with <100ms visual feedback
- [ ] Filter by at least 5 Pokémon types
- [ ] Modal shows detailed stats and abilities
- [ ] Favorites persist across page refreshes
- [ ] Loading states for all async operations

### Code Quality
- [ ] Functions are small and single-purpose
- [ ] Proper use of const/let (no var)
- [ ] Consistent naming conventions
- [ ] Comments for complex logic only
- [ ] No console.logs in final code
- [ ] ESLint passes with no errors

## 🧪 Testing Checklist

### Manual Testing
- [ ] Search for "Pikachu" returns correct result
- [ ] Filter by "Fire" type shows only fire Pokémon
- [ ] Click Pokémon card opens detail modal
- [ ] Escape key closes modal
- [ ] Favorites persist after page reload
- [ ] Error message appears when API fails
- [ ] Loading states show during fetch

### Performance Testing
- [ ] Initial load time < 3 seconds
- [ ] Search response < 100ms (with debounce)
- [ ] No memory leaks from event listeners
- [ ] Images lazy load on scroll
- [ ] Smooth scrolling (60 FPS)

## 🔧 Development Setup

```bash
# Install dependencies (optional - for live server)
npm install

# Start development server
npm run dev

# Run linting
npm run lint
```

## 📚 Key Resources

### JavaScript Fundamentals
- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

### Array Methods
- [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array Method Explorer](https://arrayexplorer.netlify.app/)

### Async JavaScript
- [MDN: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### PokéAPI Documentation
- [PokéAPI v2 Docs](https://pokeapi.co/docs/v2)
- [API Endpoints](https://pokeapi.co/docs/v2#pokemon)
- [Response Examples](https://pokeapi.co/api/v2/pokemon/25)

## 📚 What I Should Learn

### Day 1: Variables, Scope & Functions
- TODO: Document learnings about scope and closures
- TODO: Note differences between arrow functions vs regular functions

### Day 2: Arrays & Objects
- TODO: Document array method use cases
- TODO: Note object destructuring patterns

### Day 3: Async JavaScript & API Integration
- TODO: Record insights about async/await vs promises
- TODO: Document error handling strategies

### Day 4: DOM Manipulation & Events
- TODO: Note efficient DOM update patterns
- TODO: Document event delegation benefits

### Day 5: Performance & Best Practices
- TODO: Record performance optimization techniques
- TODO: Note memory management considerations

## 🎉 Success Metrics

- [ ] Can explain closure concept with examples
- [ ] Understands when to use different array methods
- [ ] Can implement async/await with proper error handling
- [ ] Knows how to debounce/throttle functions
- [ ] Can manipulate DOM efficiently
- [ ] Understands event delegation
- [ ] Can work with browser APIs (localStorage, fetch)

## 📈 Next Week Preview

**Week 4: TypeScript Foundations + Git Mastery** will convert this JavaScript project to TypeScript:
- Add type definitions for Pokémon data
- Implement interfaces for API responses
- Use generics for reusable functions
- Set up strict TypeScript configuration
- Practice Git rebase workflow

The JavaScript foundation you build this week will be enhanced with type safety next week!

## 🔍 Self-Assessment

Rate your confidence (1-5) after completing:
- [ ] JavaScript scope & closures ___/5
- [ ] Array methods mastery ___/5
- [ ] Async/await patterns ___/5
- [ ] DOM manipulation ___/5
- [ ] API integration ___/5
- [ ] Error handling ___/5
- [ ] Performance optimization ___/5

**Target**: All items ≥4 before advancing to Week 4

---

**Deployment Target**: Deploy to Netlify/Vercel with public URL
**Documentation**: Update this README with your learnings and challenges