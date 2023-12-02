<template>
  
      <!-- Quality and Health -->

      <div class="pt-10">
        <div class="max-w-7xl mx-auto px-6 mb-10">
          <h1 class="md:text-h1 text-h4 font-bold text-center text-primary lg:w-2/3 mx-auto">When It Comes To Quality
            And Health,
            There Is No Compromise</h1>


        </div>
        <div class="">
          <div class="bg-no-repeat w-full lg:h-[65vh] h-[40vh] md:h-[50vh] bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + bgImg + ')' }">
            <div class="flex h-full items-center justify-center">
              <button type="button"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent "
                data-hs-overlay="#video_modal">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="w-14 h-14 fill-white hover:fill-primary transition duration-500 ease-in-out"
                  viewBox="0 0 512 512">
                  <path
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>


      <!-- viddeo modal -->
      <div id="video_modal"
        class="hs-overlay hidden  w-full h-full fixed top-0 start-0 z-[100] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div
          class="hs-overlay-open:mt-7 pointer-events-auto hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:w-1/2 h-[50vh] mx-auto px-6">
          <iframe class="w-full h-full" src="https://www.youtube.com/embed/DBNVD8cVidg?si=3Aou2UqQ81pJV1BP&amp;start=4"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
</template>
<script>
import bgimg from "../assets/images/Asset-11.png"
export default {
  name: "HomeQualitySection",
  data() {
    return {
      bgImg: bgimg,
    }
  }
}
</script>
<style>
  
</style>