import { AboutUs, FAQ, Footer, Gallery, Home } from "./pages";

export const IMAGES = {
  shopCart: new URL("./assets/shopping-cart.png", import.meta.url).href,
  instagramLogoSrc: new URL("./assets/instagram.svg", import.meta.url).href,
  facebookLogoSrc: new URL("./assets/facebook.svg", import.meta.url).href,
  twitterLogoSrc: new URL("./assets/twitter.svg", import.meta.url).href,
  homeBg: new URL("./assets/homeBg.png", import.meta.url).href,
  burgerMenuSrc: new URL("./assets/burger-menu.svg", import.meta.url).href,
};

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
