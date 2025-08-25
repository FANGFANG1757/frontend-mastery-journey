/**
 * Week 3: JavaScript Fundamentals - Interactive Pokédex
 *
 * This file contains TODO comments for you to implement JavaScript functionality.
 * Focus on practicing core JavaScript concepts:
 * - Variables & Scope
 * - Array Methods (map, filter, reduce)
 * - Async/Await & Promises
 * - DOM Manipulation
 * - Event Handling
 * - Error Handling
 */

// ============================================================================
// API Configuration
// ============================================================================

const API_BASE_URL = "https://pokeapi.co/api/v2";
const POKEMON_LIMIT = 20; // Start with 20, implement pagination later
const POKEMON_SPRITE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

// ============================================================================
// Global State Management
// ============================================================================

// TODO: Create a state object to manage application data
// Should include:
// - allPokemon: array of all fetched Pokemon
// - displayedPokemon: array of currently displayed Pokemon (after filters)
// - favorites: Set or array of favorite Pokemon IDs
// - currentFilter: object with active filters
// - isLoading: boolean
// - error: null or error message
const state = {
  allPokemon: [],
  displayedPokemon: [],
  favorites: new Set(),
  currentFilter: {
    search: "",
    type: "",
    showFavoritesOnly: false,
    sortBy: "id",
  },
  isLoading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

// ============================================================================
// Utility Functions
// ============================================================================

// TODO: Implement debounce function for search input
// This prevents too many API calls while user is typing
// Input: func (Function) - the function to debounce
//        delay (Number) - delay in milliseconds
// Output: (Function) - debounced version of the input function
// Example: const debouncedSearch = debounce(handleSearch, 300);
function debounce(func, delay) {
  // Your implementation here
  // Hint: Use setTimeout and clearTimeout
}

// TODO: Implement throttle function for scroll events
// Input: func (Function) - the function to throttle
//        limit (Number) - time limit in milliseconds between function calls
// Output: (Function) - throttled version that executes at most once per limit period
// Example: const throttledScroll = throttle(handleScroll, 100);
function throttle(func, limit) {
  // Your implementation here
}

// TODO: Format Pokemon ID to display as #001, #025, etc.
// Input: id (Number) - Pokemon ID (e.g., 1, 25, 150)
// Output: (String) - formatted ID with # and padded zeros (e.g., "#001", "#025", "#150")
// Example: formatPokemonId(25) => "#025"
function formatPokemonId(id) {
  // Your implementation here
}

// TODO: Capitalize first letter of Pokemon name
// Input: str (String) - lowercase string (e.g., "pikachu")
// Output: (String) - string with first letter capitalized (e.g., "Pikachu")
// Example: capitalizeFirst("bulbasaur") => "Bulbasaur"
function capitalizeFirst(str) {
  // Your implementation here
}

// TODO: Convert height from decimeters to meters, weight from hectograms to kg
// Input: height (Number) - height in decimeters (e.g., 7 for 0.7m)
// Output: (String) - formatted height in meters (e.g., "0.7 m")
// Example: formatHeight(7) => "0.7 m"
//          formatHeight(17) => "1.7 m"
function formatHeight(height) {
  // Your implementation here
  // Height is in decimeters, convert to meters
}

// Input: weight (Number) - weight in hectograms (e.g., 69 for 6.9kg)
// Output: (String) - formatted weight in kilograms (e.g., "6.9 kg")
// Example: formatWeight(69) => "6.9 kg"
//          formatWeight(905) => "90.5 kg"
function formatWeight(weight) {
  // Your implementation here
  // Weight is in hectograms, convert to kg
}

// ============================================================================
// LocalStorage Functions
// ============================================================================

// TODO: Load favorites from localStorage
// Input: none
// Output: (Set) - Set containing favorite Pokemon IDs from localStorage
// Example: loadFavorites() => Set([1, 25, 150])
// Note: Returns empty Set if no favorites exist or localStorage is empty
function loadFavorites() {
  // Your implementation here
  // Return a Set of favorite Pokemon IDs
}

// TODO: Save favorites to localStorage
// Input: none (uses state.favorites)
// Output: void - saves to localStorage as 'pokemonFavorites'
// Example: saveFavorites() // saves current state.favorites to localStorage
// Note: Converts Set to array for JSON serialization
function saveFavorites() {
  // Your implementation here
  // Convert Set to array before saving
}

// TODO: Toggle favorite status for a Pokemon
// Input: pokemonId (Number) - ID of Pokemon to toggle (e.g., 25)
// Output: (Boolean) - true if added to favorites, false if removed
// Example: toggleFavorite(25) => true (if adding)
//          toggleFavorite(25) => false (if removing)
// Side effects: Updates state.favorites, localStorage, and UI
function toggleFavorite(pokemonId) {
  // Your implementation here
  // Add/remove from state.favorites
  // Update localStorage
  // Update UI
}

// ============================================================================
// API Functions
// ============================================================================

// TODO: Fetch list of Pokemon from API
// Input: offset (Number) - starting index for pagination (default: 0)
//        limit (Number) - number of Pokemon to fetch (default: POKEMON_LIMIT)
// Output: (Promise<Array>) - array of Pokemon objects with {name, url} properties
// Example: await fetchPokemonList(0, 20) => [{name: "bulbasaur", url: "..."}, ...]
// Throws: Error if API request fails
async function fetchPokemonList(offset = 0, limit = POKEMON_LIMIT) {
  try {
    // Your implementation here
    // 1. Set loading state
    // 2. Fetch from `${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    // 3. Return results array
    // 4. Handle errors appropriately
  } catch (error) {
    // Handle error
  }
}

// TODO: Fetch detailed data for a single Pokemon
// Input: pokemonUrl (String) - API URL for specific Pokemon
// Output: (Promise<Object>) - detailed Pokemon data including stats, types, abilities
// Example: await fetchPokemonDetails("https://pokeapi.co/api/v2/pokemon/25")
//          => {id: 25, name: "pikachu", types: [...], stats: [...], ...}
// Throws: Error if API request fails
async function fetchPokemonDetails(pokemonUrl) {
  try {
    // Your implementation here
    // Fetch detailed data from the provided URL
    // Transform data to needed format
  } catch (error) {
    // Handle error
  }
}

// TODO: Fetch and process initial Pokemon data
// Input: none
// Output: (Promise<void>) - loads data and updates UI
// Side effects: Updates state.allPokemon, state.displayedPokemon, renders grid
// Example: await loadInitialPokemon() // fetches and displays first 20 Pokemon
async function loadInitialPokemon() {
  // Your implementation here
  // 1. Show loading state
  // 2. Fetch Pokemon list
  // 3. Fetch details for each Pokemon (consider Promise.all)
  // 4. Transform data to include needed properties
  // 5. Update state
  // 6. Render Pokemon grid
  // 7. Hide loading state
}

// TODO: Load more Pokemon (for pagination)
// Input: none (uses state.offset to determine next batch)
// Output: (Promise<void>) - loads more data and appends to existing
// Side effects: Updates state.offset, appends to state.allPokemon, re-renders
// Example: await loadMorePokemon() // loads next 20 Pokemon
async function loadMorePokemon() {
  // Your implementation here
  // Similar to loadInitialPokemon but append to existing data
}

// ============================================================================
// Data Transformation Functions
// ============================================================================

// TODO: Transform raw Pokemon data to display format
// Input: pokemonData (Object) - raw data from PokeAPI
// Output: (Object) - formatted Pokemon object for display
// Example Input: {id: 25, name: "pikachu", height: 4, weight: 60, types: [{type: {name: "electric"}}], ...}
// Example Output: {id: 25, name: "Pikachu", formattedId: "#025", height: "0.4 m", weight: "6.0 kg", types: ["electric"], ...}
function transformPokemonData(pokemonData) {
  // Your implementation here
  // Extract and format:
  // - id, name, types, sprite, stats
  // - height, weight, abilities
  // Return formatted object
}

// TODO: Filter Pokemon based on current filters
// Input: none (uses state.allPokemon and state.currentFilter)
// Output: (Array) - filtered array of Pokemon
// Example: filterPokemon() with search="pika" => [pikachu, pichu]
//          filterPokemon() with type="fire" => [charmander, charmeleon, ...]
//          filterPokemon() with showFavoritesOnly=true => only favorited Pokemon
function filterPokemon() {
  // Your implementation here
  // Apply filters from state.currentFilter:
  // 1. Search by name
  // 2. Filter by type
  // 3. Show favorites only
  // Return filtered array
}

// TODO: Sort Pokemon based on current sort option
// Input: pokemonArray (Array) - array of Pokemon to sort
// Output: (Array) - sorted array (sorts in-place and returns)
// Example: sortPokemon([{id: 25}, {id: 1}]) with sortBy="id" => [{id: 1}, {id: 25}]
//          sortPokemon([{name: "Zapdos"}, {name: "Abra"}]) with sortBy="name" => [{name: "Abra"}, {name: "Zapdos"}]
function sortPokemon(pokemonArray) {
  // Your implementation here
  // Sort by: id, name, or other criteria
  // Use array.sort() with appropriate compare function
}

// ============================================================================
// DOM Manipulation Functions
// ============================================================================

// TODO: Create Pokemon card HTML element
// Input: pokemon (Object) - Pokemon data object with id, name, sprite, types, etc.
// Output: (HTMLElement) - complete card element ready to append to DOM
// Example: createPokemonCard({id: 25, name: "Pikachu", sprite: "...", types: ["electric"]})
//          => <article class="pokemon-card">...</article>
function createPokemonCard(pokemon) {
  // Your implementation here
  // Create card element with:
  // - Image
  // - Name
  // - Number
  // - Types
  // - Favorite button
  // Add event listeners
  // Return DOM element
}

// TODO: Render Pokemon grid
// Input: pokemonArray (Array) - array of Pokemon objects to display
// Output: void - updates DOM directly
// Side effects: Clears and repopulates #pokemon-grid, updates results counter
// Example: renderPokemonGrid([pikachu, bulbasaur, charmander])
function renderPokemonGrid(pokemonArray) {
  // Your implementation here
  // 1. Clear existing grid
  // 2. Create cards for each Pokemon
  // 3. Append to grid container
  // 4. Update results count
}

// TODO: Show loading state
// Input: none
// Output: void
// Side effects: Shows loading spinner, hides grid, updates state.isLoading
// Example: showLoading() // displays loading UI
function showLoading() {
  // Your implementation here
}

// TODO: Hide loading state
// Input: none
// Output: void
// Side effects: Hides loading spinner, shows grid, updates state.isLoading
// Example: hideLoading() // removes loading UI
function hideLoading() {
  // Your implementation here
}

// TODO: Show error message
// Input: message (String) - error message to display
// Output: void
// Side effects: Shows error UI with message, hides loading/grid
// Example: showError("Failed to load Pokemon data")
function showError(message) {
  // Your implementation here
}

// TODO: Update favorites counter in header
// Input: none (uses state.favorites)
// Output: void
// Side effects: Updates counter text in header showing favorite count
// Example: updateFavoritesCounter() // shows "Favorites (3)"
function updateFavoritesCounter() {
  // Your implementation here
}

// ============================================================================
// Modal Functions
// ============================================================================

// TODO: Open Pokemon detail modal
// Input: pokemon (Object) - Pokemon data to display in modal
// Output: void
// Side effects: Shows modal, sets focus trap, adds ESC listener
// Example: openPokemonModal({id: 25, name: "Pikachu", stats: [...]})
function openPokemonModal(pokemon) {
  // Your implementation here
  // 1. Populate modal with Pokemon data
  // 2. Show modal
  // 3. Set focus management
  // 4. Add escape key listener
}

// TODO: Close Pokemon detail modal
// Input: none
// Output: void
// Side effects: Hides modal, removes listeners, restores focus
// Example: closePokemonModal() // closes currently open modal
function closePokemonModal() {
  // Your implementation here
  // 1. Hide modal
  // 2. Clean up event listeners
  // 3. Return focus to trigger element
}

// TODO: Populate modal with Pokemon data
// Input: pokemon (Object) - complete Pokemon data object
// Output: void
// Side effects: Updates all modal DOM elements with Pokemon data
// Example: populateModal({name: "Pikachu", id: 25, types: ["electric"], ...})
function populateModal(pokemon) {
  // Your implementation here
  // Update all modal elements with Pokemon data:
  // - Image, name, number
  // - Types with badges
  // - Stats with progress bars
  // - Abilities
  // - Physical characteristics
}

// TODO: Update stat bars in modal
// Input: stats (Array) - array of stat objects [{name: "hp", value: 35}, ...]
// Output: void
// Side effects: Updates width of stat bar elements based on percentages
// Example: updateStatBars([{name: "hp", value: 35}, {name: "attack", value: 55}])
// Note: Max stat value is 255 for percentage calculation
function updateStatBars(stats) {
  // Your implementation here
  // Calculate percentage for each stat (max stat is typically 255)
  // Update width of stat-fill elements
}

// ============================================================================
// Event Handlers
// ============================================================================

// TODO: Handle search input
// Input: event (Event) - input event from search field
// Output: void
// Side effects: Updates state.currentFilter.search, re-renders grid
// Example: Called on input event: <input oninput="handleSearch(event)">
// Note: Should be debounced to avoid excessive filtering
function handleSearch(event) {
  // Your implementation here
  // 1. Update state.currentFilter.search
  // 2. Filter and render Pokemon
  // Use debounced version
}

// TODO: Handle type filter change
// Input: event (Event) - change event from type select element
// Output: void
// Side effects: Updates state.currentFilter.type, re-renders grid
// Example: <select onchange="handleTypeFilter(event)">
function handleTypeFilter(event) {
  // Your implementation here
  // 1. Update state.currentFilter.type
  // 2. Filter and render Pokemon
}

// TODO: Handle sort change
// Input: event (Event) - change event from sort select element
// Output: void
// Side effects: Updates state.currentFilter.sortBy, re-sorts and re-renders
// Example: event.target.value = "name" or "id"
function handleSortChange(event) {
  // Your implementation here
  // 1. Update state.currentFilter.sortBy
  // 2. Sort and render Pokemon
}

// TODO: Handle favorites toggle button
// Input: none
// Output: void
// Side effects: Toggles state.currentFilter.showFavoritesOnly, updates UI
// Example: handleFavoritesToggle() // switches between all/favorites only
function handleFavoritesToggle() {
  // Your implementation here
  // 1. Toggle state.currentFilter.showFavoritesOnly
  // 2. Update button aria-pressed
  // 3. Filter and render Pokemon
}

// TODO: Handle clear search button
// Input: none
// Output: void
// Side effects: Clears search input, resets filter, re-renders all Pokemon
// Example: handleClearSearch() // resets search and shows all Pokemon
function handleClearSearch() {
  // Your implementation here
  // 1. Clear search input
  // 2. Update state
  // 3. Re-render
}

// TODO: Handle load more button
// Input: none
// Output: void (async)
// Side effects: Fetches next batch, appends to state, re-renders
// Example: handleLoadMore() // loads next 20 Pokemon
function handleLoadMore() {
  // Your implementation here
  // Load next batch of Pokemon
}

// TODO: Handle retry button (for error state)
// Input: none
// Output: void (async)
// Side effects: Clears error, retries last failed operation
// Example: handleRetry() // attempts to reload Pokemon data
function handleRetry() {
  // Your implementation here
  // Retry failed operation
}

// TODO: Handle Pokemon card click
// Input: pokemon (Object) - Pokemon data from clicked card
// Output: void
// Side effects: Opens modal with detailed Pokemon information
// Example: handlePokemonClick({id: 25, name: "Pikachu", ...})
function handlePokemonClick(pokemon) {
  // Your implementation here
  // Open modal with Pokemon details
}

// TODO: Handle favorite button click
// Input: event (Event) - click event to stop propagation
//        pokemonId (Number) - ID of Pokemon to toggle
// Output: void
// Side effects: Toggles favorite status, updates localStorage, updates UI
// Example: handleFavoriteClick(event, 25) // toggles Pikachu favorite status
function handleFavoriteClick(event, pokemonId) {
  // Your implementation here
  // 1. Prevent event bubbling
  // 2. Toggle favorite
  // 3. Update UI
}

// TODO: Handle modal close
// Input: none
// Output: void
// Side effects: Closes modal, removes listeners, restores focus
// Example: handleModalClose() // closes current modal
function handleModalClose() {
  // Your implementation here
}

// TODO: Handle escape key press
// Input: event (KeyboardEvent) - keyboard event to check key
// Output: void
// Side effects: Closes modal if ESC key pressed and modal is open
// Example: event.key === "Escape" => closes modal
function handleEscapeKey(event) {
  // Your implementation here
  // Close modal if open
}

// ============================================================================
// Event Listeners Setup
// ============================================================================

// TODO: Set up all event listeners
// Input: none
// Output: void
// Side effects: Attaches all event listeners to DOM elements
// Example: initializeEventListeners() // sets up entire app interactivity
// Note: Use event delegation for dynamic elements (Pokemon cards)
function initializeEventListeners() {
  // Your implementation here
  // Add listeners for:
  // 1. Search input (with debounce)
  // 2. Clear search button
  // 3. Type filter select
  // 4. Sort select
  // 5. Favorites toggle button
  // 6. Load more button
  // 7. Retry button
  // 8. Modal close button
  // 9. Modal overlay click
  // 10. Escape key press
  // 11. Pokemon card clicks (use event delegation)
}

// ============================================================================
// Initialization
// ============================================================================

// TODO: Initialize the application
// Input: none
// Output: Promise<void>
// Side effects: Initializes entire app - loads data, sets up listeners
// Example: Called on DOMContentLoaded event
// Error handling: Shows error UI if initial load fails
async function init() {
  // Your implementation here
  // 1. Load favorites from localStorage
  // 2. Set up event listeners
  // 3. Load initial Pokemon data
  // 4. Handle any errors
}

// Start the application when DOM is ready
document.addEventListener("DOMContentLoaded", init);

// ============================================================================
// Extra Challenges (Optional)
// ============================================================================

// TODO: Implement infinite scroll
function setupInfiniteScroll() {
  // Your implementation here
  // Use Intersection Observer API
}

// TODO: Implement keyboard navigation for grid
function setupKeyboardNavigation() {
  // Your implementation here
  // Arrow keys to navigate between Pokemon cards
}

// TODO: Add Pokemon comparison feature
function comparePokemon(pokemon1, pokemon2) {
  // Your implementation here
  // Show side-by-side comparison
}

// TODO: Implement search suggestions/autocomplete
function setupSearchAutocomplete() {
  // Your implementation here
}

// TODO: Add animation when Pokemon cards appear
function animatePokemonCards() {
  // Your implementation here
  // Use CSS animations or Web Animations API
}

// ============================================================================
// Performance Optimizations (Optional)
// ============================================================================

// TODO: Implement virtual scrolling for large lists
// TODO: Add image lazy loading
// TODO: Implement request caching
// TODO: Add service worker for offline support
