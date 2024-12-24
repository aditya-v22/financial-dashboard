import { useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes';
import store from './store/store';

function App() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const vh = Math.max(root.clientHeight || 0, window.innerHeight || 0);
    root.style.setProperty('--app-root-winh', `${vh}px`);
  }, []);

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
