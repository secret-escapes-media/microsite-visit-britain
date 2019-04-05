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
                title="Thornbury Castle"
                location="The Cotswolds, Thornbury"
                description="Stay at England's only Tudor castle hotel by the Cotswolds"
                cost="104"
                costDescription="per person. Based on 2 people per room"
                percentage="48"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/40049/acf29e93_17ad_4867_acdf_69e298a7b61a.jpg"
                url="https://www.secretescapes.com/thornbury-castle-the-cotswolds-thornbury/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer2"
                title="Best Western Plus Stoke on Trent Moat House with Alton Towers"
                location="Stoke-on-Trent, Staffordshire"
                description="A Grade II-listed Staffordshire Georgian house with Alton Towers day passes"
                cost="122"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="0"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90338/d1f3a918_8c99_4a08_8589_2c41f9b296c3.jpg"
                url="https://www.secretescapes.com/best-western-plus-stoke-on-trent-moat-house-with-alton-towers-stoke-on-trent-staffordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer3"
                title="Country stay with walking experience in the New Forest"
                location="Best Western Chilworth Manor, Hampshire"
                description="Admire the landscapes of the New Forest from a manor house base"
                cost="133"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="0"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90046/ecf76b33_28b9_4e75_b153_bb42d07b7a42.jpg"
                url="https://www.secretescapes.com/country-getaway-and-walking-holiday-in-the-new-forest-best-western-chilworth-manor-hampshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer4"
                title="Royal Edinburgh Military Tattoo break with a modern hotel stay"
                location="Edinburgh, Scotland"
                description="An iconic Edinburgh stay with parades and bagpipes"
                cost="110"
                costDescription="per person. Based on 2 people per room"
                percentage="0"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90157/5d23c1b4_1d94_452a_9dfa_6320a3c435f1.jpg"
                url="https://www.secretescapes.com/royal-edinburgh-military-tattoo-break-with-a-modern-hotel-stay-edinburgh-scotland/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer5"
                title="Craft beer tour & staycation near historic York"
                location="The Parsonage Hotel & Spa, North Yorkshire"
                description="A craft beer tour and tasting with a hotel stay near historic York"
                cost="203"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="27"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90283/b1ce6f33_971b_40a2_962c_ef61e40b696e.jpg"
                url="https://www.secretescapes.com/a-craft-beer-tour-and-staycation-in-historic-york-the-parsonage-hotel-and-spa-york/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer6"
                title="Exclusive dinner with Harry Redknapp & central Manchester stay"
                location="Hotel Indigo Manchester - Victoria Station, Greater Manchester"
                description="Meet Harry Redknapp and enjoy metropolitan Manchester from a central hotel"
                cost="239"
                costDescription="per person. Based on 2 people for 1 nights"
                percentage="20"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90295/af002407_e753_4d03_b5c4_beb254caa221.jpg"
                url="https://www.secretescapes.com/exclusive-dinner-with-harry-redknapp-and-central-manchester-stay-hotel-indigo-manchester-victoria-station-greater-manchester/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer7"
                title="Suite stay near Liverpool with British Music Experience tickets"
                location="Suites Hotel & Spa Knowsley, Merseyside"
                description="A music-filled stay near Liverpool with British Music Experience tickets"
                cost="113"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="7"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90043/bf25e8fa_5bb5_4c50_a51c_95059aeb67e3.jpg"
                url="https://www.secretescapes.com/suite-stay-near-liverpool-with-british-music-experience-tickets-suites-hotel-and-spa-knowsley-merseyside/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer8"
                title="Inspiring Stratford-upon-Avon Shakespeare break"
                location="Ettington Chase Hotel, Warwickshire"
                description="Explore Shakespeare's country, plus an elegant manor house stay"
                cost="110"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="0"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/89986/da907598_ccdc_4789_902f_625f5741a941.jpg"
                url="https://www.secretescapes.com/stratford-upon-avon-shakespeare-sojourn-ettington-chase-hotel-warwickshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer9"
                title="Mesmerising Tutankhamun exhibition & a London hotel stay"
                location="Saatchi Gallery, Chelsea, & your choice of a London hotel"
                description="Gaze at King Tut's ancient tomb treasures and enjoy a London hotel stay"
                cost="69"
                costDescription="per person. Based on 2 people for 1 nights"
                percentage="0"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90147/e7efb5ed_79f2_43af_b169_c32d036062dd.jpg"
                url="https://www.secretescapes.com/mesmerising-tutankhamun-exhibition-and-a-hotel-stay-in-london-saatchi-gallery-chelsea-and-your-choice-of-a-london-hotel/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer10"
                title="RiverBeds Luxury Wee Lodges with Hot Tubs"
                location="Glencoe Valley, Scotland"
                description="A boutique-style lodge stay with hot tub in Scotland’s Glencoe Valley"
                cost="98"
                costDescription="per person. Based on 2 people per lodge"
                percentage="45"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/80622/e5399b51_4acd_4a55_abf1_f195ba0911b0.jpg"
                url="https://www.secretescapes.com/riverbeds-luxury-wee-lodges-glencoe-valley-scotland/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer11"
                title="Vintage luxury train to the Aintree Grand National & a London stay"
                location="The Rembrandt Hotel, London"
                description="Travel in style to the Aintree Grand National on the Northern Belle"
                cost="500"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="25"
                expires="2019/04/03"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90865/7c3bcea9_cedf_4784_9d44_4408a22801af.jpg"
                url="https://www.secretescapes.com/vintage-luxury-train-to-the-aintree-grand-national-and-a-london-stay-the-rembrandt-hotel-london/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer12"
                title="World of Wedgwood pottery experience & a Stoke-on-Trent hotel stay"
                location="Best Western Plus Stoke on Trent Moat House, Staffordshire"
                description="Admire pioneering English pottery at Stoke-on-Trent's World of Wedgwood"
                cost="138"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="25"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90278/ca1a4749_8561_4e73_b1af_51fb6bd73722.jpg"
                url="https://www.secretescapes.com/world-of-wedgwood-pottery-experience-and-stoke-on-trent-hotel-stay-best-western-plus-stoke-on-trent-moat-house-staffordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer13"
                title="Legoland Windsor break with a country hotel stay"
                location="The Bull Hotel, Gerrards Cross"
                description="Conquer dragons and explore the land of the Pharaohs at Legoland Windsor"
                cost="120"
                costDescription="per person. Based on 2 people for 2 nights"
                percentage="45"
                expires="2019/04/09"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90813/bf5e85d5_2817_4c6f_97a1_3b8ad3f7951e.jpg"
                url="https://www.secretescapes.com/legoland-windsor-break-with-a-country-hotel-stay-the-bull-hotel-gerrards-cross/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer14"
                title="Forss House"
                location="Thurso, Scottish Highlands"
                description="A charming hotel in the Scottish Highlands"
                cost="78"
                costDescription="per person. Based on 2 people per room"
                percentage="30"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/77674/4871bb5d_cb7d_431d_a8da_3a55155bae49.jpg"
                url="https://www.secretescapes.com/forss-house-thurso-scottish-highlands/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer15"
                title="Swinton Bivouac"
                location="Masham, North Yorkshire"
                description="Get back to nature in Yorkshire with a charming yurt stay"
                cost="24"
                costDescription="per person. Based on 5 people per yurt"
                percentage="34"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/50248/bed3a3ca_a49e_45c4_a0ce_1c0fc1042ad1.jpg"
                url="https://www.secretescapes.com/swinton-bivouac-masham-north-yorkshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer16"
                title="Aztec Hotel & Spa"
                location="Almondsbury, Bristol"
                description="Unwind in Bristol's outskirts at a relaxing spa hotel with prized dining"
                cost="42"
                costDescription="per person. Based on 2 people per room"
                percentage="52"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/84654/efa39df4_b928_42a9_9965_80926e3a2822.jpg"
                url="https://www.secretescapes.com/aztec-hotel-and-spa-almondsbury-bristol/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer17"
                title="The Mulberry Inn"
                location="Denbighshire, Wales"
                description="Hide away at a tranquil retreat in the Welsh countryside"
                cost="50"
                costDescription="per person. Based on 2 people per room"
                percentage="42"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/55900/39705d7f_7ede_4736_b66b_a9615d2ac91c.jpg"
                url="https://www.secretescapes.com/the-mulberry-inn-denbighshire-wales/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer18"
                title="Hotel Collingwood"
                location="Bournemouth, Dorset"
                description="Kick back at a cosy coastal hotel, minutes from Bournemouth's beaches"
                cost="50"
                costDescription="per person. Based on 2 people per room"
                percentage="38"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/86362/edc2532a_d0ba_4776_9e16_5afa29f7bc71.jpg"
                url="https://www.secretescapes.com/hotel-collingwood-bournemouth-dorset/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer19"
                title="The Eagle House Hotel"
                location="Launceston, Cornwall"
                description="Explore scenic Cornwall from a storied country Georgian townhouse"
                cost="62"
                costDescription="per person. Based on 2 people per room"
                percentage="41"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91142/d87dc973_eec1_43fc_8b81_e6b69e546907.jpg"
                url="https://www.secretescapes.com/the-eagle-house-hotel-launceston-cornwall/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer20"
                title="Exmoor White Horse Inn"
                location="Exmoor National Park, Somerset"
                description="Explore Exmoor National Park from a historic riverside inn"
                cost="54"
                costDescription="per person. Based on 2 people per room"
                percentage="43"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/41356/9cb333dc_a364_4afc_9b04_84544151db65.jpg"
                url="https://www.secretescapes.com/exmoor-white-horse-inn-exmoor-national-park-somerset/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer21"
                title="The New Inn"
                location="Great Limber, Lincolnshire"
                description="A Grade II-listed village pub turned boutique hotel on a Lincolnshire estate"
                cost="62"
                costDescription="per person. Based on 2 people per room"
                percentage="26"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/90557/3c30f37c_3ba6_4d1e_a8e3_f71d7de199a4.jpg"
                url="https://www.secretescapes.com/the-new-inn-great-limber-lincolnshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer22"
                title="The Old Swan"
                location="North Yorkshire, Harrogate"
                description="A classic Harrogate hotel with Victorian romance and literary history"
                cost="54"
                costDescription="per person. Based on 2 people per room"
                percentage="52"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/36436/3b3cd556_47fe_44fb_a404_4dbf5bd2a1db.jpg"
                url="https://www.secretescapes.com/the-old-swan-north-yorkshire-harrogate/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer23"
                title="Atlantic Hotel"
                location="Newquay, Cornwall"
                description="A breezy coastal boutique hotel a short stroll from Newquay"
                cost="74"
                costDescription="per person. Based on 2 people per room"
                percentage="47"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/65027/3372e9c4_4eb5_4076_a899_a8fe234bb0bb.jpg"
                url="https://www.secretescapes.com/atlantic-hotel-newquay-cornwall/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer24"
                title="Sudbury House"
                location="Faringdon, Oxfordshire"
                description="A country house hotel near the Cotswolds, with AA Rosette-awarded dining"
                cost="44"
                costDescription="per person. Based on 2 people per room"
                percentage="42"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/19036/29397a99_c351_47da_99dc_bcc3aba93d72.jpg"
                url="https://www.secretescapes.com/sudbury-house-faringdon-oxfordshire/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer25"
                title="The Belfry Hotel & Resort"
                location="Sutton Coldfield, West Midlands"
                description="An idyllic Midlands golf and spa resort set in 550 acres of countryside"
                cost="60"
                costDescription="per person. Based on 2 people per room"
                percentage="39"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/50696/7abec213_720b_4185_b4bd_fa4eb6f09b47.jpg"
                url="https://www.secretescapes.com/the-belfry-hotel-and-resort-sutton-coldfield-west-midlands/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
              />

              <offer
                key="offer26"
                title="Langstone Quays Resort"
                location="Hayling Island, Portsmouth"
                description="Modern comforts and award-winning dining on Hayling Island"
                cost="44"
                costDescription="per person. Based on 2 people per room"
                percentage="46"
                expires="2019/04/02"
                imageSrc="https://d1x3cbuht6sy0f.cloudfront.net/sales/91006/e868282c_c0c4_4be3_9994_bff49e803cde.jpg"
                url="https://www.secretescapes.com/langstone-quays-resort-hayling-island-portsmouth-uk-sale/sale?utm_source=SE_media&utm_medium=VisitBritain&utm_campaign=March2019"
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
