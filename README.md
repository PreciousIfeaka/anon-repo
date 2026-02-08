# Valentine's Day Proposal Website

A beautiful, animated, and interactive website to ask "Will you be my Valentine?". Built with React, Framer Motion, and lots of love.

## Features

- **Animations**: Smooth page transitions and element animations using Framer Motion.
- **Interactive**: The "No" button runs away!
- **Gallery**: A carousel for your favorite memories.
- **Celebration**: Confetti explosion on saying "Yes".

## Customization

To make this truly yours, you should update the content:

### 1. Photos
Open `src/pages/Memories.jsx` and replace the placeholder image URLs with your own.

```javascript
const memories = [
    {
        id: 1,
        image: "YOUR_IMAGE_URL_HERE", // e.g. /assets/photo1.jpg
        message: "Your caption here..."
    },
    // ...
];
```

You can add images to the `src/assets` folder and import them:

```javascript
import photo1 from '../assets/photo1.jpg';
// ...
image: photo1,
```

### 2. Messages
Update the text in `src/pages/Intro.jsx`, `src/pages/Proposal.jsx`, and `src/pages/Success.jsx` to match your voice.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the link shown in the terminal (usually `http://localhost:5173`).

## Deployment

You can deploy this to Vercel, Netlify, or GitHub Pages easily.
For Vercel/Netlify, just connect your repository and it will auto-detect the Vite settings.

Happy Valentine's Day! ❤️
