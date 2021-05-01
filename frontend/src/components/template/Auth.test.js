import { mount } from '@vue/test-utils';
import Auth from './Auth.vue';

describe('Basic LoginForm functionality', () => {
  it('renders the form correctly', async () => {
    const wrapper = mount(Auth);
    expect(wrapper.text()).toContain('Atmosphere');
  });
});
