# Etch-a-Sketch

A simple browser-based **Etch-a-Sketch** project built with HTML, CSS, and JavaScript.  
Users can draw on a grid by hovering over squares, which change colors and gradually darken with each pass.  
You can also change the grid size dynamically!

---

## Features ✨

- **Interactive Drawing**: Hover over squares to color them with random RGB colors.
- **Progressive Darkening**: Each hover decreases a square's opacity by 10%, making it fully dark after 10 passes.
- **Dynamic Grid Size**: Change the number of squares per side (up to 100) using the "Change side length" button.
- **Responsive Layout**: Grid squares remain perfectly square thanks to `aspect-ratio`.
- **Simple Design**: Clean and minimal UI.

---

## How It Works 🛠️

1. The page loads with an empty drawing grid.
2. Click the **Change side length** button to enter the desired grid size (e.g., `16` for a 16x16 grid).
3. Move your mouse over the squares:
   - Each hover changes the square's color to a random RGB value.
   - The opacity decreases progressively with each hover, making the square appear darker.
4. Mouse out of a square resets its color back to none, but the opacity effect stays.

---

## Project Structure 📁

├── index.html # Main HTML structure
├── styles.css # Styles for layout and button
└── script.js # Grid generation and interaction logic