// Next ships declarations for *.module.css but not plain .css, so the side-effect
// imports in src/components ("import './Hero.css'") have no type and newer
// TypeScript flags them. Editor-only: tsc --noEmit passes without this, and the
// shorthand form is deliberate since nothing reads a value back off these imports.
declare module '*.css'
