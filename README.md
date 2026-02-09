# Notes App

A simple and elegant web-based notes application built with vanilla JavaScript, HTML, and CSS. Create, edit, and manage your notes with automatic local storage persistence.

## Features

- ✨ **Create Notes** - Quickly add new notes with a single click
- ✏️ **Edit Notes** - Click on any note to edit it directly with inline editing
- 🗑️ **Delete Notes** - Remove notes you no longer need
- 💾 **Auto-Save** - All notes are automatically saved to browser's local storage
- 🎨 **Modern UI** - Clean, gradient-based design with smooth interactions
- 📱 **Responsive Design** - Works across different screen sizes

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies or installations required

### Installation

1. Clone or download this project to your local machine
2. Navigate to the project folder
3. Open `index.html` in your web browser or use a local server

## How to Run

### Option 1: Open Directly in Browser (Easiest)
1. Locate the `index.html` file in your project folder
2. Right-click on it and select **"Open with"** → Choose your browser
3. Or simply double-click `index.html` to open it in your default browser

### Option 2: Using Live Server Extension (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select **"Open with Live Server"**
4. Your browser will automatically open with the app

## Live Demo

**[Try the Notes App Demo](https://ahmed-shaon.github.io/notes-app/)**

For now, follow the "How to Run" instructions above to run the app locally.

## Usage

### Creating a Note
1. Click the **"Create Note"** button at the top
2. A new note box will appear
3. Start typing your content

### Editing a Note
1. Click on any note to edit it
2. Make your changes directly in the note
3. Changes are automatically saved

### Deleting a Note
1. Click the delete icon (trash can) on the note you want to remove
2. The note will be immediately deleted

## Project Structure

```
notes-app/
├── index.html       # Main HTML file
├── app.js          # JavaScript functionality
├── styles.css      # Styling and layout
├── images/         # Image assets (icons)
└── README.md       # This file
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Gradient backgrounds and responsive styling
- **Vanilla JavaScript** - No frameworks or libraries required

### How It Works
- Notes are stored in the browser's `localStorage`
- Each note is a `contenteditable` paragraph element
- Changes are automatically persisted whenever you create, edit, or delete a note
- When you reload the page, all your notes are restored from local storage

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Storage

Notes are stored locally in your browser's `localStorage`. This means:
- ✅ Notes persist even after closing the browser
- ✅ No account required
- ⚠️ Clearing browser data will delete all notes
- ⚠️ Notes are only available in the browser where they were created

## Tips & Tricks

- Use keyboard shortcuts like **Ctrl+A** to select all text in a note
- Copy and paste text easily between notes
- Each note can hold as much text as you want
- Notes are saved in real-time as you type

## Future Enhancements

Potential features for future versions:
- Export notes to file
- Categories/tags for organizing notes
- Search functionality
- Dark mode theme
- Cloud synchronization

## License

This project is open source and available for personal and educational use.

## Author

Created as part of a 30-day JavaScript project challenge.

---

Enjoy taking notes! 📝
