import type { ProfileCardOptions } from "./components/ProfileCard";

const defaultOptions: ProfileCardOptions = {
  name: "Profile",
  image: "",
};

let configuredOptions = defaultOptions;

/** Called by Quartz with the plugin options from `quartz.config.yaml`. */
export function init(options?: Record<string, unknown>): void {
  configuredOptions = {
    name: typeof options?.name === "string" ? options.name : defaultOptions.name,
    image: typeof options?.image === "string" ? options.image : defaultOptions.image,
    imageAlt: typeof options?.imageAlt === "string" ? options.imageAlt : undefined,
  };
}

export function getProfileCardOptions(): ProfileCardOptions {
  return configuredOptions;
}
