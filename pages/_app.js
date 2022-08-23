import "../styles/globals.css";

// components
import MainLayout from "../components/Layout/MainLayout";

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
