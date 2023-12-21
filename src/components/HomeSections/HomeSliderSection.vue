<template>
 <swiper 
 :loop="true"
 :pagination="true" 
 :navigation="true" 
 :modules="modules" 
 class="mySwiper"
 >
    <swiper-slide v-for="(img,i) in images" :key="i">
      <div class="h-[200px] sm:h-[300px] md:h-screen">
        <img class="h-full w-full" :src="img" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import img1 from '/images/slider-1.jpg'
import img2 from '/images/19-SM966206.jpg'
import img3 from '/images/20-SM135375.jpg'
import img4 from '/images/20-SM270327.jpg'
import img5 from '/images/SM492512.jpg'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios'

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
  },
  mounted() {
    // this.fetchApplications()
  },

  methods: {

    async fetchApplications() {
  try {
    const response = await fetch('https://server.zealtechweb.com/api/infos');

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching applications: ${response.statusText}`);
    }

    // Parse the JSON data in the response
    const data = await response.json();

    console.log(data[0].sliders.map(slide))
    console.log('applications', this.applications);
  } catch (error) {
    // Handle errors
    console.error('Error fetching applications:', error.message);
  }
},
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