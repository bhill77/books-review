<template>
    <main>

        <h1>List page</h1>
        
        <div>
            <li v-for="book in books">{{ book.title }}</li>
        </div>
    </main>
</template>

<script setup>
import { set, push } from 'firebase/database'
import { booksRef } from '../firebase';
import { useDatabaseList } from 'vuefire'


const books = useDatabaseList(booksRef)
const newBooks = push(booksRef)
// set(newBooks, {title: 'Laravel cookbook'})
</script>