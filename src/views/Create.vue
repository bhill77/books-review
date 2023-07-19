<template>
    <main class="py-5 px-2 ">
        <div class="flex my-2 justify-center">
            <label for="title" class="basis-1/4">Title:</label>
            <input class="basis-2/4 rounded p-1 text-gray-500" type="text" id="title" v-model="data.title">
        </div>
        <div class="flex my-2 justify-center">
            <label for="author" class="basis-1/4">Author:</label>
            <input class="basis-2/4 rounded p-1 text-gray-500" type="text" id="author" v-model="data.author">
        </div>
        <div class="flex my-2 justify-center">
            <label for="review" class="basis-1/4 capitalize">review:</label>
            <textarea class="basis-2/4 rounded p-1 text-gray-500" type="text" id="review" v-model="data.review" rows="5">
            </textarea>
        </div>
        <div class="flex my-2 justify-center">
            <button class="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" @click="save">Save</button>
        </div>
    </main>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useDatabaseList } from 'vuefire';
    import { set, push } from 'firebase/database'
    import { booksRef } from '../firebase';

    const data = reactive({})
    // const books = useDatabaseList(booksRef)
    const newBooks = push(booksRef)

    function save() {
        set(newBooks, data)
        resetData()
    }

    function resetData() {
        data.title = ''
        data.author = ''
        data.review = ''
    }

</script>