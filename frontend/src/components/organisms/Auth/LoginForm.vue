<template>
  <form class="form-signin md:w-1/2 w-full px-12" @submit.prevent="loginUser">
      <div class="w-full flex justify-center items-center mb-20 sm:pt-20">
          <div class="text-8xl text-center zen">
              Zen.
          </div>
      </div>

      <div
          class="form-group text-left"
      >
          <label for="email" class="inline-block mb-2">Email</label>
          <p :class="{ control: true }">
              <input
                  v-model.trim="formData.email"
                  class="form-control input"
                  :class="{ 'border-red-400 border-2': false }"
                  name="email"
                  type="text"
                  required
              />
          </p>
      </div>

      <div
          class="form-group"
      >
          <label for="password" class="password-label"><span>Password</span></label
          >
          <p :class="{ control: true }">
              <input
                  type="password"
                  id="password"
                  v-model="formData.password"
                  class="form-control input"
                  :class="{ 'border-red-400 border-2': false }"
                  name="password"
                  required
              />
          </p>
      </div>

      <div
          class="form-group"
          v-if="mode!='login'"
      >
          <label for="password" class="password-label">
              <span>Confirm Password</span>
          </label>
          <p class="true">
              <input
                  type="password"
                  id="confirm-password"
                  v-model="formData.confirmPassword"
                  class="form-control input"
                  @blur="isDirty=true"
                  :class="{ 'error-input': isConfirmationInvalid }"
                  name="confirm-password"
                  required
              />
              <small v-if="isConfirmationInvalid" class="text-red-200"> Passwords are not equal </small>
          </p>
      </div>

      <button
          class="btn btn-action capitalize rounded-sm"
          type="submit"
          :disabled="isConfirmationInvalid"
      >
          {{ mode }}
          <i v-if="isLoading" class="fa fa-spinner fa-pulse ml-2"></i>
      </button>

      <button
          class="btn btn-action capitalize rounded-sm flex google-btn justify-center"
          type="submit"
          @click.prevent.stop="loginWithProvider('google')"
      >
          <img src="./../assets/btn_google_light.svg" alt="">
          {{ modeLabel }} With Google
      </button>

      <div class="">
          <div v-if="mode=='register'"> Already have an account?
              <router-link class="text-green-400 font-bold"  to="/login"> Login </router-link>
          </div>

            <div v-else> Dont have an account?
              <router-link  to="/register" class="text-green-400 font-bold"> Create one </router-link>
          </div>
      </div>
      <p class="copyrights pt-10">&copy; {{ currentYear }}</p>
  </form>
</template>

<script>
export default {
  props: {
      mode: {
        type: String,
        default: "login"
      },
      isLoading: {
        type: Boolean,
        default: false
      }
  },
  emits: [
    'submit'
  ],
  setup(props, { emit }) {
    import { reactive, ref, computed, toRefs } from "vue";
    import { useRouter } from "vue-router"

    const { mode } = toRefs(props)
    const isLoading = ref(false)
    const formData = reactive({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const currentYear = computed(() =>{
        const date = new Date();
        return date.getFullYear();
    })

    const modeLabel = computed(() => {
        return mode.value == 'register' ? 'Sign Up' : 'Sign In';
    })

    // validation
    const isDirty = ref(false)
    const isConfirmationInvalid = computed(() => {
        return isDirty.value && mode.value == 'register' && formData.password != formData.confirmPassword;
    })

    // auth manipulation
    const { push } = useRouter()

    const loginUser = () => {

        if (!validateRegistration()) {
            return
        }

        const loginFunction = mode.value == 'login' ? login : register;
        isLoading.value = true;
        emit('update:isLoading', true)
        emit('submit', {...formData})
    }

    const validateRegistration = () => {
       if (mode.value == 'register' && formData.password != formData.confirmPassword) {

            return false
        }
        return true
    }

  }
}
</script>
