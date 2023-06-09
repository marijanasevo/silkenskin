import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

import css from "./home-instagram.module.css";

const HomeInstagram = () => {
  return (
    <div className={"page-container"}>
      <div className={css["home-instagram-heading"]}>
        <h2 className={`${css["title"]} section-title`}>We create for You</h2>
        <span className={css["subheading"]}>find us at @silkenskinco_</span>
      </div>
      <div className={css["instagram-grid"]}>
        <InstagramEmbed
          placeholderSpinnerDisabled
          url="https://www.instagram.com/p/Cr0kVzeMQgH/"
          width={328}
        />
        <InstagramEmbed
          placeholderSpinnerDisabled
          url="https://www.instagram.com/p/Cr0iMPJgj1P/"
          width={328}
        />
      </div>
    </div>
  );
};

export default HomeInstagram;
