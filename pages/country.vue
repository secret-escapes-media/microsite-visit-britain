<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="hero-country.jpg"
          line1="Country"
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
            key="introText"
            paragraph="Retreat to the rolling hills and bucolic landscapes of the British countryside, where a series of secret adventures, relaxing getaways and enriching experiences are waiting to be discovered. Try your hand at the sports of fly fishing or rocking climbing, take a relaxing cruise on a canal boat, or explore the medieval wonders and foodie hotspots of Ludlow. Whatever you choose, these microgaps will take you out of your comfort zone and introduce you to your new favourite pocket of the UK."
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-1.jpg"
            title="Retreat to a Buddhist Monastery in Hertfordshire"
            paragraph="Observe the Buddhist traditions of the Amaravati Monastery at the eastern end of the Chiltern Hills in Hertfordshire. A fully-functioning community of monks and nuns practicing in the Theravada tradition, the monastery allows you to join in on their daily meditation sessions and talks, or stay for longer if you need more downtime. Being a space of peace and inward reflection, the monastery has become a welcome sanctuary from the stresses of the world, as well as a chance for visitors to learn from traditional Buddhist teachings and even offer something back through volunteer work."
            attribute1="Improve wellbeing"
            attribute2="Experience culture"
            attribute3="Good business"
            imageHighlightType="background"
            :reversed="true"
            key="imageText1"
            :visible="visibility.imageText1"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-2.jpg"
            title="Fly fishing in New Forest, Hampshire"
            paragraph="Who’s never once dreamed of fishing in a glassy stream, surrounded by the ancient trees of a magical woodland? The chalk streams of the rivers Test, Itchen and Wiltshire Avon in the New Forest are the birthplace of fly fishing, home to brown trout, grayling and atlantic salmon alike - and with plenty of fishing guides available in the local area to show you the ropes, you’ll be hooking your first catch in no time. Immersed in the spectral beauty of this incredible forest - with a packed lunch and flask of coffee in tow - lose yourself to the reflective wonders of the sport."
            attribute1="Wellbeing"
            attribute2="Learn a skill"
            imageHighlightType="background"
            key="imageText2"
            :visible="visibility.imageText2"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-3.jpg"
            title="Cruise on the Llangollen Canal"
            paragraph="Hire a narrowboat and drift along this historic canal route. Starting in north-east Wales, navigate the twists and turns of the waterway before floating into the Shropshire countryside, making sure, of course, to pitstop at the various pubs on the way - ideal for a small group of friends. The highlight of the trip will undoubtedly be the “stream in the sky”, the Pontcysyllte Aqueduct, a bridge over the River Dee that soars at around 126ft. Expect some truly epic views (and a hit of adrenaline) as you pass across to the other side..."
            attribute1="improve wellbeing"
            attribute2="adventure"
            imageHighlightType="background"
            :reversed="true"
            key="imageText3"
            :visible="visibility.imageText3"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-4.jpg"
            title="Stargazing in the Yorkshire Dales"
            paragraph="By day the Yorkshire Dales National Park is a grassy wonderland of sweeping landscapes and rolling hills; by night it plays host to a glimmering sky of soul-stirring constellations. As the sun begins to set over the heather moorlands, take a hike to one of the park’s star discovery sites - the Hawes centre, Malham centre, the Buckden car park, or the Tan Hill Inn, otherwise known as the ‘highest pub in Britain’ - where the high-altitude, open landscapes provide spine-tingling panoramic views of the Northern Hemisphere. On a clear night, you might even catch a glimpse of the Milky Way..."
            attribute1="Adventure"
            attribute2="wellbeing"
            imageHighlightType="background"
            key="imageText4"
            :visible="visibility.imageText4"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-5.jpg"
            title="Rock climbing in the Peak District"
            paragraph="Perfect for learning the rudiments of outdoor rock climbing, the Windgather Rocks on the westerly end of the Peak District are a popular gateway into the sport. With soul-stirring views across the Cheshire Lowlands and a seemingly endless number of routes up the craggy rock face, it’s a crash course of everything that makes rock climbing so special - book in with an instructor and see for yourself. For a slightly less intense excursion the next day, however, take a relaxing hike through the Goyt Valley, a picturesque landscape of rich, rural splendour."
            attribute1="adventure"
            attribute2="learn a skill"
            imageHighlightType="background"
            :reversed="true"
            key="imageText5"
            :visible="visibility.imageText5"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-6.jpg"
            title="Arts and Crafts in the Blackdown Hills, Devon"
            paragraph="The Blackdown Hills: a rural landscape of breathtaking natural beauty along the border between Somerset and Devon. Take a weekend to explore the green pastures and river-cut valleys, before booking onto a course at the The Old Kennels, a hub of creative learning with an ethos of environmental conservation. The Kennels hosts an eclectic mix of courses throughout the year, including stone and wood carving, welding, and botanical drawing - an ideal way to experience the outdoors, learn a new skill and help Mother Earth at the same time."
            attribute1="good business"
            attribute2="learn a skill"
            attribute3="wellbeing"
            imageHighlightType="background"
            key="imageText6"
            :visible="visibility.imageText6"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-7.jpg"
            title="Skiing in the Glenshee, Aberdeenshire"
            paragraph="With snow-packed conditions well into spring, the Glenshee Ski Centre is the perfect excuse to leave the city behind and take to the slopes. Ideal for first-timers and ‘black-run’ enthusiasts alike, the Glenshee boasts the largest and most varied ski slopes in the country; a series of snow-covered landscapes filled to the brim with natural steeps, sparse glades, and narrow gullies in the heart of the beautiful Cairngorms. The resort has on-site hire available, too, making it perfect for a spontaneous getaway with a partner or group of friends. Stay over at the nearby village of Braemar for a full weekend’s worth of adventure."
            attribute1="adventure"
            attribute2="learn skill"
            imageHighlightType="background"
            :reversed="true"
            key="imageText7"
            :visible="visibility.imageText7"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-8.jpg"
            title="Dining in the Foodie Haven of Ludlow"
            paragraph="The formidable number of specialist food shops, top-class restaurants and food markets local to the Shropshire town of Ludlow have earned it the moniker of ‘foodie paradise’ - and it’s no wonder. With its perfectly-preserved medieval architecture, laid-back feel, and proud emphasis on quality produce and local sourcing, Ludlow is a town-wide celebration of all things British. Take a tour of the delis, bakers, cheese shops and breweries that call the town home, before departing for a cosy meal in one of many local restaurants. For the full experience, walk off the calories the next day exploring the nearby Shropshire hills."
            attribute1="Local flavours"
            attribute2="Wellbeing"
            attribute3="culture"
            imageHighlightType="background"
            key="imageText8"
            :visible="visibility.imageText8"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-9.jpg"
            title="Mountain biking in Castlewellan, County Down"
            paragraph="Ride deep into the Castlewellan Forest Park: a magical woodland of ancient trees, stunning landscapes, and one of the most famous lakes in Northern Ireland. Visit for a weekend and test yourself on each of the five mountain biking trails on offer - with the wind on your face, scenery flashing by, and wheels whirring beneath you, you’ll get a true taste of the rugged Irish terrain. While here, make sure to visit the Peace Maze, a sprawling labyrinth of hedge rows erected to symbolise the end of the Troubles. Be warned, however: finding your way out is harder than it looks!"
            attribute1="adventure"
            attribute2="Wellbeing"
            imageHighlightType="background"
            :reversed="true"
            key="imageText9"
            :visible="visibility.imageText9"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="country/country-10.jpg"
            title="Catch some Shakespeare in Stratford-upon-Avon"
            paragraph="As the birthplace of the bard himself, the charming tudor town of Stratford-upon-Avon is a homage to all things Shakespeare - a dynamic mixture of world-class theatre, Elizabethan architecture and bucolic drinking holes. Make a trip to the Royal Shakespeare Company, the centrepiece of your stay, where regular performances of the bard’s greatest hits make for an unforgettable journey to the heart of English literature. Once you’ve had your fill of culture for the day, reflect on what you’ve seen with a walk along the winding River Avon, soaking in the marvels of the surrounding Warwickshire countryside. Better still book a gondola and see it all from the water."
            attribute1="iconic sights"
            attribute2="experience culture"
            imageHighlightType="background"
            key="imageText10"
            :visible="visibility.imageText10"
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
