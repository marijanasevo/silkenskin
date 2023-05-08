import AboutImage from "../../assets/about.jpg";
import css from "./about.module.css";

const About = () => {
  return (
    <div className={`page-container`}>
      <h1 className={`page-heading`}>About Silken Skin</h1>
      <p className={`${css["about-intro"]}`}>
        Whether you have dry, oily, or sensitive skin, our products are designed
        to meet your unique skincare needs and leave your skin feeling soft and
        radiant. We offer a wide range of products that are formulated to work
        together to create a healthy, glowing complexion.
      </p>

      <div className={`${css["main-about"]}`}>
        <img
          className={css["about-image"]}
          src={AboutImage}
          alt={"Aesthetic skincare products"}
        />
        <div className={`${css["secondary-header"]}`}>
          YOUR BODY IS YOUR HOME
        </div>
        <div className={`${css["about-description"]}`}>
          At Silken Skin Co, we believe that true beauty comes from within and
          that taking care of your skin is just a form of self-love and
          gratitude for what you have. That's why we're dedicated to crafting
          quality products with clean ingredients that support one another and
          provide the nourishment and care that your skin needs to feel its
          best.
          <br />
          <br />
          Our focus is on delivering luxurious and effective skincare products
          that are gentle on your skin and the planet. We use only the finest,
          ethically-sourced, and sustainable ingredients in our formulations to
          ensure that our products are as kind to the earth as they are to your
          skin.
          <br />
          <div
            className={`${css["secondary-header"]} ${css["secondary-header-desc"]}`}
          >
            <div>& LOVE STARTS AT HOME</div>
          </div>
          <br />
          Home is the first place where love should be expressed and practiced.
          So if you're looking for a skincare brand that is committed to natural
          and organic ingredients, quality products, and empowering you to love
          and appreciate your body, look no further than Silken Skin Co. Our
          mission is to provide you with the tools and resources you need to
          cultivate a deeper sense of self-love and confidence in your own skin.
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
