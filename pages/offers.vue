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
                url="https://www.secretescapes.com/no-mans-fort-portsmouth-hampshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
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
                title="Elegant West London getaway with Harry Potter tour tickets"
                location="Roseate House London, Hyde Park"
                description="Stay at an elegant boutique west London hotel set just moments from Hyde Park - includes breakfast, Harry Potter tour tickets and an Oxford coach trip"
                percentage=""
                cost="155"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/elegant-west-london-getaway-with-harry-potter-tour-tickets-roseate-house-london-london/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89418/54a4c7b5_ee62_48d2_9dd4_de74e121723d.jpg"
              />

              <offer
                key="offer4"
                title="Gourmet dining bus tour with a chic West London stay"
                location="The Rembrandt, Knightsbridge"
                description="A classic Edwardian hotel combining history and contemporary charm in the heart of Knightsbridge, with breakfast and London's first gastronomic double decker bus tour"
                percentage="27"
                cost="165"
                costDescription="Per person for 1 night"
                url="https://www.secretescapes.com/the-rembrandt-knightsbridge-london-uk-sale/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89316/9db4284f_c78c_498d_9d1b_f32e270d01cb.jpg"
              />

              <offer
                key="offer5"
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
                key="offer6"
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
                key="offer7"
                title="Old Walls Vineyard"
                location="Bishopsteignton, Devon"
                description="Escape to a rural bolthole surrounded by rolling hills and sumptuous vines on the Devon coast, including breakfast, a cream tea, wine making and tasting experience and more"
                percentage="24"
                cost="162"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/old-walls-vineyard-bishopsteignton-devon/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89613/d36e6d6c_8f73_4295_8dbf_fb8b2248d516.jpg"
              />

              <offer
                key="offer8"
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
                key="offer9"
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
                key="offer10"
                title="Best Western Plus Stoke on Trent Moat House with Alton Towers"
                location="Stoke-on-Trent, Staffordshire"
                description="A Grade II-listed Staffordshire Georgian house with Alton Towers day passes"
                percentage=""
                cost="122"
                costDescription="Per person for 2 nights"
                url="https://www.secretescapes.com/best-western-plus-stoke-on-trent-moat-house-with-alton-towers-stoke-on-trent-staffordshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90338/d1f3a918_8c99_4a08_8589_2c41f9b296c3.jpg"
              />

            </div>

          </div>

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
