const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F6K2YKDCMV"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6K2YKDCMV');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
