// Next ships declarations for *.module.css but not for plain .css, so the
// side-effect imports throughout src/components ("import './Hero.css'") have no
// type and newer TypeScript flags them. The build is unaffected, tsc --noEmit
// passes without this, it exists purely to keep the editor quiet.
// Shorthand form on purpose: these imports are for their side effect, nothing
// reads a value back off them.
declare module '*.css'
