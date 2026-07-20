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
    <div class="profile-card" aria-label={name}>
      <span class="profile-card-name">{name}</span>
      {image ? (
        <img class="profile-card-avatar" src={image} alt={imageAlt ?? name} />
      ) : null}
    </div>
  );

  ProfileCard.css = style;
  return ProfileCard;
}) satisfies QuartzComponentConstructor;
