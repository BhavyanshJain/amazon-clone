module.exports = {
  config: {
    type: "service_account",
    project_id: process.env.PERMISSIONS_PROJECT_ID,
    private_key_id: process.env.PERMISSIONS_PRIVATE_KEY_ID,
    private_key: process.env.PERMISSIONS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.PERMISSIONS_CLIENT_EMAIL,
    client_id: process.env.PERMISSIONS_CLIENT_ID,
    auth_uri: process.env.PERMISSIONS_AUTH_URI,
    token_uri: process.env.PERMISSIONS_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.PERMISSIONS_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.PERMISSIONS_CLIENT_CERT_URL,
  },
};
