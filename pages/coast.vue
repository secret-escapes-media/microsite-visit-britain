<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="hero-coast.jpg"
          line1="Coast"
          :showSponsor="false"
          key="hero"
          :visible="visibility.hero"
        />

        <nav-component type="main" />

        <div class="row">

          <intro-text
            key="introText"
            paragraph="The UK's coastline is studded with an array of microgap experiences that are just waiting to be found. Whether you’re learning to paint in the creative hub of St Ives, island hopping on the sub-tropical Isles of Scilly or embarking on a coastal road trip of the Scottish Highlands, the wild shores of the UK are home to a host of adventures to inspire the mind and stimulate the soul..."
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-1.jpg"
            title="Ride the North Coast 500 in the Highlands "
            paragraph="By car, bike or motorbike - the UK’s answer to Route 66 is a journey to the heart of Scotland. Starting and ending at Inverness Castle, take a week to ride this 516 mile tour of the breathtaking Scottish Coastline. Stopping off at the scenic towns of Ullapool, Durness, Dornoch and John O’Groats along the way, the North Coast 500 is the perfect opportunity to discover the heritage and culture along the outer rim of the Highlands. After all, it’s the ancient castles, glassy lochs, cosy inns, and friendly locals that make this Scottish road trip so iconic."
            attribute1="Adventure"
            attribute2="Culture"
            attribute3="iconic sights"
            imageHighlightType="background"
            :reversed="true"
            key="imageText1"
            :visible="visibility.imageText1"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-2.jpg"
            title="Wild Swimming in the Carrick-a-Rede, County Antrim "
            paragraph="Dive deep into the bracing waters of Larrybane Bay and swim across to the dramatic island of Carrick-a-Rede. Passing under the famous rope-bridge that connects the island to the mainland, this 1km swim is as visually compelling as it is challenging, with grass-topped cliffs, coastal caves and and rocky outcrops to see on your crawl to the other side. Celebrate afterwards with a sea-view picnic, before heading to the seaside village of Cushendun. Here you’ll find Mary McBride’s, one of Ireland’s smallest pubs, a traditional establishment stocking a wide range of Irish Whiskeys, a cosy atmosphere and some jolly good craic!"
            attribute1="Adventure"
            attribute2="Local flavours"
            imageHighlightType="background"
            key="imageText2"
            :visible="visibility.imageText2"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-3.jpg"
            title="Learn to paint in St Ives, Cornwall"
            paragraph="Despite the glimmering seafront, pristine white beaches and historic houses that populate the picturesque town of St Ives, it’s the arts scene that truly defines it. Switch off and discover Cornwall’s art hub for yourself at the St Ives School of Painting, a historic institution offering classes and courses on everything from oil painting to life drawing. With sea-facing views and excellent facilities, it’s a chance to unplug from the outside world and unleash your inner creativity. And why stop there? Continue the experience with visits to the iconic Tate St Ives and Barbara Hepworth Museum, and be inspired by the greats of British Modernism."
            attribute1="Learn skill"
            attribute2="Culture"
            attribute3="Wellbeing"
            imageHighlightType="background"
            :reversed="true"
            key="imageText3"
            :visible="visibility.imageText3"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-4.jpg"
            title="Guided Walking over Morecambe Bay, Lancashire"
            paragraph="Morecambe Bay is the largest expanse of mudflats in the UK, a dramatic seascape of sand and water, overlooked by the mountains of the Lake District. Take a sponsored walk with the Guide Over Sands Trust, a charity providing guides for a safe passage over the estuary - a means of experiencing the Bay’s spectacular sand-spread vistas while raising money for a worthy cause. Setting off from Arnside, the walk will lead you to the village of Kent’s Bank at the foot of the magnificent Lake District."
            attribute1="Adventure"
            attribute2="Good business)"
            imageHighlightType="background"
            key="imageText4"
            :visible="visibility.imageText4"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-5.jpg"
            title="Dolphin spotting in New Quay, Cardigan"
            paragraph="In the summer months, the waters off New Quay in Cardigan Bay are besieged by a friendly population of bottlenose dolphins. Book a trip with Survey Boat trips, a company working in conjunction with the local Wildlife Trust conservation charity, where you’ll tour the dolphin spotting hubs of Aberystwyth, Aberporth and Cardigan Island. As well as dolphins, there are seals, porpoises, and basking sharks to be seen; and you might even spot an orca if you’re lucky enough. While you’re here, take the time to visit the cosy local pubs and seafood restaurants that cling to the side of the Cardigan hills too."
            attribute1="Culture"
            attribute2="Good business"
            attribute3="Flavours"
            imageHighlightType="background"
            :reversed="true"
            key="imageText5"
            :visible="visibility.imageText5"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-6.jpg"
            title="Journey to the Holy Island of Lindisfarne, Northumberland"
            paragraph="When the tide goes out, drive across the sand of the Holy Island Causeway to the magical island of Lindisfarne off the Northumberland coast. With a recorded history dating back to the 6th century AD, walk in the footsteps of monks, vikings invaders and Norman conquerors as you visit the incredible array of historical landmarks and ruins. Due to the isolated, intertidal nature of the island, Lindisfarne is an ideal escape for those in need of a digital detox, whilst being equally unmissable as a day trip from Northumberland - just remember to check the tides before you visit!"
            attribute1="Culture"
            attribute2="Iconic sights"
            imageHighlightType="background"
            key="imageText6"
            :visible="visibility.imageText6"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-7.jpg"
            title="Sustainable Foraging in Studland Bay, Dorset"
            paragraph="Get closer to nature and learn how to live off the land as you gather cooking ingredients from the sea and shoreline of Studland Bay in Dorset. The Fore Adventure sea school has day-long crash courses in the art of foraging, teaching you how to find everything from crabs and cockles to edible plants and seaweeds. You travel by kayak to the creeks and islands around the bay, before bringing all your freshly-foraged ingredients together in the evening for a feast on the beach."
            attribute1="Learn skill"
            attribute2="Wellness"
            imageHighlightType="background"
            :reversed="true"
            key="imageText7"
            :visible="visibility.imageText7"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-8.jpg"
            title="Seafood dining in Oban, Argyll"
            paragraph="Known as ‘little bay’ in Gaelic, the fishing town of Oban is the seafood capital of Scotland (and that’s really saying something). After a day of walking through the achingly-beautiful Argyll hillsides, discover an abundance of award-winning restaurants and eateries along the harbour, a collection of locally-sourced gems serving up the freshest of catches, before winding down with a glass of malt whiskey taken straight from the local distillery. With fresh air, fresh food and soul-stirring scenery wherever you look, the town is a gateway to rejuvenation."
            attribute1="Local flavours"
            attribute2="Wellbeing"
            imageHighlightType="background"
            key="imageText8"
            :visible="visibility.imageText8"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-9.jpg"
            title="Island hopping on the Isles of Scilly"
            paragraph="A cluster of beautiful islands off the coast of Cornwall, the Isles of Scilly offers a slower pace of life, far removed from the pressures of the mainland. Indeed, with its blue waters, white beaches, unspoilt meadows and abundance of wildlife including dolphins and seals, you’d be forgiven for thinking you were in the Caribbean. Starting on St Mary’s, the largest and most populated of the islands, take a tour of the archipelago, uncovering in the distinctive characteristics of each of the islands you visit, immersing yourself in their untrammelled beauties and re-connecting with nature as island hop by boat."
            attribute1="Wellbeing"
            imageHighlightType="background"
            :reversed="true"
            key="imageText9"
            :visible="visibility.imageText9"
          />

        </div>

        <div class="row row--wide">

          <image-text
            imageSrc="coast/coast-10.jpg"
            title="Eco Building in the Gower Peninsula, Swansea"
            paragraph="There’s real truth to saying ‘hard work pays off’ - studies show that seeing the results of your handwork has an astounding effect on your mental health and sense of wellbeing. The ‘Down to Earth Project’ in the Gower Peninsula offers exactly that: the chance to learn sustainable building methods and take part in construction projects that directly affect the local community. With the swashing seas of the Welsh coast as your backdrop, learn skills such as timber framing, carpentry and dry stone walling as you assist in the creation of sustainable architecture in projects that cover everything from farm houses to outdoor classrooms."
            attribute1="Learn a skill"
            attribute2="Good business"
            attribute3="Wellbeing"
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
