<template>
    <main>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="book, id in books" class="my-3 border-b hover:cursor-pointer" @click="viewDetail(id)">
                <h3 class="font-bold text-xl">{{ book.title }}</h3>
                <div>Author: {{ book.author }}</div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { set, push } from 'firebase/database'
import { booksRef } from '../firebase';
import { useDatabaseObject } from 'vuefire'
import { useRouter } from 'vue-router';


const books = useDatabaseObject(booksRef)
const router = useRouter()

function viewDetail(id) {
    router.push(`review/${id}`)
}
</script>