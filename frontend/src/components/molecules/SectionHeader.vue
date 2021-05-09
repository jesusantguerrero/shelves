<template>
<div class="flex justify-between">
    <h2 class="font-bold text-gray-500">
        {{ title }}
    </h2>
    
    <router-link :to="linkRoute" v-if="!hideLink" class="font-bold uppercase text-sm text-yellow-500 cursor-pointer">
        {{ linkLabel }}
    </router-link>
</div>
</template>

<script>
export default {
    props: ['linkLabel', 'linkRoute', 'title', 'hideLink']
}
</script>

<style>

</style>