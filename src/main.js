import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton';
import BaseInput from './components/UI/BaseInput';
import BaseContainer from './components/UI/BaseContainer';
import BaseCheckbox from './components/UI/BaseCheckbox';
import BaseHeader from './components/UI/BaseHeader';

import PasswordComponent from './components/Form/PasswordComponent'
const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-checkbox', BaseCheckbox);
app.component('base-header', BaseHeader);
app.component('base-input', BaseInput)

app.component('password-component', PasswordComponent)

app.mount('#app');
