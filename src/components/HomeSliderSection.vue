<template>
 <swiper 
 :loop="true"
 :pagination="true" 
 :navigation="true" 
 :modules="modules" 
 class="mySwiper"
 >
    <swiper-slide v-for="(img,i) in images" :key="i">
      <img class="h-full" :src="img" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
import img1 from '../assets/images/slider-1.jpg'
import img2 from '../assets/images/Banner-01.jpg'
import img3 from '../assets/images/Banner-02.jpg'
import img4 from '../assets/images/Banner-03.jpg'
import img5 from '../assets/images/Banner-04.jpg'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation,Pagination],
      };
  },

  data() {
    return {
      images: [img1,img2,img3,img4,img5],
    }
  }
  };
</script>

<style>
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,.swiper-button-next,span.swiper-pagination-bullet.swiper-pagination-bullet-active{
      color: #003376 !important;
    }
    @media screen and (max-width: 767px) {
        .swiper-button-prev, .swiper-button-next{
          display: none !important;

        }
      }

</style>