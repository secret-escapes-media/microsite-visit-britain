<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="/hero-competition.jpg"
          line1="12 microgaps."
          line2="One weekend."
          line3="Enter now to win."
          key="hero"
          :visible="visibility.hero"
        />

        <nav-component
          type="main"
          key="nav"
        />

        <div class="row row--full">

          <image-text
            imageSrc="/overview.jpg"
            title="Win a short break"
            paragraph="We're giving away 12 microgap experiences to 12 lucky winners. That means one long weekend away for you and a guest anywhere in Britain, packed with adventure. You'll stay at a gorgeous hotel and enjoy a unique experience whilst you're away, having your very own microgap getaway. All you need to do is tell us whether you want to escape to the coast, the country or the city. We'll match the prize to your choice for a personalised win. Just make sure you're free on the weekend of April 5th, as our 12 lucky winners, which you could be part of, will all be escaping in Britain on this weekend and this weekend only! "
            :reversed="true"
            key="imageText1"
            :visible="visibility.imageText1"
          />

        </div>

        <competition />

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
import Competition from "@/components/Competition";

export default {
  components: {
    Hero,
    NavComponent,
    IntroText,
    HoverImage,
    ImageText,
    Competition
  }
};
</script>
