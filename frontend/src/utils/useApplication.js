import { reactive, toRefs } from 'vue';

export const useApplication = () => {

  const applicationState  = reactive({
    user: null,
    token: null
  });

  const setUser = (user) => {
    applicationState.user = user;
  };

  const setToken = (token) => {
    applicationState.token = token;
  };

  return {
    ...toRefs(applicationState),
    setToken,
    setUser
  };
};

