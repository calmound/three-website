import { GoogleAnalytics } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      test code
      <Component {...pageProps} />
    </>
  );
};

export default App;
