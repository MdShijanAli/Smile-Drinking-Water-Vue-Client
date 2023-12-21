<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 lg:py-0"
      >
        <div
          class="sm:w-[500px] w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign in to your account
            </h1>
            <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email or Phone</label
                >
                <input
                  v-model="emailOrPhone"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email or Phone"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300"
                      >Remember me</label
                    >
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-secondary transition duration-500 ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black darl:hover:text-white dark:hover:bg-secondary dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      emailOrPhone: "",
      password: "",
      auth: [],
    };
  },

  mounted() {
    this.fetchAuth();
  },

  methods: {
    fetchAuth() {
      axios
        .get("https://server.zealtechweb.com/api/auth")
        .then((res) => {
          this.auth = res.data[0];
          console.log(this.auth);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    handleLogin() {
      const loginData = {
        EmailOrAdmin: this.emailOrPhone,
        Password: this.password,
      };

      console.log(loginData);

      if (
        (this.emailOrPhone === this.auth.email ||
          this.emailOrPhone === this.auth.phone) &&
        this.password === this.auth.password
      ) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: "Login Successfull",
          life: 3000,
        });
        // Set cookies with user information
        this.$cookies.set("userEmail", this.emailOrPhone);
        // this.$cookies.set('isLoggedIn', true);

        // Redirect to the dashboard page
        this.$router.push("/dashboard");
        // Additional login logic or redirection can be added here
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Login info not matched",
          life: 3000,
        });
        console.log("Login info not matched");
      }
    },
  },
};
</script>
<style></style>
