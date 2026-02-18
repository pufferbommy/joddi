export const GET = () => {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    redirect_uri: "https://ct4v085j-3000.asse.devtunnels.ms/api/google/callback",
    response_type: "code",
    scope: "https://www.googleapis.com/auth/userinfo.email",
    access_type: "offline",
    prompt: "consent",
    state: crypto.randomUUID()
  })

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

  return Response.json({ authUrl })
}