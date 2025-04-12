import { db } from "../firebase/config.js";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc as firebaseDeleteDoc,
  updateDoc as firebaseUpdateDoc,
} from "firebase/firestore";
import { useState } from "react";

export const useCollection = (table) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getAll = async (condition) => {
    setResults([]);
    let resDoc = null,
      q = null;

    if (condition && condition.length === 3) {
      q = query(
        collection(db, table),
        where(condition[0], condition[1], condition[2])
      );
    } else {
      q = query(collection(db, table));
    }

    resDoc = await getDocs(q);

    resDoc.forEach((doc) => {
      setResults((list) => [...list, { ...doc.data(), id: doc.id }]);
    });
  };

  // Add a new document
  const add = async (docData) => {
    setError(null);
    setIsPending(true);

    try {
      let resDoc = await addDoc(collection(db, table), docData);
      console.log("Document ID: " + resDoc.id);
      setIsPending(false);
      return resDoc;
    } catch (err) {
      console.log(err.message);
      setError("Could not send the message");
      setIsPending(false);
      return null;
    }
  };

  // Delete a document
  const deleteDoc = async (id) => {
    setError(null);
    setIsPending(true);

    try {
      const docRef = doc(db, table, id); // Create a reference to the document
      await firebaseDeleteDoc(docRef); // Use the modular deleteDoc function
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError("Could not delete the document");
      setIsPending(false);
    }
  };

  // Update a document
  const update = async (id, docData) => {
    setError(null);
    setIsPending(true);

    try {
      const docRef = doc(db, table, id); // Create a reference to the document
      await firebaseUpdateDoc(docRef, docData); // Use the modular updateDoc function
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError("Could not update the document");
      setIsPending(false);
    }
  };

  return { error, isPending, results, add, getAll, deleteDoc, update };
};