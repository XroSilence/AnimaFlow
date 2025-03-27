# AnimaFlow 🌊

## 🚀 A Lightweight, Powerful Animation Library for Modern Web

AnimaFlow is an open-source animation library designed to provide powerful, performant, and intuitive animations for web applications.

### 🌟 Features

- **Lightweight & Fast**: Minimal footprint with maximum performance
- **Flexible Animation**: Supports complex animation sequences
- **Framework Agnostic**: Works with vanilla JS, React, Vue, and more
- **Promise-based**: Easy async animation handling
- **Typescript Support**: First-class type definitions

### 🛠 Installation

```bash
npm install animaflow
```

### 📝 Quick Example

```javascript
import { AnimaFlow } from 'animaflow';

// Basic animation
AnimaFlow.to('.element', {
  duration: 1,
  x: 100,
  y: 50,
  rotation: 360,
  ease: 'power2.inOut'
});

// Sequence animations
AnimaFlow.timeline()
  .to('.element1', { duration: 1, opacity: 0 })
  .to('.element2', { duration: 1, scale: 1.5 });
```

### 📚 Documentation

Full documentation available at [animaflow.js.org](https://animaflow.js.org)

### 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md)

### 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE.md) for details.
