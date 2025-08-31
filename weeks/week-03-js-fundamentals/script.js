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
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Your implementation here
// Hint: Use setTimeout and clearTimeout

// TODO: Implement throttle function for scroll events
// Input: func (Function) - the function to throttle
//        limit (Number) - time limit in milliseconds between function calls
// Output: (Function) - throttled version that executes at most once per limit period
// Example: const throttledScroll = throttle(handleScroll, 100);
function throttle(func, limit) {
  // Your implementation here
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// TODO: Format Pokemon ID to display as #001, #025, etc.
// Input: id (Number) - Pokemon ID (e.g., 1, 25, 150)
// Output: (String) - formatted ID with # and padded zeros (e.g., "#001", "#025", "#150")
// Example: formatPokemonId(25) => "#025"
function formatPokemonId(id) {
  return `#${String(id).padStart(3, "0")}`;
  // Your implementation here
}

// TODO: Capitalize first letter of Pokemon name
// Input: str (String) - lowercase string (e.g., "pikachu")
// Output: (String) - string with first letter capitalized (e.g., "Pikachu")
// Example: capitalizeFirst("bulbasaur") => "Bulbasaur"
function capitalizeFirst(str) {
  if (!str) {
    return "";
  } else {
    return (
      String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase()
    );
  }

  // Your implementation here
}

// TODO: Convert height from decimeters to meters, weight from hectograms to kg
// Input: height (Number) - height in decimeters (e.g., 7 for 0.7m)
// Output: (String) - formatted height in meters (e.g., "0.7 m")
// Example: formatHeight(7) => "0.7 m"
//          formatHeight(17) => "1.7 m"
function formatHeight(height) {
  const meters = height / 10;
  return `${meters.toFixed(1)}m`;
  // Your implementation here
  // Height is in decimeters, convert to meters
}

// Input: weight (Number) - weight in hectograms (e.g., 69 for 6.9kg)
// Output: (String) - formatted weight in kilograms (e.g., "6.9 kg")
// Example: formatWeight(69) => "6.9 kg"
//          formatWeight(905) => "90.5 kg"
function formatWeight(weight) {
  const kg = weight / 10;
  return `${kg.toFixed(1)}kg`;
  // Your implementation here
  // Weight is in hectograms, convert to kg
}

// ============================================================================
// LocalStorage Functions
// ============================================================================
const FAV_LOCAL_STORAGE_KEY = "POKEMON_FAV";

// TODO: Load favorites from localStorage
// Input: none
// Output: (Set) - Set containing favorite Pokemon IDs from localStorage
// Example: loadFavorites() => Set([1, 25, 150])
// Note: Returns empty Set if no favorites exist or localStorage is empty
function loadFavorites() {
  // Your implementation here
  // Return a Set of favorite Pokemon IDs
  const pokemonIds = JSON.parse(localStorage.getItem(FAV_LOCAL_STORAGE_KEY));
  return new Set(pokemonIds);
}

// TODO: Save favorites to localStorage
// Input: none (uses state.favorites)
// Output: void - saves to localStorage as 'pokemonFavorites'
// Example: saveFavorites() // saves current state.favorites to localStorage
// Note: Converts Set to array for JSON serialization
function saveFavorites() {
  // Your implementation here
  // Convert Set to array before saving
  localStorage.setItem(
    FAV_LOCAL_STORAGE_KEY,
    JSON.stringify(Array.from(state.favorites))
  );
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
  const isFavorite = state.favorites.has(pokemonId);
  if (isFavorite) {
    state.favorites.delete(pokemonId);
  } else {
    state.favorites.add(pokemonId);
  }
  // Update localStorage
  saveFavorites();

  return !isFavorite;
  // TODO: Update UI
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
    state.isLoading = true;
    state.error = null;
    // 2. Fetch from `${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    const response = await fetch(
      `${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }

    // 3. Return results array
    const data = await response.json();
    return data.results;

    // 4. Handle errors appropriately
  } catch (error) {
    state.error = error.message;
    throw error;
    // Handle error
  } finally {
    state.isLoading = false;
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
    const response = await fetch(pokemonUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const data = await response.json();
    return data;

    // Transform data to needed format
  } catch (error) {
    console.error("Error fetching Pokemon Details:", error);
    throw error;
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
  showLoading();
  state.error = null;
  // 2. Fetch Pokemon list
  const pokemonList = await fetchPokemonList(0, POKEMON_LIMIT);

  // 3. Fetch details for each Pokemon (consider Promise.all)
  const detailPromises = pokemonList.map((pokemon) =>
    fetchPokemonDetails(pokemon.url)
  );
  const pokemonDetails = await Promise.all(detailPromises);
  // 4. Transform data to include needed properties
  const pokemons = pokemonDetails.map(transformPokemonData);
  // 5. Update state
  state.allPokemon = pokemons;
  // 6. Render Pokemon grid
  renderPokemonGrid(state.allPokemon);
  // 7. Hide loading state
  hideLoading();
}

// TODO: Load more Pokemon (for pagination)
// Input: none (uses state.offset to determine next batch)
// Output: (Promise<void>) - loads more data and appends to existing
// Side effects: Updates state.offset, appends to state.allPokemon, re-renders
// Example: await loadMorePokemon() // loads next 20 Pokemon
async function loadMorePokemon() {
  // Your implementation here
  // Similar to loadInitialPokemon but append to existing data
  if (state.isLoading || !state.hasMore) {
    return;
  } else {
    state.isLoading = true;
    state.offset += POKEMON_LIMIT;
    const pokemonList = await fetchPokemonList(state.offset, POKEMON_LIMIT);
    const detailPromises = pokemonList.map((pokemon) =>
      fetchPokemonDetails(pokemon.url)
    );
    const pokemonDetails = await Promise.all(detailPromises);
    const transformedPokemon = pokemonDetails.map(transformPokemonData);
    state.allPokemon = [...state.allPokemon, ...transformedPokemon];
    const filtered = filterPokemon();
    renderPokemonGrid(filtered);
  }
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
  console.log(pokemonData);
  return {
    id: pokemonData.id,
    name: capitalizeFirst(pokemonData.name),
    formattedId: formatPokemonId(pokemonData.id),
    sprite: pokemonData.sprites.front_default,
    types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
    height: formatHeight(pokemonData.height),
    weight: formatWeight(pokemonData.weight),
    stats: pokemonData.stats.map((statInfo) => {
      return { name: statInfo.stat.name, baseValue: statInfo.base_stat };
    }),
    abilities: pokemonData.abilities.map(
      (abilityInfo) => abilityInfo.ability.name
    ),
  };

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
  let filtered = [...state.allPokemon];
  if (state.currentFilter.search) {
    const searchTerm = state.currentFilter.search.toLowerCase();
    filtered = filtered.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
  }
  if (state.currentFilter.type) {
    filtered = filtered.filter((pokemon) =>
      pokemon.types.includes(state.currentFilter.type)
    );
  }
  if (state.currentFilter.showFavoritesOnly) {
    filtered = filtered.filter((pokemon) => state.favorites.has(pokemon.id));
  }
  return sortPokemon(filtered);
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
  const sorted = [...pokemonArray];
  switch (state.currentFilter.sortBy) {
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "id":
    default:
      sorted.sort((a, b) => a.id - b.id);
      break;
  }
  return sorted;
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
  const card = document.createElement("div");
  card.innerHTML = `<article class="pokemon-card" data-pokemon-id="${
    pokemon.id
  }" tabindex="0">
                    <div class="pokemon-image-container">
                        <img src="${pokemon.sprite}" alt="${
    pokemon.name
  }" class="pokemon-image" loading="lazy">
                        <button class="favorite-btn" aria-label="Add '${
                          pokemon.name
                        }' to favorites">
                            ❤️
                        </button>
                    </div>
                    <div class="pokemon-info">
                        <span class="pokemon-number">${
                          pokemon.formattedId
                        }</span>
                        <h3 class="pokemon-name">${pokemon.name}</h3>
                        <div class="pokemon-types">
                          ${pokemon.types
                            .map(
                              (type) =>
                                `<span class="type-badge type-${type}">${type}</span>`
                            )
                            .join("")}
                        </div>
                    </div>
                </article>`;

  // Your implementation here
  // Create card element with:
  // - Image
  // - Name
  // - Number
  // - Types
  // - Favorite button
  // Add event listeners
  // Return DOM element
  card.addEventListener("click", (e) => {
    handlePokemonClick(pokemon);
  });
  return card;
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
  const grid = document.getElementById("pokemon-grid");
  const resultsCount = document.getElementById("results-number");
  if (!grid) return;
  grid.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    const card = createPokemonCard(pokemon);
    grid.appendChild(card);
  });
  if (resultsCount) {
    resultsCount.textContent = `${pokemonArray.length}`;
  }
  state.displayedPokemon = pokemonArray;
}

// TODO: Show loading state
// Input: none
// Output: void
// Side effects: Shows loading spinner, hides grid, updates state.isLoading
// Example: showLoading() // displays loading UI
function showLoading() {
  state.isLoading = true;
  const loading = document.getElementById("loading-state");
  const grid = document.getElementById("pokemon-grid");
  loading.classList = "loading-container";
  grid.classList = "pokemon-grid hidden";

  // Your implementation here
}

// TODO: Hide loading state
// Input: none
// Output: void
// Side effects: Hides loading spinner, shows grid, updates state.isLoading
// Example: hideLoading() // removes loading UI
function hideLoading() {
  // Your implementation here
  state.isLoading = false;
  const loading = document.getElementById("loading-state");
  const grid = document.getElementById("pokemon-grid");
  loading.classList = "loading-container hidden";
  grid.classList = "pokemon-grid ";
}

// TODO: Show error message
// Input: message (String) - error message to display
// Output: void
// Side effects: Shows error UI with message, hides loading/grid
// Example: showError("Failed to load Pokemon data")
function showError(message) {
  const errorContainer = document.getElementById("error-state");
  const grid = document.getElementById("pokemon-grid");
  const loading = document.getElementById("loading-state");
  if (errorContainer) {
    const errorMessage = errorContainer.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.textContent = message;
    }
    errorContainer.classList = "error-container";
    if (grid) grid.classList = "pokemon-grid hidden";
    if (loading) loading.classList = "loading-container hidden hidden";
  }
  // Your implementation here
}

// TODO: Update favorites counter in header
// Input: none (uses state.favorites)
// Output: void
// Side effects: Updates counter text in header showing favorite count
// Example: updateFavoritesCounter() // shows "Favorites (3)"
function updateFavoritesCounter() {
  const counter = document.querySelector(".favorites-counter");
  if (counter) {
    counter.textContent = `Favourite(${state.favorites.size})`;
  }
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
  const modal = document.getElementById("pokemon-modal");
  populateModal(pokemon);
  modal.setAttribute("aria-hidden", "false");
  modal.dataset.pokemonId = pokemon.id;

  const closeModal = modal.querySelector(".modal-close");
  if (closeModal) {
    closeModal.focus();
  }
  document.addEventListener("keydown", handleEscapeKey);
}

// TODO: Close Pokemon detail modal
// Input: none
// Output: void
// Side effects: Hides modal, removes listeners, restores focus
// Example: closePokemonModal() // closes currently open modal
function closePokemonModal() {
  const modal = document.getElementById("pokemon-modal");
  modal.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", handleEscapeKey);

  const originalElement = document.querySelector(
    `[data-pokemon-id="${modal.dataset.pokemonId}"]`
  );
  originalElement.focus();

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
  const modalImage = document.querySelector(".modal-pokemon-image");
  if (modalImage) {
    modalImage.src = pokemon.sprite;
    modalImage.alt = pokemon.name;
  }
  const modalName = document.querySelector(".modal-pokemon-name");
  if (modalName) {
    modalName.textContent = pokemon.name;
  }
  const modalNumber = document.querySelector(".modal-pokemon-number");
  if (modalNumber) {
    modalNumber.textContent = pokemon.formatPokemonId;
  }
  const typesInfo = document.querySelector(".modal-types");
  if (typesInfo) {
    typesInfo.innerHTML = pokemon.types
      .map(
        (type) => `<span class="type-badge 
  type-${type}">${type}</span>`
      )
      .join("");
  }
  const abilitiesInfo = document.querySelector(".modal-abilities");
  if (abilitiesInfo) {
    abilitiesInfo.innerHTML = pokemon.abilities
      .map(
        (ability) => `<span class="ability-badge 
  ability-${ability}">${ability}</span>`
      )
      .join("");
  }
  const heightInfo = document.querySelector("#modal-height");
  if (heightInfo) {
    heightInfo.textContent = pokemon.height;
  }
  const weightInfo = document.querySelector("#modal-weight");
  if (weightInfo) {
    weightInfo.textContent = pokemon.weight;
  }

  const statWrapper = document.querySelector("#modal-stats");
  if (statWrapper) {
    const htmlString = pokemon.stats.map((stat) => {
      const percentage = (stat.baseValue / 255) * 100;

      return `<div class="stat-row">
                <span class="stat-name">${stat.name}</span>
                <div class="stat-bar">
                  <div class="stat-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="stat-value">${stat.baseValue}</span>
              </div>`;
    });
    statWrapper.innerHTML = htmlString.join("");
  }
  updateStatBars(pokemon.stats);
}

// TODO: Update stat bars in modal
// Input: stats (Array) - array of stat objects [{name: "hp", value: 35}, ...]
// Output: void
// Side effects: Updates width of stat bar elements based on percentages
// Example: updateStatBars([{name: "hp", value: 35}, {name: "attack", value: 55}])
// Note: Max stat value is 255 for percentage calculation
function updateStatBars(stats) {
  // Your implementation here
  // Calculate percentage for each stat (max sstat is typically 255)
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
  state.currentFilter.search = event.target.value;
  const filtered = filterPokemon();
  renderPokemonGrid(filtered);
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
  state.currentFilter.type = event.target.value;
  const filtered = filterPokemon();
  renderPokemonGrid(filtered);
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
  state.currentFilter.sortBy = event.target.value;
  const filtered = filterPokemon();
  renderPokemonGrid(filtered);
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
  state.currentFilter.showFavoritesOnly =
    !state.currentFilter.showFavoritesOnly;
  const togggleBtn = document.getElementById("view-favorites");
  togggleBtn.setAttribute(
    "aria-pressed",
    state.currentFilter.showFavoritesOnly
  );
  const filtered = filterPokemon();
  renderPokemonGrid(filtered);
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
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = "";
  }
  state.currentFilter.search = "";
  const filtered = filterPokemon();
  renderPokemonGrid(filtered);
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
  loadMorePokemon();
  // Your implementation here
  // Load next batch of Pokemon
}

// TODO: Handle retry button (for error state)
// Input: none
// Output: void (async)
// Side effects: Clears error, retries last failed operation
// Example: handleRetry() // attempts to reload Pokemon data
function handleRetry() {
  state.error = null;
  loadInitialPokemon();
  // Your implementation here
  // Retry failed operation
}

// TODO: Handle Pokemon card click
// Input: pokemon (Object) - Pokemon data from clicked card
// Output: void
// Side effects: Opens modal with detailed Pokemon information
// Example: handlePokemonClick({id: 25, name: "Pikachu", ...})
function handlePokemonClick(pokemon) {
  openPokemonModal(pokemon);
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
  event.stopPropagation();
  // 2. Toggle favorite
  // 3. Update UI
}

// TODO: Handle modal close
// Input: none
// Output: void
// Side effects: Closes modal, removes listeners, restores focus
// Example: handleModalClose() // closes current modal
function handleModalClose() {
  closePokemonModal();
  // Your implementation here
}

// TODO: Handle escape key press
// Input: event (KeyboardEvent) - keyboard event to check key
// Output: void
// Side effects: Closes modal if ESC key pressed and modal is open
// Example: event.key === "Escape" => closes modal
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("pokemon-modal");
    if (modal) {
      closePokemonModal();
    }
  }
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
  const searchInput = document.getElementById("pokemon-search");
  if (searchInput) {
    const debouncedSearch = debounce(handleSearch, 300);
    searchInput.addEventListener("input", debouncedSearch);
  }

  // 2. Clear search button
  const clearSearchBtn = document.querySelector(".search-clear");
  clearSearchBtn.addEventListener("click", handleClearSearch);
  // 3. Type filter select
  const typeSelect = document.getElementById("type-filter");
  if (typeSelect) {
    typeSelect.addEventListener("change", handleTypeFilter);
  }
  // 4. Sort select
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", handleSortChange);
  }
  // 5. Favorites toggle button
  const favoritesToggle = document.getElementById("view-favorites");
  if (favoritesToggle) {
    favoritesToggle.addEventListener("click", handleFavoritesToggle);
  }
  // 6. Load more button
  const loadMoreBtn = document.getElementById("load-more");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", handleLoadMore);
  }
  // 7. Retry button
  const retryBtn = document.getElementById("retry-load");
  if (retryBtn) {
    retryBtn.addEventListener("click", handleRetry);
  }
  // 8. Modal close button
  const modalCloseBtn = document.querySelector(".modal-close");
  modalCloseBtn.addEventListener("click", handleModalClose);
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
  loadFavorites();
  // 2. Set up event listeners
  initializeEventListeners();
  // 3. Load initial Pokemon data
  loadInitialPokemon();
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
