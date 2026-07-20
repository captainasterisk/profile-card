import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types";
import { getProfileCardOptions } from "../config";
import style from "./styles/profile-card.scss";

/** Options supplied when the component is placed in a Quartz layout. */
export interface ProfileCardOptions {
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
export default ((opts?: ProfileCardOptions) => {
  const { name, image, imageAlt } = { ...getProfileCardOptions(), ...opts };

  const ProfileCard: QuartzComponent = () => (
    <section class="profile-card" aria-label={name}>
      <p class="profile-card__name">{name}</p>
      {image ? (
        <img class="profile-card__image" src={image} alt={imageAlt ?? name} loading="lazy" />
      ) : null}
    </section>
  );

  ProfileCard.css = style;
  return ProfileCard;
}) satisfies QuartzComponentConstructor;
