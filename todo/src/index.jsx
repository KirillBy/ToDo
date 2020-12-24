import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import {store} from "./actions/store";
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
</Provider>,
  document.getElementById('root'));