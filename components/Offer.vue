<template>
  <div class="offer">

    <a
      :href="url"
      class="offer__link"
      target="_blank"
    >

      <span class="button button--orange button--offer">View offer</span>

    </a>

    <div class="offer__image">

      <img
        :src="imageSrc"
        :alt="title"
      >

    </div>

    <div class="offer__text-container">

      <h4 class="offer__title">{{title}}</h4>

      <h5 class="offer__location"><img
          src="/visitbritain/offer-pin.jpg"
          alt="Offer pin"
          class="offer__location-icon"
        >{{location}}</h5>

      <div class="offer__description">
        <p>{{description}}</p>
      </div>

      <div class="offer__text-footer">

        <div
          class="offer__percentage"
          v-if="percentage"
        >
          Save up to <span class="offer__percentage-icon">{{percentage}}%</span>
        </div>

        <div class="offer__details">
          From<span class="offer__cost">£{{cost}}</span><br>
          <small>per person based on 2 people per room</small>
        </div>

        <img
          class="offer__link-icon"
          src="/visitbritain/offer-arrow.jpg"
          alt="Offer pin"
        >

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Offer",
  props: [
    "title",
    "location",
    "percentage",
    "cost",
    "url",
    "description",
    "imageSrc"
  ],
  data() {
    return {
      activeImage: "city"
    };
  },
  methods: {
    changeActiveCity(newActiveCity) {
      this.activeImage = newActiveCity;
    }
  }
};
</script>
