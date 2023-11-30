<template>
   <BannerSlot bannerTitle="Career"></BannerSlot>


   <div>
      <div class="max-w-7xl mx-auto px-6 md:py-10 pb-10 z-0">
        <div class="">
          <h1
            class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:border-l-[6px] md:border-l-[5px] sm:border-l-[4px] border-l-[3px] pl-5 border-primary">
            Available <br> Jobs</h1>
        </div>

        <div class="grid grid-cols-1 items-center sm:gap-8 gap-5 mt-10">


      
      <div v-for="job in jobs" :key="job.id" class="shad md:px-10 px-5 py-3 md:py-5 rounded-xl sm:flex grid items-center justify-between">
            <div>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Post
                  Name: </span>{{job.title}} </p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Location: </span> {{job.location}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Job
                  Type: </span> {{job.jobType}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Vacancy: </span> {{job.vacancy}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Last Apply
                  Date: </span> {{job.applyLastDate}}</p>
            </div>
            <div class="text-center sm:mt-6 mt-3">
              <button @click="selectJob(job.title)" onclick="career_apply_modal.showModal()"
                class="sm:px-6 px-3 py-1 sm:py-2 sm:text-base text-sm font-semibold bg-primary hover:bg-secondary transitio duration-700 ease-in-out text-white rounded-full">Apply
                Now</button>
            </div>
            
          </div>
          
          
          <application-form :job="selectedJob"></application-form>
          <!-- Modal -->
          
        </div>


       
 

      </div>
    </div>

</template>
<script>
import BannerSlot from "../components/BannerSlot.vue"

export default{
name: "Career",
components: { BannerSlot }, 

  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "General Manager",
          location: "Uttara, Dhaka",
          jobType: "Full Time",
          vacancy: "Not specific",
          applyLastDate: "2023-12-15"
        },
        {
          id: 2,
          title: "Assistant Manager",
          location: "Uttara, Dhaka",
          jobType: "Full Time",
          vacancy: "Not specific",
          applyLastDate: "2023-12-15"
        },
        {
          id: 3,
          title: "Sales Manager",
          location: "Uttara, Dhaka",
          jobType: "Full Time",
          vacancy: "Not specific",
          applyLastDate: "2023-12-15"
        },
        {
          id: 4,
          title: "Field Officer",
          location: "Uttara, Dhaka",
          jobType: "Full Time",
          vacancy: "Not specific",
          applyLastDate: "2023-12-15"
        },
      ],
    }
  }
}
</script>
<style>
   .shad {
        box-shadow: 0px 8px 16px 0px rgb(17 34 139 / 23%);
      }
</style>