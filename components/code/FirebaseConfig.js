
const FirebaseConfig = () => {


    const str = `import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: \`\${process.env.API_KEY}\`,
  authDomain: \`\${process.env.AUTH_DOMAIN}\`,
  projectId: "aslamreact",
  storageBucket: \`\${process.env.STORAGE_BUCKET}\`,
  messagingSenderId: \`\${process.env.MESSAGING_SENDER_ID}\`,
  appId: \`\${process.env.APP_ID}\`
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  
`;

    return str;
}

export default FirebaseConfig;
