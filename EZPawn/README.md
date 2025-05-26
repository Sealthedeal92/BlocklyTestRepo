# EZPawn

EZPawn is a Blockly-based web app for visually creating SourceMod (SourcePawn) plugins.

## ✨ Features

- Drag-and-drop SourcePawn logic blocks
- Export generated `.sp` code
- Save/load your block workspace as XML
- Compile `.sp` to `.smx` with spcomp.exe
- Auto-download SourceMod compiler

## 🔧 Setup

```bash
npm install
npm run download:compiler
npm start
```

## 📦 Build

```bash
npm run build
```

## 🧠 Notes

- `plugin.sp` will be generated via Export button.
- You must place `plugin.sp` in the `compiler/` folder before compiling.

