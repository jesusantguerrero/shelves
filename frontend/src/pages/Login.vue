<template>
  <AuthTemplate>
    <LoginForm  app-name="Shelves">

    </LoginForm>
  </AuthTemplate>
</template>

<script>
import AuthTemplate from "../components/template/Auth.vue";
import LoginForm from "../components/organisms/Auth/LoginForm.vue";

export default {
  name: 'Login',
  components: {
    AuthTemplate,
    LoginForm
  }
}
</script>

