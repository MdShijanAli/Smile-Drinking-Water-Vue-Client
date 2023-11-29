<template>
  <div>
    <HomeSliderSection />
    <HomeProductsSection />
    <HomeQualitySection />
  </div>
</template>
<script>
import HomeProductsSection from '../components/HomeProductsSection.vue';
import HomeQualitySection from '../components/HomeQualitySection.vue';
import HomeSliderSection from '../components/HomeSliderSection.vue';

export default {
    name: "HomeView",
    data() {
        return {
            msg: "Home Page"
        };
    },
    components: { HomeSliderSection, HomeProductsSection, HomeQualitySection }
}
</script>
<style>
  
</style>