import 'dotenv/config';

const config = {
      port: process.env.PORT || 8080,
    icon: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
    },
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
