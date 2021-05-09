<template>
  <AuthTemplate>
    <LoginForm
      app-name="Shelves"
      @submit="onLogin"
      v-model:isLoading="isLoading"
    >
    </LoginForm>
  </AuthTemplate>
</template>

<script>
import AuthTemplate from "../components/template/Auth.vue";
import LoginForm from "../components/organisms/Auth/LoginForm.vue";
import { onLogin } from "../services/auth";
import { ref } from 'vue';

export default {
  name: 'Login',
  components: {
    AuthTemplate,
    LoginForm
  },
  setup() {
    const isLoading = ref(false);

    const  login = (formData) => {
      if (isLoading.value) return
      onLogin(formData).then(() => {
        debugger
        push({ name: 'feed'});
      }).catch(() => {
        isLoading.value = false
      })
    }

    return {
      onLogin: login
    }
  }
}
</script>

