import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWkUixs7jdygUsS5urd8bIM7LGYFix2Wo",
  authDomain: "chatgtp-ai-client.firebaseapp.com",
  projectId: "chatgtp-ai-client",
  storageBucket: "chatgtp-ai-client.firebasestorage.app",
  messagingSenderId: "800959645732",
  appId: "1:800959645732:web:4e6249a1611624cfd870b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
