<template>
  <div>
      <div class="p-10">
           <div class="w-[700px] mx-auto border p-10 bg-white">
              <form @submit.prevent="websiteDetasilsInfo">
                <div class="">
                    <div class="avatar p-5 w-full flex justify-center">
                        <div class="w-32 rounded-full ring ring-primary ring-offset-2 block relative group">
                          <label for="fileInput" class="cursor-pointer group">
                            <img v-if="imageUrl"
                              class="mx-auto rounded-full"
                              :src="imageUrl"
                              
                              @click="showUploadOption = true"
                              @mouseout="showUploadOption = false"
                            />

                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full bg-primary text-white p-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>



                            <div
                              class="group-hover:absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-full"
                            >
                              <i  class="pi pi-upload text-white"></i>
                            </div>
                          </label>
                          <input
                            id="fileInput"
                            type="file"
                            class="hidden"
                            @change="handleFileChange"
                          />
                        </div>
                      </div>

                <div class="mt-5">
                  <div class="relative">
                    <input type="text" v-model="name" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  </div>

                  <div class="relative my-3">
                    <input type="email" v-model="email" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>


                  <div class="relative my-3">
                    
                    <input type="tel" v-model="telephone" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                  </div>

                  <div class="relative my-3">
                    <input type="tel" v-model="phone" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>

                    </div>
                  </div>

                  <div class="relative my-3">
                    <input type="text" v-model="facebook" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <i class="pi pi-facebook text-gray-500"></i>
                    </div>
                  </div>
                  <div class="relative my-3">
                    <input type="text" v-model="twitter" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                     <i class="pi pi-twitter text-gray-500"></i>
                    </div>
                  </div>
                  <div class="relative my-3">
                    <input type="text" v-model="linkedin" class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <i class="pi pi-linkedin text-gray-500"></i>
                    </div>
                  </div>

                  <div class="mt-5">
                    <div class="relative">
                      <label for="websitename" class="font-semibold">Website Name</label>
                      <input v-model="websitename" id="websitename" type="text" class="peer py-3 px-4 mt-2 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" >
                       
                    </div>

                    <div class="relative my-5">
                      <label for="websiteaddress" class="font-semibold">Website Address</label>
                      <textarea v-model="websiteaddress" id="websiteaddress" class="peer py-3 px-4 mt-2 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" rows="3" ></textarea>
                    </div>


            
                   </div>

                   <div class="pt-5">
                    <div class="flex justify-start gap-5">
                   
                  <div>
                    <p class="text-primary font-semibold mb-2">Logo</p>
                   <div class="w-[200px] h-[120px] border relative grou">
                          <label for="fileLogoInput" class="cursor-pointer group">
                            <img v-if="logoURL"
                              class="w-full h-full"
                              :src="logoURL"
                              
                              @click="showLogoUploadOption = true"
                              @mouseout="showLogoUploadOption = false"
                            />

                            <img v-else class="w-full h-full" src="/images/logo.png" alt="">



                            <div
                              class="group-hover:absolute hidden inset-0 w-full h-full group-hover:flex items-center justify-center bg-black bg-opacity-50"
                            >
                              <i  class="pi pi-upload text-white"></i>
                            </div>
                          </label>
                          <input
                            id="fileLogoInput"
                            type="file"
                            class="hidden"
                            @change="handleLogoFileChange"
                          />
                        </div>
                  </div>

               <div>
                <p class="text-primary font-semibold mb-2">Dark Logo</p>
                   <div class="w-[200px] h-[120px] border relative group bg-primary">
                          <label for="fileWhiteLogoInput" class="cursor-pointer group">
                            <img v-if="logoWhiteURL"
                              class="w-full h-full"
                              :src="logoWhiteURL"
                              
                              @click="showWhiteLogoUploadOption = true"
                              @mouseout="showWhiteLogoUploadOption = false"
                            />

                            <img v-else class="w-full h-full" src="/images/logo-white.png" alt="">



                            <div
                              class="group-hover:absolute hidden inset-0 w-full h-full group-hover:flex items-center justify-center bg-black bg-opacity-50"
                            >
                              <i  class="pi pi-upload text-white"></i>
                            </div>
                          </label>
                          <input
                            id="fileWhiteLogoInput"
                            type="file"
                            class="hidden"
                            @change="handleWhiteLogoFileChange"
                          />
                        </div>
               </div>


                   </div>
                  

                   <div class="flex justify-end mt-5">
                    <button type="submit" class="px-10 py-3 bg-primary text-white">Update</button>
                  </div>
                   
                </div>
               
                </div>

             
                </div>
             
              </form>
              <Toast />
           </div>
      </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useWebsiteInfoStore } from '../stores/websiteInfoStore';

const toast = useToast();

const name = ref('')
const email = ref('')
const websitename = ref('')
const telephone = ref('')
const phone = ref('')
const websiteaddress = ref('')
const facebook = ref('')
const twitter = ref('')
const linkedin = ref('')

const showUploadOption = ref(false);
const showWhiteLogoUploadOption = ref(false);
const showLogoUploadOption = ref(false);
const imageUrl = ref(''); // Initial image URL
const logoURL = ref(''); // Initial image URL
const logoWhiteURL = ref(''); // Initial image URL



const handleFileChange = async (event) => {
  const file = event.target.files[0];
  console.log(file)

  try {
   
    const uploadedImageUrl = await uploadImageToImgBB(file);

    
    imageUrl.value = uploadedImageUrl;

   
    console.log('Image uploaded successfully:', uploadedImageUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

const uploadImageToImgBB = async (file) => {

const apiKey = '8d6f88076c0d0741db9ce8b01104af0c';
const formData = new FormData();
formData.append('image', file);

const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
  method: 'POST',
  body: formData,
});

const data = await response.json();
if (data.status === 200) {
  return data.data.url;
} else {
  throw new Error('Image upload failed');
}
};


const handleLogoFileChange = async (event) => {
  const file = event.target.files[0];
  console.log(file)

  try {
   
    const uploadedLogoUrl = await uploadLogoImageToImgBB(file);

    
    logoURL.value = uploadedLogoUrl;

   
    console.log('Image uploaded successfully:', uploadedLogoUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};




const uploadLogoImageToImgBB = async (file) => {

  const apiKey = '8d6f88076c0d0741db9ce8b01104af0c';
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.status === 200) {
    return data.data.url;
  } else {
    throw new Error('Image upload failed');
  }
};


const handleWhiteLogoFileChange = async (event) => {
  const file = event.target.files[0];
  console.log(file)

  try {
   
    const uploadedLogoUrl = await uploadWhiteLogoImageToImgBB(file);

    
    logoWhiteURL.value = uploadedLogoUrl;

   
    console.log('Image uploaded successfully:', uploadedLogoUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};




const uploadWhiteLogoImageToImgBB = async (file) => {

  const apiKey = '8d6f88076c0d0741db9ce8b01104af0c';
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.status === 200) {
    return data.data.url;
  } else {
    throw new Error('Image upload failed');
  }
};






const websiteDetasilsInfo = async () => {
  const websiteDetails = {
    name: name.value,
    email: email.value,
    facebook: facebook.value,
    twitter: twitter.value,
    linkedin: linkedin.value,
    photo: imageUrl.value,
    websitename: websitename.value,
    websiteaddress: websiteaddress.value,
    telephone: telephone.value,
    phone: phone.value,
    logo: logoURL.value,
    logoWhite: logoWhiteURL.value
  };
  console.log(websiteDetails);

  try {
    const response = await fetch('https://server.zealtechweb.com/api/update/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(websiteDetails)
    });

    if (response.ok) {
      // Assuming this.$toast is valid and works in your context
      console.log('Website Update Successfully')
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Website Details Update Successfully', life: 3000 });
    } else {
      console.error('Failed to update product. Status:', response.status);
    }
  } catch (error) {
    console.error('Error updating product:', error.message);
  }
};




const websiteInfoStore = useWebsiteInfoStore();
  websiteInfoStore.fetchWebsiteInfo();

  // Wait for the action to complete
  const websiteInfos = ref(null);

  watchEffect(() => {
    websiteInfos.value = websiteInfoStore.websiteInfos;
    console.log('websiteInfo:', websiteInfos.value[0]);


    if (websiteInfos.value && websiteInfos.value[0]) {
    name.value = websiteInfos.value[0].name || 'Enter Your Name';
    email.value = websiteInfos.value[0].email || 'Enter Your Email';
    facebook.value = websiteInfos.value[0].facebook || 'Enter Your Facebook ID';
    twitter.value = websiteInfos.value[0].twitter || 'Enter Your Twitter ID';
    linkedin.value = websiteInfos.value[0].linkedin || 'Enter Your Linkedin ID';
    websitename.value = websiteInfos.value[0].websiteName || 'Enter Website Name';
    websiteaddress.value = websiteInfos.value[0].websiteAddress || 'Enter Website Address';
    telephone.value = websiteInfos.value[0].telephone || 'Enter Your Telephone';
    phone.value = websiteInfos.value[0].phone || 'Enter Your Phone';
    imageUrl.value = websiteInfos.value[0].img ;
    logoURL.value = websiteInfos.value[0].logoImg ;
    logoWhiteURL.value = websiteInfos.value[0].logoWhiteImg ;
     }
 

  });

  


</script>
<style scoped>
  #fileInput {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

  @import "primeflex/primeflex.css";

</style>