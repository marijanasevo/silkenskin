import HomeHero from "../../components/home-hero/home-hero.component";
import HomeIntro from "../../components/home-intro/home-intro.component";
import HomeCategories from "../../components/home-categories/categories-container.component";
import HomeNewArrivals from "../../components/home-new-arrivals/home-new-arrivals.component";
import HomeFeaturedProduct from "../../components/home-featured-product/home-featured-product.component";
import HomeBlog from "../../components/home-blog/home-blog.component";
import HomeAbout from "../../components/home-about/home-about.component";
import HomeAttributes from "../../components/home-attributes/home-attributes.component";
import HomeInstagram from "../../components/home-instagram/home-instagram.component";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeCategories />
      <HomeNewArrivals />
      <HomeFeaturedProduct />
      <HomeBlog />
      <HomeAbout />
      <HomeInstagram />
      <HomeAttributes />
    </>
  );
};

export default Home;
