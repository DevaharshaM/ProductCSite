# Pravaha Path Architectural Refactoring Blueprint

## Core Objective
Deconstruct the unified inline codebase into a decoupled, highly organized directory structure split strictly by domain view component boundaries.

## Target Workspace Layout
The agent core must restructure the project assets to match this precise topology:

├── Home/ (Folder)
│   ├── index.html   # Main structure only. Strip out all inline <style> and <script>.
│   ├── style.css    # Global and local design tokens, system variables, animations.
│   └── app.js       # Semantic event listeners, navbar toggles, view transition router.
│
└── Career/ (Folder)
    ├── discover.html  # Standalone profile/intake layout. Strip out inline rules.
    ├── ctStyle.css    # Isolated, dedicated styling rules for the form and inputs.
    └── ctApp.js       # Input data validation, state tracking, status animation code.

## Critical Transformation Rules

### 1. HTML Layer Refactoring
- Completely strip out all `<style>` and `<script>` blocks from both HTML files.
- Inject clean linking assets into the `<head>` of `Home/index.html`:
  ```html
  <link rel="stylesheet" href="style.css" />
  <script src="app.js" defer></script>
  ```
- Inject clean linking assets into the `<head>` of `Career/discover.html`:
  ```html
  <link rel="stylesheet" href="ctStyle.css" />
  <script src="ctApp.js" defer></script>
  ```
- Crucial Path Correction: Update the cross-linking button anchor inside `Home/index.html` to target the new directory path safely:
  `href="../Career/discover.html"`
- Update the cross-linking home anchor inside `Career/discover.html` to target:
  `href="../Home/index.html"`

### 2. Behavioral Decoupling (JS Rules)
- Remove all traditional inline interactivity attributes (such as `onclick="..."`, `oninput="..."`, `onsubmit="..."`) from the HTML tags.
- Bind interactions inside `app.js` and `ctApp.js` cleanly using decoupled semantic event listeners:
  `element.addEventListener('click', handler);`
  `element.addEventListener('input', handler);`

### 3. Visual & Style Preservation
- Do not lose or alter the central theme elements: the deep teal palette, serif heading styles (Cormorant Garamond), mono labels (DM Mono), the background noise SVG string overlay, or micro-interaction hover transitions.
