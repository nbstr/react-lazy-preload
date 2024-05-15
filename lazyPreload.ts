/**
 * # REACT LAZY PRELOAD
 * # by [nab](https://github.com/nbstr)
 * --- 
 * A higher-order component that wraps a lazy-loaded component and adds a
 * `preload` method to it. The `preload` method can be used to trigger the
 * loading of the lazy-loaded component before it is actually rendered.
 *
 * @param {() => Promise<{default: React.Component}>}} importStatement - A
 * dynamic import statement that returns a Promise resolving to the
 * lazy-loaded component.
 *
 * @returns {React.LazyExoticComponent<React.Component>} - A lazy-loaded
 * component that has a `preload` method.
 *
 * @example
 * 
 * const LazyComponent = ReactLazyPreload(() => import('./LazyComponent'));
 *
 * // Trigger the loading of the LazyComponent
 * 
 * LazyComponent.preload();
 */

import React from 'react';

interface LazyComponentWithPreload<T extends React.ComponentType<any>> extends React.LazyExoticComponent<T> {
	preload: () => void;
}


export const ReactLazyPreload = <T extends React.ComponentType<any>>(importStatement: () => Promise<{ default: T; }>) => {
	const Component = React.lazy(importStatement) as LazyComponentWithPreload<T>;
	Component.preload = () => importStatement();
	return Component;
};
