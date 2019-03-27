<template>

  <div class="page">

    <scroll-view>
      <template slot-scope="visibility">

        <hero
          image-src="footer.jpg"
          line1="Offers"
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
            paragraph="Browse a handpicked selection of gorgeous hotels across Britain. Each offer includes experiences to embellish your getaway, a perfect base from which to craft your very own microgap."
          />

        </div>

        <div class="offers__section">

          <!--
          <div class="row row--wide">
            <h2 class="offers__title">Offers</h2>
          </div>
          -->

          <div class="row row--wide">

            <div class="offers__container">

              <offer
                key="offer1"
                title="No Man's Fort"
                location="Portsmouth, Hampshire"
                description="Soak up a bucket-list sea fort stay in the Solent"
                percentage="36"
                cost="174"
                costDescription="Per person per night"
                url="https://www.secretescapes.com/no-mans-fort-portsmouth-hampshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/42103/cccf48d1_5dc2_4639_b6b5_a0bcfc9e993d.jpg"
              />

              <offer
                key="offer2"
                title="Thornbury Castle"
                location="The Cotswolds, Thornbury"
                description="England's only Tudor castle hotel, with a spectacular Cotswolds setting, award-winning fine dining and historic landscaped grounds - breakfast and dinner included"
                percentage="48"
                cost="104"
                costDescription="Per person per night"
                url="https://www.secretescapes.com/thornbury-castle-the-cotswolds-thornbury/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/40049/adfbde58_1b9e_4e27_8a8e_725974c84c07.jpg"
              />

              <offer
                key="offer3"
                title="Yachting on the Solent with a choice of two unique stays"
                location="Sail between Lymington & the Isle of Wight Hampshire"
                description="Travel by boat for a once-in-a-lifetime stay on a historic Solent fort, with boat transfers, breakfast, a three-course dinner and guided tour included"
                percentage="44"
                cost="124"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/yachting-on-the-solent-with-a-choice-of-two-unique-stays-sail-between-lymington-and-the-isle-of-wight/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/67658/e52594ad_9c91_45f4_bcb9_8b16ea594406.jpg"
              />

              <offer
                key="offer4"
                title="Champneys Henlow"
                location="Henlow, Bedfordshire"
                description="A soul-soothing stay at a stately Champneys spa resort in Bedfordshire – includes all meals, plus a thalassotherapy pool treatment and unlimited use of the leisure facilities"
                percentage="34"
                cost="114"
                costDescription="Per person per night"
                url="https://www.secretescapes.com/champneys-henlow-henlow-bedfordshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/81648/0c717cb9_8520_4b20_94b3_30e2d22d11c7.jpg"
              />

              <offer
                key="offer5"
                title="Thrilling York Bird of Prey Centre experience & a nearby hotel stay"
                location="Best Western Burn Hall Hotel, North Yorkshire"
                description="Meet and greet with eagles, owls and more at York’s Bird of Prey Centre"
                percentage="39"
                cost="55"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/thrilling-york-bird-of-prey-centre-experience-and-a-nearby-hotel-stay-best-western-burn-hall-hotel-north-yorkshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90074/eb04dc9a_7073_4874_86ef_194dd3a1ba95.jpg"
              />

              <offer
                key="offer6"
                title="Best Western Plus Stoke on Trent Moat House with Alton Towers"
                location="Stoke-on-Trent, Staffordshire"
                description="A Grade II-listed Staffordshire Georgian house with Alton Towers day passes"
                percentage=""
                cost="122"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/best-western-plus-stoke-on-trent-moat-house-with-alton-towers-stoke-on-trent-staffordshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90338/d1f3a918_8c99_4a08_8589_2c41f9b296c3.jpg"
              />

              <offer
                key="offer7"
                title="Country stay with walking experience in the New Forest"
                location="Best Western Chilworth Manor, Hampshire"
                description="Admire the landscapes of the New Forest from a manor house base"
                percentage=""
                cost="133"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/country-getaway-and-walking-holiday-in-the-new-forest-best-western-chilworth-manor-hampshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90046/ecf76b33_28b9_4e75_b153_bb42d07b7a42.jpg"
              />

              <offer
                key="offer8"
                title="Peak District hiking with a country mansion stay"
                location="Shrigley Hall Hotel, Cheshire"
                description="Relax in 19th-century elegance after exploring the Peak District"
                percentage=""
                cost="63"
                costDescription="Per person per night"
                url="https://www.secretescapes.com/the-shrigley-hall-hotel-and-spa-macclesfield-cheshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90056/20d537ea_9263_4c35_b7f9_18204715a4ee.jpg"
              />

              <offer
                key="offer9"
                title="Royal Edinburgh Military Tattoo break with a modern hotel stay"
                location="Edinburgh, Scotland"
                description="An iconic Edinburgh stay with parades and bagpipes"
                percentage=""
                cost="145"
                costDescription="Per person per stay"
                url="https://www.secretescapes.com/royal-edinburgh-military-tattoo-break-with-a-modern-hotel-stay-edinburgh-scotland/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90157/1bbad095_d45a_4100_8406_c9a983234e78.jpg"
              />

              <offer
                key="offer10"
                title="Craft beer tour & staycation near historic York"
                location="The Parsonage Hotel & Spa, North Yorkshire"
                description="A craft beer tour and tasting with a hotel stay near historic York"
                percentage="27"
                cost="203"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/a-craft-beer-tour-and-staycation-in-historic-york-the-parsonage-hotel-and-spa-york/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90283/b1ce6f33_971b_40a2_962c_ef61e40b696e.jpg"
              />

              <offer
                key="offer11"
                title="Exclusive dinner with Harry Redknapp & central Manchester stay"
                location="Hotel Indigo Manchester - Victoria Station, Greater Manchester"
                description="Meet Harry Redknapp and enjoy metropolitan Manchester from a central hotel"
                percentage="20"
                cost="239"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/exclusive-dinner-with-harry-redknapp-and-central-manchester-stay-hotel-indigo-manchester-victoria-station-greater-manchester/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90295/a60deb21_6d13_4044_b274_2b14fb9aea92.jpg"
              />

              <offer
                key="offer12"
                title="Suite stay near Liverpool with British Music Experience tickets"
                location="Suites Hotel & Spa Knowsley, Merseyside"
                description="A music-filled stay near Liverpool with British Music Experience tickets"
                percentage=""
                cost="113"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/suite-stay-near-liverpool-with-british-music-experience-tickets-suites-hotel-and-spa-knowsley-merseyside/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90043/0fbcf5c5_f6e2_4778_b2f7_3f402f03b504.jpg"
              />

              <offer
                key="offer13"
                title="Inspiring Stratford-upon-Avon Shakespeare break"
                location="Ettington Chase Hotel, Warwickshire"
                description="Explore Shakespeare's country, plus an elegant manor house stay"
                percentage=""
                cost="110"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/stratford-upon-avon-shakespeare-sojourn-ettington-chase-hotel-warwickshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89986/da907598_ccdc_4789_902f_625f5741a941.jpg"
              />

              <offer
                key="offer14"
                title="Mesmerising Tutankhamun exhibition & a London hotel stay"
                location="Saatchi Gallery, Chelsea, & your choice of a London hotel"
                description="Gaze at King Tut's ancient tomb treasures and enjoy a London hotel stay"
                percentage=""
                cost="69"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/mesmerising-tutankhamun-exhibition-and-a-hotel-stay-in-london-saatchi-gallery-chelsea-and-your-choice-of-a-london-hotel/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90147/9a17d149_3f6a_4185_8025_fc2dbf595286.jpg"
              />

              <offer
                key="offer15"
                title="Taplow House Hotel"
                location="Maidenhead, Buckinghamshire"
                description="Embrace rural charm at a boutique Georgian hotel near Windsor"
                percentage="47"
                cost="74"
                costDescription="Per person per night"
                url="https://www.secretescapes.com/taplow-house-hotel-maidenhead-buckinghamshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/43231/6c300a68_8c3e_4bf1_97a7_8155b5684cba.jpg"
              />

              <offer
                key="offer16"
                title="RiverBeds Luxury Wee Lodges with Hot Tubs"
                location="Glencoe Valley, Scotland"
                description="A boutique-style lodge stay with hot tub in Scotland’s Glencoe Valley"
                percentage="45"
                cost="98"
                costDescription="Per person per lodge"
                url="https://www.secretescapes.com/riverbeds-luxury-wee-lodges-glencoe-valley-scotland/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/80622/e5399b51_4acd_4a55_abf1_f195ba0911b0.jpg"
              />

              <offer
                key="offer17"
                title="Vintage luxury train to the Aintree Grand National & a London stay"
                location="The Rembrandt Hotel, London"
                description="Travel in style to the Aintree Grand National on the Northern Belle"
                percentage=""
                cost="500"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/vintage-luxury-train-to-the-aintree-grand-national-and-a-london-stay-the-rembrandt-hotel-london/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90865/7c3bcea9_cedf_4784_9d44_4408a22801af.jpg"
              />

              <offer
                key="offer18"
                title="World of Wedgwood pottery experience & a Stoke-on-Trent hotel stay"
                location="Best Western Plus Stoke on Trent Moat House, Staffordshire"
                description="Admire pioneering English pottery at Stoke-on-Trent's World of Wedgwood"
                percentage=""
                cost="138"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/world-of-wedgwood-pottery-experience-and-stoke-on-trent-hotel-stay-best-western-plus-stoke-on-trent-moat-house-staffordshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90278/bf6d814e_8477_45d8_8f33_b2db98041023.jpg"
              />

              <offer
                key="offer19"
                title="B Bakery afternoon tea bus tour with central London stay"
                location="O Hyde Park, Kensington"
                description="An unforgettable afternoon tea bus tour and new hotel stay near London’s Hyde Park"
                percentage="41"
                cost="98"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/b-bakery-afternoon-tea-bus-tour-with-central-london-stay-o-hyde-park-kensington/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90410/7748495a_12c3_48ba_ac5b_0d46fdff46de.jpg"
              />

              <offer
                key="offer20"
                title="Legoland Windsor break with a country hotel stay"
                location="The Bull Hotel, Gerrards Cross"
                description="Conquer dragons and explore the land of the Pharaohs at Legoland Windsor"
                percentage="45"
                cost="85"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/legoland-windsor-break-with-a-country-hotel-stay-the-bull-hotel-gerrards-cross/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90813/47ab6bf6_9831_4f96_882b_1b17f73e8428.jpg"
              />

            </div>

          </div>

        </div>

      </template>
    </scroll-view>

    <img src="//tag.yieldoptimizer.com/ps/analytics?pxid=44647&" width='1' height='1'>

  </div>

</template>

<script>
import Hero from "@/components/Hero";
import NavComponent from "@/components/Nav";
import IntroText from "@/components/IntroText";
import ImageText from "@/components/ImageText";
import Offer from "@/components/Offer";

export default {
  components: {
    Hero,
    NavComponent,
    IntroText,
    ImageText,
    Offer
  }
};
</script>
