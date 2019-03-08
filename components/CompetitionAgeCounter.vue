<template>

  <div class="competition-age-counter">

    <div
      class="competition-age-counter__icon competition-age-counter__icon--minus"
      @click="ageDown"
    >
      <span></span>
    </div>

    <div class="competition-age-counter__age">
      <span>{{age}}</span>
    </div>

    <div
      class="competition-age-counter__icon competition-age-counter__icon--plus"
      @click="ageUp"
    >
      <span></span>
      <span></span>
    </div>

  </div>

</template>

<script>
export default {
  name: "CompetitionAgeCounter",
  props: ["slideIndex"],
  data() {
    return {
      age: 28
    };
  },
  methods: {
    ageUp() {
      this.age++;
    },
    ageDown() {
      if (this.age) {
        this.age--;
      }
    }
  }
};
</script>
