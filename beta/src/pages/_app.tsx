import Tina from '../../.tina/components/TinaDynamicProvider.js'
import '../styles/algolia.css';
import '../styles/index.css';
import '../styles/sandpack.css';
import '@codesandbox/sandpack-react/dist/index.css';

type AppProps = {
  Component: any;
  pageProps: any;
};

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Tina>
      <Component {...pageProps} />
    </Tina>
  )
}

export default App
