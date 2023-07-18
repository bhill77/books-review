import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
    databaseURL: 'https://coba-4b64b.firebaseio.com/'
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const booksRef = ref(db, 'books')