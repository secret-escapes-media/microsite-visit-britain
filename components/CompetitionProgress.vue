<template>

  <div class="competition-progress">

    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 0}"
    ></span>
    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 1}"
    ></span>
    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 2}"
    ></span>
    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 3}"
    ></span>
    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 4}"
    ></span>
    <span
      class="competition-progress__dot"
      :class="{'competition-progress__dot--active': slideIndex === 5}"
    ></span>

  </div>
</template>

<script>
export default {
  name: "CompetitionProgress",
  props: ["slideIndex"]
};
</script>
