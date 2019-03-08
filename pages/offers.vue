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
                cost="349"
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
                url="https://www.secretescapes.com/thornbury-castle-the-cotswolds-thornbury/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/40049/adfbde58_1b9e_4e27_8a8e_725974c84c07_nws.jpg"
              />

              <offer
                key="offer3"
                title="Elegant West London getaway with Harry Potter tour tickets"
                location="Roseate House London, Hyde Park"
                description="Stay at an elegant boutique west London hotel set just moments from Hyde Park - includes breakfast, Harry Potter tour tickets and an Oxford coach trip"
                percentage=""
                cost="155"
                url="https://www.secretescapes.com/elegant-west-london-getaway-with-harry-potter-tour-tickets-roseate-house-london-london/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89418/54a4c7b5_ee62_48d2_9dd4_de74e121723d_nws.jpg"
              />

              <offer
                key="offer4"
                title="Gourmet dining bus tour with a chic West London stay"
                location="The Rembrandt, Knightsbridge"
                description="A classic Edwardian hotel combining history and contemporary charm in the heart of Knightsbridge, with breakfast and London's first gastronomic double decker bus tour"
                percentage="27"
                cost="165"
                url="https://www.secretescapes.com/the-rembrandt-knightsbridge-london-uk-sale/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89316/9db4284f_c78c_498d_9d1b_f32e270d01cb_nws.jpg"
              />

              <offer
                key="offer5"
                title="The Big Cat Sanctuary"
                location="Ashford, Kent"
                description="Hang out with some of the world's most endangered big cats from your luxury lodge base for up to two or four adults - includes a feeding experience, dinner and more"
                percentage="21"
                cost="338"
                url="https://www.secretescapes.com/the-big-cat-sanctuary-ashford-kent/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/69106/49b7181d_5d3d_4305_b1da_99295e7e39b2_nws.jpg"
              />

              <offer
                key="offer6"
                title="Yachting on the Solent with a choice of two unique stays"
                location="Sail between Lymington & the Isle of Wight Hampshire"
                description="Travel by boat for a once-in-a-lifetime stay on a historic Solent fort, with boat transfers, breakfast, a three-course dinner and guided tour included"
                percentage="44"
                cost="124"
                url="https://www.secretescapes.com/yachting-on-the-solent-with-a-choice-of-two-unique-stays-sail-between-lymington-and-the-isle-of-wight/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/67658/e52594ad_9c91_45f4_bcb9_8b16ea594406_nws.jpg"
              />

              <offer
                key="offer7"
                title="Champneys Henlow"
                location="Henlow, Bedfordshire"
                description="A soul-soothing stay at a stately Champneys spa resort in Bedfordshire – includes all meals, plus a thalassotherapy pool treatment and unlimited use of the leisure facilities"
                cost="114"
                percentage="34"
                url="https://www.secretescapes.com/champneys-henlow-henlow-bedfordshire/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/81648/0c717cb9_8520_4b20_94b3_30e2d22d11c7_nws.jpg"
              />

              <offer
                key="offer8"
                title="Old Walls Vineyard"
                location="Bishopsteignton, Devon"
                description="Escape to a rural bolthole surrounded by rolling hills and sumptuous vines on the Devon coast, including breakfast, a cream tea, wine making and tasting experience and more"
                cost="162"
                percentage="24"
                url="https://www.secretescapes.com/old-walls-vineyard-bishopsteignton-devon/sale"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89613/d36e6d6c_8f73_4295_8dbf_fb8b2248d516_nws.jpg"
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
