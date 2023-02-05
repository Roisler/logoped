import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import init from './init';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('main'));
  root.render(await init());
};

app();
