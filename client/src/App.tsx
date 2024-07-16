import BannerCategories from "./ui/BannerCategories";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner";
import Highlights from "./ui/Highlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />

      {/* Product List  */}
      <ProductList />
      {/* Discounted Banner  */}
      <DiscountedBanner />
      {/* Blog  */}
      <Blog />
    </main>
  );
}

export default App;
