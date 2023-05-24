import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const fs = collection(getFirestore(), "CvList");
const uid = () => getAuth().currentUser.uid;

const upload = async (cv) => {
  try {
    await setDoc(doc(fs, uid()), { cv });
    alert("Saved!!");
  } catch (e) {
    alert("Error writing new message to Firebase Database ");
    console.error(e);
  }
};

const firestore = { upload };

export default firestore;
