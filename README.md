# arham-ui-kit

A modern, colorful React component library designed for Create React App (CRA) projects. Built with beautiful animations and smooth interactions, arham-ui-kit provides ready-to-use components that can be easily integrated into your React applications.

**Developer:** Arham  
**Organization:** #arhamlab

## Features

- 🎨 **Multiple Button Variants**: Primary, outline, and ghost styles
- 🃏 **Card Component**: Beautiful cards with image, text, and action buttons
- 🪟 **Animated Modal**: Advanced modal with backdrop blur, smooth animations, and elegant close button
- 🚀 **Easy Integration**: Use locally or install from npm
- 📱 **Responsive Design**: Mobile-friendly components that work on all screen sizes
- ✨ **Modern Styling**: Polished UI with smooth animations and transitions

## Installation

### Using npm

```bash
npm install arham-ui-kit
```

### Using yarn

```bash
yarn add arham-ui-kit
```

### Local Installation

1. Clone or download this repository
2. Copy the `src/components` folder to your project
3. Import components directly from the local path

## Usage

### Import Components

```javascript
import { Button, Card, Modal } from 'arham-ui-kit';
```

Or if using locally:

```javascript
import { Button, Card, Modal } from './components';
```

### Button Component

The Button component supports three variants: `primary`, `outline`, and `ghost`.

```javascript
import { Button } from 'arham-ui-kit';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Primary clicked!')}>
        Primary Button
      </Button>
      
      <Button variant="outline" onClick={() => alert('Outline clicked!')}>
        Outline Button
      </Button>
      
      <Button variant="ghost" onClick={() => alert('Ghost clicked!')}>
        Ghost Button
      </Button>
    </div>
  );
}
```

**Props:**
- `variant` (string, optional): Button style variant - `"primary"`, `"outline"`, or `"ghost"`. Defaults to `"primary"`
- `children` (ReactNode): Button text or content
- `onClick` (function, optional): Click event handler

### Card Component

Display content in a beautiful card format with image, title, description, and action button.

```javascript
import { Card } from 'arham-ui-kit';

function App() {
  const handleCardAction = () => {
    alert('Card action clicked!');
  };

  return (
    <Card
      title="Card Title"
      description="This is a description for the card component."
      imgUrl="https://example.com/image.jpg"
      onAction={handleCardAction}
    />
  );
}
```

**Props:**
- `title` (string, optional): Card title. Defaults to "Card Title"
- `description` (string, optional): Card description text. Defaults to a placeholder description
- `imgUrl` (string, optional): URL for the card image. Defaults to a placeholder avatar
- `onAction` (function, optional): Click handler for the action button

### Modal Component

An advanced modal component with backdrop blur, smooth animations, and elegant styling.

```javascript
import { useState } from 'react';
import { Modal } from 'arham-ui-kit';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content. You can put anything here!</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
```

**Props:**
- `isOpen` (boolean, required): Controls the visibility of the modal
- `onClose` (function, required): Callback function called when modal should be closed. **Important:** This function must update the state that controls `isOpen` to `false`
- `children` (ReactNode): Content to display inside the modal

**Important Note:** The `onClose` function must update the state that controls the `isOpen` prop. For example:

```javascript
// ✅ Correct - Updates state
const closeModal = () => {
  setIsModalOpen(false);
};

// ❌ Wrong - Only shows alert, doesn't close modal
const closeModal = () => {
  alert('Modal closed');
};
```

## Requirements

- React ^19.0.0
- React DOM ^19.0.0

## Project Structure

```
arham-ui-kit/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.js
│   │   │   └── Card.css
│   │   ├── Modal/
│   │   │   ├── Modal.js
│   │   │   └── Modal.css
│   │   └── index.js
│   └── index.js
├── dist/
└── package.json
```

## Development

To build the library:

```bash
npm run build
```

## License

ISC

## Contributing

This is a personal project by Arham. For contributions or suggestions, please reach out through the #arhamlab organization.

---

**Made with ❤️ by Arham**
