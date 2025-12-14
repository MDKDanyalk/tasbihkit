export const TasbihKit = {
  /**
   * Load the full Tasbih dataset for a given category.
   * @param {string} category - Category file (e.g., "general", "day-and-night", "post-prayer").
   * @returns {Promise<Array>} - Array of Tasbih entries
   */
  async loadAll(category) {
    if (!category) throw new Error("Category is required.");

    const url = `https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/data/${category}.json`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Category file '${category}.json' not found.`);

    return res.json();
  },

  /**
   * Get a Tasbih entry by its unique ID.
   * @param {string} category
   * @param {string} id - Tasbih ID
   * @returns {Promise<Object>} - Tasbih entry object
   */
  async searchById(category, id) {
    if (!id) throw new Error("Tasbih ID is required.");

    const list = await this.loadAll(category);
    const tasbihId = String(id).trim();
    const item = list.find(t => t.id === tasbihId);

    if (!item) {
      throw new Error(`Tasbih with ID '${id}' not found in category '${category}'.`);
    }

    return item;
  },

  /**
   * Search Tasbih labels for a keyword.
   * @param {string} category
   * @param {string} keyword
   * @returns {Promise<Array>} - Array of matching Tasbih entries
   */
  async searchByLabel(category, keyword) {
    if (!keyword) return [];

    const list = await this.loadAll(category);
    const term = keyword.toLowerCase();

    return list.filter(t => t.label?.toLowerCase().includes(term));
  },

  /**
   * Search inside the Tasbih English translation.
   * @param {string} category
   * @param {string} translation
   * @returns {Promise<Array>} - Array of matching Tasbih entries
   */
  async searchByTranslation(category, translation) {
    if (!translation) return [];

    const list = await this.loadAll(category);
    const term = translation.toLowerCase();

    return list.filter(t => t.translation?.toLowerCase().includes(term));
  }
};

// camelCase convention... for those that don't prefer PascalCase
export const tasbihKit = TasbihKit;