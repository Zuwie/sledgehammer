export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sledgehammer-staging.fly.dev";

export const ROUTES = {
  ROOT: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  JOIN: "/join",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
  PLAYERS: "/players",
  PROFILE: "/profile",
  ONBOARDING: "/profile/onboarding",
  SETTINGS: "/settings",
  NOTIFICATIONS: "/notifications",
  DISCORD_AUTH: "/api/discord",
};
