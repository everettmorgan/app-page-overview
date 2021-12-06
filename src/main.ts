import { createApp, App as CreateApp } from 'vue';
import App from './App';
import './App.css';

let app: CreateApp;

export function init(opts: { container: any, props: any }) {
  app = createApp(App, opts.props);
  app.mount(opts.container);
}

export function clean() {
  app.unmount();
}

if (process.env.NODE_ENV === 'development') {
  createApp(App, {
    name: 'AudioEye',
    rating: '4.5',
    desc: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    availablePlan: 'Free plan',
    installLink: 'https://google.com',
    logo: 'https://portal.audioeye.com/images/marketplace-logo.png',
    screenshots: [
      'https://via.placeholder.com/1278x948',
      'https://via.placeholder.com/1278x948',
      'https://via.placeholder.com/1278x948',
      'https://via.placeholder.com/1278x948',
    ],
  }).mount('#app');
}
