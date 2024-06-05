/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },

    env: {
        NEXT_PUBLIC_FIREBASE_API_KEY:"AIzaSyADBTyaJSHjuTAwWTFdguL2_GjrC4JBsgA",
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "othello-fe27c.firebaseapp.com",
        NEXT_PUBLIC_FIREBASE_DB_URL :"https://othello-fe27c-default-rtdb.firebaseio.com",
        NEXT_PUBLIC_FIREBASE_PROJECT_ID:"othello-fe27c",
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:"othello-fe27c.appspot.com",
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:"221441450025",
        NEXT_PUBLIC_FIREBASE_APP_ID:"1:221441450025:web:c51463ecd47681e7f43c38",

    }
  
};

export default nextConfig;
