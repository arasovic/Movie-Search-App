import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import { useStore } from '../store';
import Root from '../Root';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Root store={store}>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
