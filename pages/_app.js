import "../styles/globals.css";

// components
import MainLayout from "../components/Layout.js/MainLayout";

function MyApp({ Component, pageProps }) {
  return Component.getLayout ? (
    <Component {...pageProps} />
  ) : (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
