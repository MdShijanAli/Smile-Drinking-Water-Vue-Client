<template>
      <div class="bg-background">
        <div class="max-w-7xl mx-auto px-6 sm:py-10 py-6">
          <h1 class="md:text-h1 text-h4 font-bold text-primary text-center">Our Clients</h1>

            <swiper
    :slidesPerView="calculateSlidesPerView()"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(logo, i) in logos" :key="i">
      <div class="w-full h-full box mb-10">
                    <img class="w-full block"
                      :src="logo" />
                  </div>
    </swiper-slide>

  </swiper>




        </div>
      </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import { mapState } from 'pinia';
import { useBrandLogStore } from '../../stores/brandLogoStore';

import { Pagination,Autoplay } from 'swiper/modules';

export default {
  name: "HomeClients",
  components: {
      Swiper,
    SwiperSlide,
  
  },

  setup() {
      return {
        modules: [Pagination,Autoplay],
      };
    },
  
  computed: {
    ...mapState(useBrandLogStore, {
      logos: 'allLogos',
    })
    
  },
  methods: {
    calculateSlidesPerView() {
      if (window.innerWidth < 576) {
        return 3; 
      } else if (window.innerWidth < 768) {
        return 5; 
      } else {
        return 7; 
      }
    },
  },

  mounted() {
    // Update slidesPerView when the window is resized
    window.addEventListener('resize', this.calculateSlidesPerView);
  },

  beforeUnmount() {

    window.removeEventListener('resize', this.calculateSlidesPerView);
  },
};

</script>
<style>
  
</style>