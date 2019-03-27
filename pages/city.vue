<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="hero-city.jpg"
          line1="City"
          :showSponsor="false"
          key="hero"
          :visible="visibility.hero"
        />

        <nav-component
          type="main"
          key="nav"
        />

        <div class="row">

          <intro-text
            paragraph="The cities of Britain are melting pots of culture; sprawling urban playgrounds, each unique in their own way, and teeming with a diverse array of people - but you probably already knew that, which is why you want a micrograp experience that offers something new. Discover the hidden treasures that shine beneath the surface of our incredible cities. From boxing in Manchester to ghost tours in Cardiff - these are experiences you’ll never forget."
            key="introText"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-1.jpg"
            title="Learn the art of Blacksmithing in Glasgow"
            paragraph="Try your hand at the time-honoured craft of blacksmithing at the Vanguard Centre in Glasgow. In learning a trade that dates back as far as 1500 BC, the course provides a sure-fire way of reconnecting with your ancient ancestors, by transforming a raw material into something functional using your own bare hands. With a red hot forge beside you, learn how to bend and beat the metal into shape, creating everything from bottle openers to Viking-style jewellery."
            attribute1="Learn a skill"
            attribute2="Wellbeing"
            imageHighlightType="background"
            :reversed="true"
            key="imageText1"
            :visible="visibility.imageText1"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-2.jpg"
            title="Uncover the trend of Ethical Eating in London"
            paragraph="There are countless places to eat in London (throw a stone and you’ll hit one), but among them are restaurants pioneering a trend of sustainability and community-building. One of the best is the Clink Restaurant in Brixton Prison - a charity that aims to rehabilitate prisoners by training them as chefs - book in for a fine-dining experience like no other; one that truly gives something back. Next, try Jamie Oliver’s flagship Fifteen restaurant, an organisation aimed at giving unemployed young people the start they need in the food industry, with a menu that uses local-produce to create mouth-wateringly good 5-course meals."
            attribute1="Local flavours"
            attribute2="Good Cause"
            imageHighlightType="background"
            key="imageText2"
            :visible="visibility.imageText2"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-3.jpg"
            title="Immerse yourself in the Black Country heritage of Birmingham "
            paragraph="The industrial heritage of Birmingham is brought to life in the Black Country Living Museum in Dudley, an open-air recreation of an early 20th century village. Telling the tale of the Industrial Revolution, of which Dudley played a central role, the museum is staffed by a host of characters in period costume who’ll take you back in time. There’s a coal mine, a school, a fairground, a pub, a chippy, and a whole village of retro houses and shops to explore. It’s a nostalgia trip that’s yet to be surpassed."
            attribute1="Experience culture"
            attribute2="Iconic attractions"
            imageHighlightType="background"
            :reversed="true"
            key="imageText3"
            :visible="visibility.imageText3"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-4.jpg"
            title="Take a cookery class in Bath"
            paragraph="Delve into the world of plant-based cooking at the Demuths Cookery School in Bath. Offering a variety of day, evening and weekend classes on everything from Indian street food to the art of fermenting vegan cheese, you’ll come away with the peace of mind that only cooking can bring, plus a wealth of recipes to try at home. After nightfall, take a relaxing dip in the luxurious Thermae Bath Spa where the rooftop pool offers panoramic views of Bath’s skyline - an enriching end to a relaxing stay."
            attribute1="Learn a skill"
            attribute2="Local flavours"
            imageHighlightType="background"
            key="imageText4"
            :visible="visibility.imageText4"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-5.jpg"
            title="Lose yourself in the libraries of Oxford	"
            paragraph="As a world-renowned hub of learning, the City of Dreaming Spires has the libraries to match; a wondrous assortment of architectural marvels,  each built during a pivotal moment in English history. Whether you’re looking to research something in particular, in search of a quiet place to read, or simply wanting to bask in their breathtaking interiors, a tour of the Oxford libraries is sure to leave you in a state of meditative bliss. Continue into the evening with a visit to the Holywell Music Room, the oldest concert hall in Europe."
            attribute1="Experience culture"
            attribute2="Iconic attractions"
            imageHighlightType="background"
            :reversed="true"
            key="imageText5"
            :visible="visibility.imageText5"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-6.jpg"
            title="Learn to box in Manchester"
            paragraph="After a day of browsing the Northern Quarter, sitting in cafes and taking in the pleasures of Manchester’s vibrant arts scene, blow off some steam with a trip to the Moss Side boxing gym - it might seem a strange choice, but bear with us… The Moss Side Fire Station Boxing Club was set up by a group of firefighters as a means of offering a productive outlet for disaffected young people. They run classes in the evenings for folks of all age groups and abilities, providing a great introduction to the sport for beginners, as well as a chance to support them in all the work they do for the local community - it’s a win-win!"
            attribute1="Learn a skill"
            attribute2="Good Cause"
            imageHighlightType="background"
            key="imageText6"
            :visible="visibility.imageText6"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-8.jpg"
            title="Browse the street markets of Edinburgh"
            paragraph="Take a break from all the heritage sights, galleries and neoclassical buildings, and discover a lovely array of Scottish street markets. Your first stop will be the charming Edinburgh Farmer’s Market on Castle Terrace. Beneath the shadow of the looming castle, this bustling market is stocked full of locally-sourced, seasonal produce - jams, chutneys, fresh cuts of meat; it’s a foodie’s paradise. Next on your market tour, hit the Greater Grassmarket for homegrown goodies and handcrafted gifts, before visiting the Stockbridge Market in the Jubilee Gardens, for exquisite street food, original artworks, and much else besides."
            attribute1="Local flavours"
            attribute2="Wellbeing"
            imageHighlightType="background"
            :reversed="true"
            key="imageText8"
            :visible="visibility.imageText8"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-9.jpg"
            title="Soak in the music scene of Sheffield"
            paragraph="From indie rock to swinging jazz - the Northern soul of Sheffield continues well into the present. Catch a live band on any given night with a trip to either West Street Live, an intimately sweaty venue with a love of fresh acts, the Dove & Rainbow, for punk aficionados, or the Harley Hotel, a popular venue serving up an eclectic mixture of hipster-friendly sounds. For an evening of jazz or folk, make your way to Greystones, a traditional community pub that punches above its weight in terms of acts, with alumni including Duanne Eddy, Chastity Brown and Richard Hawley (who lives down the road)."
            attribute1="experience culture"
            imageHighlightType="background"
            key="imageText9"
            :visible="visibility.imageText9"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="city/city-10.jpg"
            title="Take a ghost tour of Cardiff Castle"
            paragraph="When the darkness settles, head to Cardiff Castle for a journey into the gruesome past of this dimly-lit fortress. Leading you by torch light, your guide will take you through the various rooms - including the clock tower, nursery and banqueting hall - regaling you with stories of bloody events and ghostly phenomena. Come morning, head to St Fagans National Museum of History for a heritage attraction of a totally different nature - an open-air showcase of historical buildings from across the ages - a wholesome antidote to a night of terror."
            attribute1="Culture"
            attribute2="Iconic sights"
            imageHighlightType="background"
            :reversed="true"
            key="imageText10"
            :visible="visibility.imageText10"
          />

        </div>

      </template>
    </scroll-view>

    <img src="//tag.yieldoptimizer.com/ps/analytics?pxid=44643&" width='1' height='1'>

  </div>

</template>

<script>
import Hero from "@/components/Hero";
import NavComponent from "@/components/Nav";
import IntroText from "@/components/IntroText";
import ImageText from "@/components/ImageText";

export default {
  components: {
    Hero,
    NavComponent,
    IntroText,
    ImageText
  }
};
</script>
