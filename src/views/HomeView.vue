<template>
  <div>
    <HomeSliderSection></HomeSliderSection>
  </div>
</template>
<script>
import HomeSliderSection from '../components/HomeSliderSection.vue';

export default {
    name: "HomeView",
    data() {
        return {
            msg: "Home Page"
        };
    },
    components: { HomeSliderSection }
}
</script>
<style>
  
</style>