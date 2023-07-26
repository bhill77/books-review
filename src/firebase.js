import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
    databaseURL: import.meta.env.VITE_FIREBASE_URL
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const booksRef = ref(db, 'books')