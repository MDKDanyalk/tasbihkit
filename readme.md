**MDKVA TasbihKit** is a lightweight, browser-ready Tasbih loader designed for Islamic web and mobile applications.
It provides a clean and unified API for retrieving Tasbih entries from any category (daily, weekly, other), perfect for apps, educational tools, dhikr trackers, and spiritual platforms.

---

## **✨ Features**

* **`TasbihKit.loadAll(category)`** — Load the full Tasbih dataset for a category (e.g., `"daily"`, `"weekly"`).
* **`TasbihKit.searchById(category, id)`** — Retrieve a Tasbih entry by its unique ID (string-safe; supports `"1"`, `"2"`, etc.).
* **`TasbihKit.searchByLabel(category, keyword)`** — Find Tasbih entries by Arabic label.
* **`TasbihKit.searchByTranslation(category, translation)`** — Search Tasbih English translations for any translation.
* Works with **any category**, as long as a JSON file exists.
* **Simple, predictable JSON structure**: `id`, `label`, `translation`, `count`.
* **Zero dependencies**, fully ES module compatible.

---

## **📦 Installation**

TasbihKit is browser-first. You can load it via file path, CDN, or module bundlers.

### **CDN import (recommended):**

```html
<script type="module">
  import { TasbihKit } from "https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/tasbihkit.js";
</script>
```

---

## **🌐 Usage**

### **TasbihKit.loadAll(category)**

```html
<div id="mdkva-tasbihkit"></div>

<script type="module">

import { TasbihKit } from "https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/tasbihkit.js";

  async function loadAll() {
    try {
      // Load all Tasbih entries in the "daily" category
      const allTasbih = await TasbihKit.loadAll("daily");

      console.log("load:", allTasbih);

      const html = allTasbih.map(t => `
        <div class="tasbih-block">
          <h3>${t.id}: ${t.label}</h3>
          <p><strong>Translation:</strong> ${t.translation}</p>
          <p><strong>Count:</strong> ${t.count}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("mdkva-tasbihkit").innerHTML = html;

    } catch (err) {
      console.error("Error in load():", err);
      document.getElementById("mdkva-tasbihkit").innerText = err.message;
    }
  }

  loadAll();
</script>
```

### **TasbihKit.searchById(category, id)**

```html
<div id="mdkva-tasbihkit"></div>

<script type="module">

import { TasbihKit } from "https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/tasbihkit.js";

  async function searchById() {
    try {
      const tasbih = await TasbihKit.searchById("daily", "1");

      document.getElementById("mdkva-tasbihkit").innerHTML = `
        <h2>${tasbih.id}: ${tasbih.label}</h2>
        <p><strong>Translation:</strong> ${tasbih.translation}</p>
        <p><strong>Count:</strong> ${tasbih.count}</p>
      `;
    } catch (err) {
      console.error(err);
      document.getElementById("mdkva-tasbihkit").innerText = err.message;
    }
  }

  searchById();
</script>
```

### **TasbihKit.searchByLabel(category, keyword)**

```html
<div id="mdkva-tasbihkit"></div>

<script type="module">

import { TasbihKit } from "https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/tasbihkit.js";

  async function searchByLabel() {
    try {
      // Search for Tasbih entries containing "سبحان" in the Arabic label
      const results = await TasbihKit.searchByLabel("daily", "سبحان");

      console.log("searchByLabel:", results);

      if (results.length === 0) {
        document.getElementById("mdkva-tasbihkit").innerText = "No Tasbih found.";
        return;
      }

      const html = results.map(t => `
        <div class="tasbih-block">
          <h3>${t.id}: ${t.label}</h3>
          <p><strong>Translation:</strong> ${t.translation}</p>
          <p><strong>Count:</strong> ${t.count}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("mdkva-tasbihkit").innerHTML = html;

    } catch (err) {
      console.error("Error in searchByLabel():", err);
      document.getElementById("mdkva-tasbihkit").innerText = err.message;
    }
  }

  searchByLabel();
</script>
```

### **TasbihKit.searchByTranslation(category, translation)**

```html
<div id="mdkva-tasbihkit"></div>

<script type="module">

import { TasbihKit } from "https://cdn.jsdelivr.net/npm/@mdkva/tasbihkit/tasbihkit.js";

  async function searchByTranslation() {
    try {
      // Search for the translation "Glory" in English translations
      const results = await TasbihKit.searchByTranslation("daily", "Glory");

      console.log("search:", results);

      if (results.length === 0) {
        document.getElementById("mdkva-tasbihkit").innerText = "No matches found.";
        return;
      }

      const html = results.map(t => `
        <div class="tasbih-block">
          <h3>${t.id}: ${t.label}</h3>
          <p><strong>Translation:</strong> ${t.translation}</p>
          <p><strong>Count:</strong> ${t.count}</p>
          <hr>
        </div>
      `).join('');

      document.getElementById("mdkva-tasbihkit").innerHTML = html;

    } catch (err) {
      console.error("Error in search():", err);
      document.getElementById("mdkva-tasbihkit").innerText = err.message;
    }
  }

  searchByTranslation();
</script>
```

---

## Contributions
This project is open source and contributions are welcome!
* GitHub Repository: [https://github.com/mdkva/tasbihkit](https://github.com/mdkva/tasbihkit)
* Feel free to fork, submit issues, or create pull requests.

---

## Links
* **npm Package:** [https://www.npmjs.com/package/@mdkva/tasbihkit](https://www.npmjs.com/package/@mdkva/tasbihkit)
* **Company Website:** [mdkva.com](https://mdkva.com/)
* **Contact:** [contact@mdkva.com](mailto:contact@mdkva.com)

---

## **📄 License**

MIT License