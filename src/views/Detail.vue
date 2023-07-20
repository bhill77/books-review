<template>
    <div>
        {{ data[id].title }}
        <div class="">{{ data[id].author }}</div>
        <div class="">{{ data[id].review }}</div>
    </div>
</template>

<script setup>
import { useDatabaseObject } from 'vuefire'
import { booksRef } from '../firebase';
import { useRoute } from 'vue-router';
import { computed, onMounted, onUpdated, reactive } from 'vue';

const route = useRoute()
const id = route.params.id
const data = useDatabaseObject(booksRef, { wait: true })
// const item = computed(()=>{
//     return data[id]
// })

</script>