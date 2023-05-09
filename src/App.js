import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './config/approuter';
import store from './config/redux/store/store';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
