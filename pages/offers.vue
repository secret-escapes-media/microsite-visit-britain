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

          <div class="row row--wide">
            <h2 class="offers__title">Offers</h2>
          </div>

          <div class="row row--wide">

            <div class="offers__container">

              <offer
                key="offer1"
                title="No Man's Fort"
                location="Portsmouth, Hampshire"
                description="Travel by boat for a once-in-a-lifetime stay on a historic Solent fort, with boat transfers, breakfast, a three-course dinner and guided tour included"
                percentage="36"
                cost="174"
                url="https://www.secretescapes.com/no-mans-fort-portsmouth-hampshire/sale"
                imageSrc="/offers/no-mans-fort.jpg"
              />

              <offer
                key="offer2"
                title="Thornbury Castle"
                location="The Cotswolds, Thornbury"
                description="England's only Tudor castle hotel, with a spectacular Cotswolds setting, award-winning fine dining and historic landscaped grounds - breakfast and dinner included"
                percentage="48"
                cost="104"
                url="https://www.secretescapes.com/thornbury-castle-the-cotswolds-thornbury/sale"
                imageSrc="/offers/thornbury-castle.jpg"
              />

              <offer
                key="offer3"
                title="Elegant West London getaway with Harry Potter tour tickets"
                location="Roseate House London, Hyde Park"
                description="Stay at an elegant boutique west London hotel set just moments from Hyde Park - includes breakfast, Harry Potter tour tickets and an Oxford coach trip"
                percentage=""
                cost="155"
                url="hhttps://www.secretescapes.com/elegant-west-london-getaway-with-harry-potter-tour-tickets-roseate-house-london-london/sale"
                imageSrc="/offers/harry-potter.jpg"
              />

              <offer
                key="offer4"
                title="Gourmet dining bus tour with a chic West London stay"
                location="The Rembrandt, Knightsbridge"
                description="A classic Edwardian hotel combining history and contemporary charm in the heart of Knightsbridge, with breakfast and London's first gastronomic double decker bus tour"
                percentage="27"
                cost="165"
                url="https://www.secretescapes.com/the-rembrandt-knightsbridge-london-uk-sale/sale"
                imageSrc="/offers/west-london.jpg"
              />

              <offer
                key="offer5"
                title="The Big Cat Sanctuary"
                location="Ashford, Kent"
                description="Hang out with some of the world's most endangered big cats from your luxury lodge base for up to two or four adults - includes a feeding experience, dinner and more"
                percentage="21"
                cost="338"
                url="https://www.secretescapes.com/the-big-cat-sanctuary-ashford-kent/sale"
                imageSrc="/offers/big-cat-sanctuary.jpg"
              />

              <offer
                key="offer6"
                title="Yachting on the Solent with a choice of two unique stays"
                location="Sail between Lymington & the Isle of Wight Hampshire"
                description="Travel by boat for a once-in-a-lifetime stay on a historic Solent fort, with boat transfers, breakfast, a three-course dinner and guided tour included"
                percentage="44"
                cost="124"
                url="https://www.secretescapes.com/yachting-on-the-solent-with-a-choice-of-two-unique-stays-sail-between-lymington-and-the-isle-of-wight/sale"
                imageSrc="/offers/yacht.jpg"
              />

              <offer
                key="offer7"
                title="Belmond British Pullman train experience with 5* London stay"
                location="Draycott Hotel, Chelsea"
                description="Journey aboard the iconic Belmond British Pullman train with a fabulous brunch, plus a boutique London stay near Sloane Square - includes breakfast, champagne and more"
                cost="310"
                url="https://www.secretescapes.com/belmond-british-pullman-train-experience-with-5-star-london-stay-draycott-hotel-chelsea/sale"
                imageSrc="/offers/pullman.jpg"
              />

              <offer
                key="offer8"
                title="Champneys Henlow"
                location="Henlow, Bedfordshire"
                description="A soul-soothing stay at a stately Champneys spa resort in Bedfordshire – includes all meals, plus a thalassotherapy pool treatment and unlimited use of the leisure facilities"
                cost="114"
                percentage="34"
                url="https://www.secretescapes.com/champneys-henlow-henlow-bedfordshire/sale"
                imageSrc="/offers/champneys-henlow.jpg"
              />

              <offer
                key="offer9"
                title="Old Walls Vineyard"
                location="Bishopsteignton, Devon"
                description="Escape to a rural bolthole surrounded by rolling hills and sumptuous vines on the Devon coast, including breakfast, a cream tea, wine making and tasting experience and more"
                cost="162"
                percentage="24"
                url="https://www.secretescapes.com/old-walls-vineyard-bishopsteignton-devon/sale"
                imageSrc="/offers/devon.jpg"
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
