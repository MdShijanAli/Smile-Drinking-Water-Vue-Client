<template>
  <div>
    <HomeSliderSection />
    <HomeAbout />
    <HomeProductsSection />
    <HomeQualitySection />
    <HomeHealthFitness />
    <HomeBlogSection />
    <HomeClients />
  </div>
</template>
<script>
import HomeBlogSection from '../components/HomeSections/HomeBlogSection.vue';
import HomeClients from '../components/HomeSections/HomeClients.vue';
import HomeHealthFitness from '../components/HomeSections/HomeHealthFitness.vue';
import HomeProductsSection from '../components/HomeSections/HomeProductsSection.vue';
import HomeQualitySection from '../components/HomeSections/HomeQualitySection.vue';
import HomeSliderSection from '../components/HomeSections/HomeSliderSection.vue';
import HomeAbout from '../components/HomeSections/HomeAbout.vue';


export default {
    name: "HomeView",
    data() {
        return {
            msg: "Home Page"
        };
    },
    components: { HomeSliderSection, HomeProductsSection, HomeQualitySection, HomeHealthFitness, HomeBlogSection, HomeClients,HomeAbout }
}
</script>

<style>

</style>