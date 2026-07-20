export { ProfileCard, ProfileCardOptions } from './components/index.js';
export { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, StringResource } from '@quartz-community/types';

/** Called by Quartz with the plugin options from `quartz.config.yaml`. */
declare function init(options?: Record<string, unknown>): void;

export { init };
