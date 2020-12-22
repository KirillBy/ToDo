import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import {store} from "./actions/store";

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider>,
  document.getElementById('root'));