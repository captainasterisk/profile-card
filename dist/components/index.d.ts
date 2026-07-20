import { QuartzComponent } from '@quartz-community/types';

/** Options supplied when the component is placed in a Quartz layout. */
interface ProfileCardOptions {
    /** The label displayed above the profile image. */
    name: string;
    /** URL or Quartz static path for the profile image. */
    image: string;
    /** Accessible description of the profile image. Defaults to the name. */
    imageAlt?: string;
}
/**
 * A compact profile card for a Quartz sidebar.
 *
 * Put the image in Quartz's `static/` directory and pass its site path, such as
 * `/static/profile.png`, as `image`.
 */
declare const _default: (opts?: ProfileCardOptions) => QuartzComponent;

export { _default as ProfileCard, type ProfileCardOptions };
