<template>
  <div
    class="h-16 w-36 bg-gray-300 flex justify-center items-center overflow-hidden relative text-white cursor-pointer"
  >
    <img src="../../assets/shelves.jpg" alt="" class="w-full absolute" />
    <div
      class="genre-card absolute w-full flex justify-center items-center h-full text-center font-bold bg-black"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    }
};
</script>

<style lang="scss">
.genre-card {
   --tw-bg-opacity: .6;
}
</style>
