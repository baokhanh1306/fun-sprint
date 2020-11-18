import { google } from "googleapis";

const client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: 'postmessage'
});

export const getProfileInfo = async (code) => {
  const r = await client.getToken(code);
  console.log(r);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  return payload;
};
