import type { AppProps } from 'next/app';
import '~/assets/styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
