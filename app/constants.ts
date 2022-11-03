export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sledgehammer-staging.fly.dev";

export const ROUTES = {
  ROOT: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  BLOG: "/blog",
  LOGIN: "/login",
  JOIN: "/join",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  PROFILE: "/profile",
  ONBOARDING: "/profile/onboarding",
  SETTINGS: "/settings",
  DISCORD_AUTH: "/api/discord",
};
