<template>
     <div>
        <div class="max-w-7xl mx-auto px-6 py-10">
          <div class="text-center">
            <h1 class="md:text-h1 text-h4 font-bold text-primary">Health & Fitness</h1>
            <p class="md:w-2/3 mt-5 mx-auto">From the source we drink and swim in, to the steam that eases congestion
              and the ice that reduces swelling,
              water is all around us and even in us. Water makes up about two thirds of who we are, and
              influences 100 percent of the processes in our body.</p>
          </div>


          <div
            class="md:hidden block solar-system w-[200px] h-[200px] relative rounded-full border border-[#909090] mx-auto md:my-20 mt-10">
            <div>
              <img class="mx-auto py-10  w-[50%]" :src="img1" alt="">
            </div>

            <div class="planet">

              <img class="w-[40%]" :src="img2" alt="">

            </div>

            <div class="planet1">

              <img class="w-[40%]" :src="img3" alt="">

            </div>

            <div class="planet2">

              <img class="w-[40%]" :src="img4" alt="">

            </div>
            <div class="planet3">

              <img class="w-[40%]" :src="img5" alt="">

            </div>
            <div class="planet4">

              <img class="w-[40%]" :src="img6" alt="">

            </div>
            <div class="planet5">

              <img class="w-[40%]" :src="img7" alt="">

            </div>
            <div class="planet6">

              <img class="w-[40%]" :src="img8" alt="">

            </div>
            <div class="planet7">

              <img class="w-[40%]" :src="img9" alt="">

            </div>

          </div>




          <div class="relative hidden md:block">
            <div class="absolute top-[80px] left-[100px] img-dev animate-round1">
              <img class="relative" :src="img2" alt="">
              <div class="hero-div hero-div-1 p-1 leading-6 font-medium text-primary">It could aid weight loss</div>
            </div>
            <div class="absolute top-[170px] left-[250px] img-dev2 animate-round2">
              <img class="relative" :src="img3" alt="">
              <div class="hero-div hero-div-2 p-1 leading-6 font-medium text-primary">It energizes us</div>
            </div>
            <div class="absolute top-[380px] left-[250px] img-dev3 animate-round3">
              <img class="relative" :src="img4" alt="">
              <div class="hero-div hero-div-3 p-1 leading-6 font-medium text-primary">It keeps our kidneys working &
                healthy</div>
            </div>
            <div class="absolute top-[260px] left-[100px] img-dev4 animate-round4">
              <img class="relative" :src="img5" alt="">
              <div class="hero-div hero-div-4 p-1 leading-6 font-medium text-primary">Hot outside no excuse</div>
            </div>

            <img class="mx-auto py-10 animate-up-down" :src="img1" alt="">


            <div class="absolute top-[80px] right-[100px] img-dev8 animate-round5">
              <img class="relative" :src="img6" alt="">
              <div class="hero-div hero-div-8 p-1 leading-6 font-medium text-primary">It can improve mood</div>
            </div>

            <div class="absolute top-[170px] right-[250px] img-dev5 animate-round6">
              <img class="relative" :src="img7" alt="">
              <div class="hero-div hero-div-5 p-1 leading-6 font-medium text-primary">It helps athletes fight fatigue
              </div>
            </div>

            <div class="absolute top-[260px] right-[100px] img-dev6 animate-round7">
              <img class="relative" :src="img8" alt="">
              <div class="hero-div hero-div-6 p-1 leading-6 font-medium text-primary">Drinking it may help prevent
                headaches, naturally</div>
            </div>

            <div class="absolute top-[380px] right-[250px] img-dev7 animate-round8">
              <img class="relative" :src="img9" alt="">
              <div class="hero-div hero-div-7 p-1 leading-6 font-medium text-primary">It powers our warm - weather
                exercise</div>
            </div>


          </div>






        </div>
      </div>

</template>
<script>
import fitImg1 from '../assets/images/water-splash-5gr.png'
import fitImg2 from '../assets/images/Health-and-Fitness.png'
import fitImg3 from '../assets/images/Health-and-Fitness-01.png'
import fitImg4 from '../assets/images/Health-and-Fitness-02.png'
import fitImg5 from '../assets/images/Health-and-Fitness-03.png'
import fitImg6 from '../assets/images/Health-and-Fitness-04.png'
import fitImg7 from '../assets/images/Health-and-Fitness-05.png'
import fitImg8 from '../assets/images/Health-and-Fitness-06.png'
import fitImg9 from '../assets/images/Health-and-Fitness-07.png'


export default {
  name: "HomeHealthFitness",

  data() {
    return {
      img1: fitImg1,
      img2: fitImg2,
      img3: fitImg3,
      img4: fitImg4,
      img5: fitImg5,
      img6: fitImg6,
      img7: fitImg7,
      img8: fitImg8,
      img9: fitImg9,
    }
  }
}
</script>


<style scoped>
@keyframes upDown {

0%,
100% {
  transform: translateY(0);
}

50% {
  transform: translateY(50px);
}
}


.animate-up-down {
animation: upDown 5s ease-in infinite alternate-reverse;
} 

.hero-div-1 {
  position: absolute;
  left: 0%;
  top: 25px;
  width: 130px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-right: 20px;
  transition: left 2s, opacity 1s;
}
.img-dev:hover .hero-div-1{
  opacity: 1;
  left: -90%;
}
.hero-div-2 {
  position: absolute;
  left: 0%;
  top: 25px;
  width: 130px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-right: 20px;
  transition: left 2s, opacity 1s;
}

.img-dev2:hover .hero-div-2{
  opacity: 1;
  left: -90%;
}

.hero-div-3 {
  position: absolute;
  left: 0%;
  top: 25px;
  width: 180px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-right: 20px;
  transition: left 2s, opacity 1s;
}
.img-dev3:hover .hero-div-3{
  opacity: 1;
  left: -160%;
}

.hero-div-4 {
  position: absolute;
  left: 0%;
  top: 25px;
  width: 150px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-left: 25px;
  transition: left 2s, opacity 1s;
}
.img-dev4:hover .hero-div-4{
  opacity: 1;
  left: -140%;
}
.hero-div-5 {
  position: absolute;
  right: 0%;
  top: 25px;
  width: 200px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-left: 25px;
  transition: right 2s, opacity 1s;
}
.img-dev5:hover .hero-div-5{
  opacity: 1;
  right: -180%;
}
.hero-div-6 {
  position: absolute;
  right: 0%;
  top: 25px;
  width: 260px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-left: 30px;
  transition: right 2s, opacity 1s;
}
.img-dev6:hover .hero-div-6{
  opacity: 1;
  right: -230%;
}
.hero-div-7 {
  position: absolute;
  right: 0%;
  top: 25px;
  width: 180px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-left: 25px;
  transition: right 2s, opacity 1s;
}
.img-dev7:hover .hero-div-7{
  opacity: 1;
  right: -160%;
}

.hero-div-8 {
  position: absolute;
  right: 0%;
  top: 25px;
  width: 150px;
  border: 1px solid #003376;
  border-radius: 5px;
  opacity: 0;
  z-index: -2;
  padding-left: 25px;
  transition: right 2s, opacity 1s;
}
.img-dev8:hover .hero-div-8{
  opacity: 1;
  right: -130%;
} 


@keyframes round1 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(180px);
  }

  50%{
     transform: translateY(300px) translateX(150px);
  }
  75%{
    transform: translateY(90px) translateX(150px); 
  }
}

.animate-round1 {
  animation: round1 20s ease-in infinite;
}
@keyframes round2 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-90px) translateX(-150px);
  }

  50%{
     transform: translateY(90px) translateX(-150px);
  }
  75%{
    transform: translateY(210px) ; 
  }
}

.animate-round2 {
  animation: round2 20s ease-in infinite;
}
@keyframes round3 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-210px) ;
  }

  50%{
     transform: translateY(-300px) translateX(-150px);
  }
  75%{
    transform: translateY(-120px) translateX(-150px); 
  }
}
.animate-round3 {
  animation: round3 20s ease-in infinite;
}


@keyframes round4 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(120px) translateX(150px);
  }

  50%{
     transform: translateY(-90px) translateX(150px);
  }
  75%{
    transform: translateY(-180px) ; 
  }
}

.animate-round4 {
  animation: round4 20s ease-in infinite;
}

@keyframes round5 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(90px) translateX(-150px);
  }

  50%{
     transform: translateY(300px) translateX(-150px);
  }
  75%{
    transform: translateY(180px); 
  }
}

.animate-round5 {
  animation: round5 20s ease-in infinite;
}
@keyframes round6 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(210px);
  }

  50%{
     transform: translateY(90px) translateX(150px);
  }
  75%{
    transform: translateY(-90px) translateX(150px); 
  }
}

.animate-round6 {
  animation: round6 20s ease-in infinite;
}
@keyframes round7 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-180px);
  }

  50%{
     transform: translateY(-90px) translateX(-150px);
  }
  75%{
    transform: translateY(120px) translateX(-150px); 
  }
}

.animate-round7 {
  animation: round7 20s ease-in infinite;
}
@keyframes round8 {

  0%, 100% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-120px) translateX(150px);
  }

  50%{
     transform: translateY(-300px) translateX(150px);
  }
  75%{
    transform: translateY(-210px) ; 
  }
}

.animate-round8 {
  animation: round8 20s ease-in infinite;
}





/* Solar Css */

.solar-system{
  animation: rotation 20s linear infinite;
}




.planet {
  position: absolute;
  top: -10%;
  right: -15%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet1 {
  position: absolute;
  top: 8%;
  left: 27%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet2 {
  position: absolute;
  top: 42%;
  left: 15%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet3 {
  position: absolute;
  top: 75%;
  right: -49%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet4 {
  position: absolute;
  bottom: -9%;
  right: -15%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet5 {
  position: absolute;
  bottom: 5%;
  left: 30%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet6 {
  position: absolute;
  top: 8%;
  right: -53%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}
.planet7 {
  position: absolute;
  top: 43%;
  right: -63%;
  transform: translate(-50%,0);
  /* animation: rotation 10s linear infinite; */
}




@keyframes rotation {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

</style>