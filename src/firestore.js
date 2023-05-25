import statesEg from "./emptyState";

import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const fs = collection(getFirestore(), "CvList");
const uid = () => (getAuth().currentUser ? getAuth().currentUser.uid : null);

const upload = async (cv) => {
  try {
    await setDoc(doc(fs, uid()), { cv });
    alert("Saved!!");
  } catch (e) {
    alert("Error writing data to Firebase Database ");
    console.error(e);
  }
};

const download = async () => {
  try {
    if (uid() === null) return statesEg.exampleState;

    const q = await getDoc(doc(fs, uid()));
    return q.exists ? q.data().cv : statesEg.exampleState;
  } catch (e) {
    console.error("Error loading data Firebase Database ", e);
  }
};

const firestore = { upload, download };

export default firestore;
