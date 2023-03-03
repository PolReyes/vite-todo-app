import './style.css'
import {App} from './src/all/app'
import allStore from './src/store/all.store';

allStore.initStore();

App('#app')
