import { mount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('Basic LoginForm functionality', () => {
  it('renders the form correctly', async () => {
    console.log(LoginForm);
    const wrapper = mount(LoginForm, {
      props: {
        appName: 'Shelves'
      }
    });
    expect(wrapper.text()).toContain('Atmosphere');
  });
});
