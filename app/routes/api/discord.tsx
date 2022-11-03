import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { BASE_URL } from "~/constants";

export async function loader({ request }: LoaderArgs) {
  const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
  const redirectUrl = encodeURIComponent(`${BASE_URL}/api/discord/callback`);

  return redirect(
    `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20email`
  );
}
