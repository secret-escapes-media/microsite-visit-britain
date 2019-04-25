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
                key="1"
                title="Suite stay near Liverpool with British Music Experience tickets"
                location="Suites Hotel & Spa Knowsley, Merseyside"
                description="A music-filled stay near Liverpool with British Music Experience tickets"
                cost="113"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="7"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90043/0919ce93_6546_4e31_a3fe_58bd418386b1.jpg"
                url="https://www.secretescapes.com/suite-stay-near-liverpool-with-british-music-experience-tickets-suites-hotel-and-spa-knowsley-merseyside/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="2"
                title="Ultimate Beatles Liverpool break with return travel from London"
                location="Hard Days Night Hotel, Liverpool"
                description="Celebrate The Beatles in Liverpool on the ultimate break for fans"
                cost="219"
                costDescription="per person. Based on 2 people for 1 nights"
                percentage="12"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91901/ef954b17_cad7_4652_962a_dbd193571498.jpg"
                url="https://www.secretescapes.com/ultimate-beatles-liverpool-break-hard-days-night-hotel-liverpool/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="3"
                title="Guided foodie tour of Borough Market & a gin distillery plus stay at a brand-new London hotel"
                location="Vintry & Mercer, The City"
                description="Stay at a five-star central London boutique with roof terrace near Borough Market"
                cost="116"
                costDescription="per person. Based on 2 people for 1 nights"
                percentage="22"
                expires="2019/04/30"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/84649/b7fa84b2_c8d6_4bd1_9649_507d660cd29c.jpg"
                url="https://www.secretescapes.com/brand-new-london-hotel-stay-with-borough-market-and-gin-distillery-tours-vintry-and-mercer-the-city/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="4"
                title="Gourmet London lunch bus tour & sleek apartment stay"
                location="O Hyde Park, Kensington"
                description="An unforgettable gourmet bus tour and hotel stay near London’s Hyde Park"
                cost="130"
                costDescription="per person. Based on 2 people for 1 nights"
                percentage="37"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91445/26458fd6_cf90_4f32_b8c3_0028cc38be78.jpg"
                url="https://www.secretescapes.com/gourmet-london-lunch-tour-and-sleek-apartment-stay-o-hyde-park-kensington/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="5"
                title="Laid-back Portsmouth stay with an award-winning restaurant"
                location="Langstone Quays Resort, Hayling Island"
                description="Modern comforts and award-winning dining on Hayling Island"
                cost="40"
                costDescription="per person. Based on 2 people per room"
                percentage="51"
                expires="2019/04/11"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91006/57d7e0e1_d27c_4d00_83ad_13e1b147cae0.jpg"
                url="https://www.secretescapes.com/langstone-quays-resort-hayling-island-portsmouth-uk-sale/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="6"
                title="Yorkshire staycation with foodie tour and charming hotel"
                location="Ascend Plus Cedar Court Harrogate Hotel, Yorkshire"
                description="Escape to a central Harrogate hotel and eat your way around town on a tasty tour"
                cost="158"
                costDescription="per person. Based on 2 people for 2 nights"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90029/752e05be_a8dd_414a_ab88_71ef81ea6f89.jpg"
                url="https://www.secretescapes.com/yorkshire-staycation-with-foodie-tour-and-charming-hotel-ascend-plus-cedar-court-harrogate-hotel-yorkshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="7"
                title="Romantic Cotswolds castle stay with award-winning fine dining"
                location="Thornbury Castle, Thornbury"
                description="Stay at England's only Tudor castle hotel by the Cotswolds"
                cost="104"
                costDescription="per person. Based on 2 people per room"
                percentage="48"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/40049/acf29e93_17ad_4867_acdf_69e298a7b61a.jpg"
                url="https://www.secretescapes.com/thornbury-castle-the-cotswolds-thornbury/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="8"
                title="Best Western Plus Stoke on Trent Moat House with Alton Towers"
                location="Stoke-on-Trent, Staffordshire"
                description="A Grade II-listed Staffordshire Georgian house with Alton Towers day passes"
                cost="122"
                costDescription="per person. Based on 2 people for 2 nights"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90338/4d25422c_d5f2_4cce_83ac_fa6226da1cff.jpg"
                url="https://www.secretescapes.com/best-western-plus-stoke-on-trent-moat-house-with-alton-towers-stoke-on-trent-staffordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="9"
                title="Royal Edinburgh Military Tattoo break with a modern hotel stay"
                location="Edinburgh, Scotland"
                description="An iconic Edinburgh stay with parades and bagpipes"
                cost="110"
                costDescription="per person. Based on 2 people per room"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90157/1bbad095_d45a_4100_8406_c9a983234e78.jpg"
                url="https://www.secretescapes.com/royal-edinburgh-military-tattoo-break-with-a-modern-hotel-stay-edinburgh-scotland/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="10"
                title="Suite stay near Liverpool with British Music Experience tickets"
                location="Suites Hotel & Spa Knowsley, Merseyside"
                description="A music-filled stay near Liverpool with British Music Experience tickets"
                cost="113"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="7"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90043/0fbcf5c5_f6e2_4778_b2f7_3f402f03b504.jpg"
                url="https://www.secretescapes.com/suite-stay-near-liverpool-with-british-music-experience-tickets-suites-hotel-and-spa-knowsley-merseyside/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="11"
                title="Inspiring Stratford-upon-Avon Shakespeare break"
                location="Ettington Chase Hotel, Warwickshire"
                description="Explore Shakespeare's country, plus an elegant manor house stay"
                cost="110"
                costDescription="per person. Based on 2 people for 2 nights"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89986/da907598_ccdc_4789_902f_625f5741a941.jpg"
                url="https://www.secretescapes.com/stratford-upon-avon-shakespeare-sojourn-ettington-chase-hotel-warwickshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="12"
                title="Mesmerising Tutankhamun exhibition & a London hotel stay"
                location="Saatchi Gallery, Chelsea, & your choice of a London hotel"
                description="Gaze at King Tut's ancient tomb treasures and enjoy a London hotel stay"
                cost="69"
                costDescription="per person. Based on 2 people for 1 nights"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90147/e7efb5ed_79f2_43af_b169_c32d036062dd.jpg"
                url="https://www.secretescapes.com/mesmerising-tutankhamun-exhibition-and-a-hotel-stay-in-london-saatchi-gallery-chelsea-and-your-choice-of-a-london-hotel/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="13"
                title="RiverBeds Luxury Wee Lodges with Hot Tubs"
                location="Glencoe Valley, Scotland"
                description="A boutique-style lodge stay with hot tub in Scotland’s Glencoe Valley"
                cost="98"
                costDescription="per person. Based on 2 people per lodge"
                percentage="45"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/80622/e5399b51_4acd_4a55_abf1_f195ba0911b0.jpg"
                url="https://www.secretescapes.com/riverbeds-luxury-wee-lodges-glencoe-valley-scotland/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="14"
                title="World of Wedgwood pottery experience & a Stoke-on-Trent hotel stay"
                location="Best Western Plus Stoke on Trent Moat House, Staffordshire"
                description="Admire pioneering English pottery at Stoke-on-Trent's World of Wedgwood"
                cost="138"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="25"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90278/bf6d814e_8477_45d8_8f33_b2db98041023.jpg"
                url="https://www.secretescapes.com/world-of-wedgwood-pottery-experience-and-stoke-on-trent-hotel-stay-best-western-plus-stoke-on-trent-moat-house-staffordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="15"
                title="Forss House"
                location="Thurso, Scottish Highlands"
                description="A charming hotel in the Scottish Highlands"
                cost="78"
                costDescription="per person. Based on 2 people per room"
                percentage="30"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/77674/0cd16993_7231_4afa_8ca6_96a4f672ea39.jpg"
                url="https://www.secretescapes.com/forss-house-thurso-scottish-highlands/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="16"
                title="Aztec Hotel & Spa"
                location="Almondsbury, Bristol"
                description="Unwind in Bristol's outskirts at a relaxing spa hotel with prized dining"
                cost="42"
                costDescription="per person. Based on 2 people per room"
                percentage="52"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/79630/c5d55ca2_60db_48c2_87fb_38cf64762aa2.jpg"
                url="https://www.secretescapes.com/aztec-hotel-and-spa-almondsbury-bristol/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="17"
                title="Boutique Cornwall stay with award-winning AA Rosette dining"
                location="Atlantic Hotel, Newquay"
                description="A breezy coastal boutique hotel a short stroll from Newquay"
                cost="74"
                costDescription="per person. Based on 2 people per room"
                percentage="47"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90141/20325a4e_a486_4cd4_a2c3_4c9957a10ae9.jpg"
                url="https://www.secretescapes.com/atlantic-hotel-newquay-cornwall/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="18"
                title="Refined Cotswolds stay with an acclaimed restaurant"
                location="Sudbury House, Oxfordshire"
                description="A country house hotel near the Cotswolds, with AA Rosette-awarded dining"
                cost="44"
                costDescription="per person. Based on 2 people per room"
                percentage="42"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90722/f2eb8589_7740_4f68_9e25_4a4e7769fb15.jpg"
                url="https://www.secretescapes.com/sudbury-house-faringdon-oxfordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="19"
                title="The Belfry Hotel & Resort"
                location="Sutton Coldfield, West Midlands"
                description="An idyllic Midlands golf and spa resort set in 550 acres of countryside"
                cost="60"
                costDescription="per person. Based on 2 people per room"
                percentage="39"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/50696/40cba0f7_f0e9_436a_b50e_0c80aa67e491.jpg"
                url="https://www.secretescapes.com/the-belfry-hotel-and-resort-sutton-coldfield-west-midlands/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="20"
                title="Worcestershire Victorian country house with foodie extras"
                location="Brockencote Hall, Wyre Forest"
                description="Retreat to a romantic stay at a lovely country manor house hotel"
                cost="80"
                costDescription="per person. Based on 2 people per room"
                percentage="46"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90914/376777b6_5237_43ae_bb3d_07884d0800e1.jpg"
                url="https://www.secretescapes.com/brockencote-hall-wyre-forest-worcestershire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="21"
                title="Qbic Hotel London City"
                location="Aldgate, London"
                description="Explore East London's artsy side and famous markets from chic digs"
                cost="33"
                costDescription="per person. Based on 2 people per room"
                percentage="34"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91547/761c3841_b2a6_4f3c_9500_a59b3425b3ad.jpg"
                url="https://www.secretescapes.com/qbic-hotel-london-city-aldgate-london/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="22"
                title="The Townhouse Chester"
                location="Chester, Cheshire"
                description="Unwind in historic Chester at a quirky hotel in the centre of town"
                cost="54"
                costDescription="per person. Based on 2 people per room"
                percentage="44"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/72852/f298c46b_10dc_4aad_b00b_027be84f3922.jpg"
                url="https://www.secretescapes.com/the-townhouse-chester-chester-cheshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="23"
                title="Blissful North Wales spa stay with an award-winning restaurant"
                location="The Quay Hotel & Spa, Wales"
                description="A stylish North Wales spa hotel with an acclaimed restaurant"
                cost="50"
                costDescription="per person. Based on 2 people per room"
                percentage="43"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89811/a0e505cd_e075_4346_a568_63ef7f2bb207.jpg"
                url="https://www.secretescapes.com/the-quay-hotel-and-spa-conwy-wales/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="24"
                title="Knoll House"
                location="Studland Bay, Dorset"
                description="Stay steps from Dorset’s Studland Bay at a coastal hotel"
                cost="74"
                costDescription="per person. Based on 2 people per room"
                percentage="50"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91238/19260390_3cb0_438e_9b31_60e6907ce635.jpg"
                url="https://www.secretescapes.com/knoll-house-studland-bay-dorset/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
              />

              <offer
                key="25"
                title="Relaxing Richmond stay with dining perks"
                location="Richmond Hill Hotel, Surrey"
                description="An elegant Richmond stay near the impressive Kew Gardens"
                cost="80"
                costDescription="per person. Based on 2 people per room"
                percentage="38"
                expires="2019/04/16"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91042/5bbc03be_91bb_4d87_90ee_9075fcb02600.jpg"
                url="https://www.secretescapes.com/richmond-hill-hotel-richmond-surrey-uk-sale/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=April2019"
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
