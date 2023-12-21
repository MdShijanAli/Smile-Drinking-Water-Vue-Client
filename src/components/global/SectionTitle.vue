<template>
  <div>
    <div class="text-center">
      <h1 class="md:text-h1 text-h4 font-bold text-primary">{{ title }}</h1>
      <p class="text-paragraph md:w-2/3 mx-auto mt-5">
       {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionTitle",
  props: ['title','description']
}
</script>
<style>
  
</style>