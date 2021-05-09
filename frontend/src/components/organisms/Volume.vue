<template>
    <div
        class="w-36 mb-5 cursor-pointer"  
    >
        <div class="book__cover w-36 h-48 shadow-md bg-gray-200 overflow-hidden">
            <img src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api" alt="" srcset="" class="w-full object-cover">
        </div>
        <h4 class="volume__title font-bold text-gray-600 mt-2"> {{ volume.volumeInfo.title }} </h4>
        <h5 class="volume__titletext-gray-600 text-sm"> {{ volume.volumeInfo.authors.join(', ') }} </h5>
    </div>
</template>

<script>
export default {
    name: 'Volume',
    props: {
        volume: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>