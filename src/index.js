import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style';

// Provider 组件只需要在根组件外面包裹一次
// 将 store 作为 prop 传给 Provider
render((
  <div id="outer">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
), document.body);
