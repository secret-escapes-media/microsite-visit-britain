<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="hero-overview.jpg"
          line1="Find your own"
          line2="Microgap"
          :showSponsor="true"
          key="hero"
          :visible="visibility.hero"
        />

        <nav-component
          type="main"
          key="nav"
          :visible="visibility.nav"
        />

        <div class="row">

          <intro-text
            boldParagraph="Whether you're wild swimming off the craggy coasts of Northern Ireland, retreating to a Buddhist monastery in Hertfordshire, or learning the craft of blacksmithing in Glasgow, you can discover unforgettable experiences right at your doorstep. Experience new things, explore new cultures, learn new skills and meet new people - find your microgap. "
            paragraph="Take a look at our handpicked selection of unmissable microgap experiences from coast, to country, to city. Pick your perfect hotel offer from across the UK and begin your very own microgap adventure today."
            key="intro"
            :visible="visibility.intro"
          />

        </div>

        <div class="row row--wide">

          <hover-image
            key="hoverImage"
            :visible="visibility.hoverImage"
          />

        </div>

        <div class="row row--full">

          <image-text
            imageSrc="overview.jpg"
            title="Find your next Microgap Experience"
            paragraph="Experience new things, explore new cultures, learn new skills and meet new people - find your microgap."
            url="offers"
            key="imageText"
            :visible="visibility.imageText"
          />

        </div>

      </template>
    </scroll-view>

  </div>

</template>



<script>
import Hero from "@/components/Hero";
import NavComponent from "@/components/Nav";
import IntroText from "@/components/IntroText";
import HoverImage from "@/components/HoverImage";
import ImageText from "@/components/ImageText";

export default {
  components: {
    Hero,
    NavComponent,
    IntroText,
    HoverImage,
    ImageText
  }
};
</script>
