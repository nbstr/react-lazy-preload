# react-lazy-preload

Get lightning-fast load times with ReactLazyPreload! ⚡️ Wrap your lazy components in just 5 lines of code and preload them before they're even needed. Say goodbye to slow loading screens and hello to happy users! 🎉

`ReactLazyPreload` is a function that helps you load React components faster by preloading them before they're needed. It's like giving your app a head start so it can be ready when the user needs it.

To use ReactLazyPreload, you just need to wrap your lazy-loaded component with it, like this:
```typescript
const MyComponent = ReactLazyPreload(() => import('./MyComponent'));
```

Then, you can use MyComponent as you normally would, but with the added benefit of preloading. To preload the component, you can call the preload method, like this:
```typescript
MyComponent.preload();
```

This will tell the browser to start loading the component in the background, so it's ready when the user needs it.

That's it! With ReactLazyPreload, you can make your app faster and more responsive, without any extra work. It's like having a magic wand for your React components!
