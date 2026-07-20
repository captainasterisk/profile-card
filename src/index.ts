export { init } from "./config";
export { default as ProfileCard } from "./components/ProfileCard";
export type { ProfileCardOptions } from "./components/ProfileCard";

// Re-export shared types from @quartz-community/types
export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
} from "@quartz-community/types";
