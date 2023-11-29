<template>
  <div>
    <HomeSliderSection />
    <HomeProductsSection />
    <HomeQualitySection />
    <HomeHealthFitness />
    <HomeBlogSection />
    <HomeClients />
  </div>
</template>
<script>
import HomeBlogSection from '../components/HomeBlogSection.vue';
import HomeClients from '../components/HomeClients.vue';
import HomeHealthFitness from '../components/HomeHealthFitness.vue';
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
    components: { HomeSliderSection, HomeProductsSection, HomeQualitySection, HomeHealthFitness, HomeBlogSection, HomeClients }
}
</script>

<style>

</style>