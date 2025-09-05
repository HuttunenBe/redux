import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // This is how we start (mount) a React app in modern React.
import App from './App.jsx';
import { Provider } from 'react-redux'; // Enable access Redux for all components 
import store from './store/store.js'; 
import { BrowserRouter } from 'react-router-dom';





createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      {/* Now the whole app can access the Redux store */}
      <App />
    </Provider>
  </StrictMode>
);



//wraps your app with <Provider> so any component can use that store.