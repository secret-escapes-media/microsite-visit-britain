<template>

  <div class="competition">

    <div
      v-if="submissionSuccess"
      class="competition__success-message"
    >

      <h2>Thank you!</h2>
      <p>Thanks for entering our competition, and good luck!<br>We will be announcing the winners soon, so please check your email to see if you’ve been selected.</p>

    </div>
    <div
      v-else
      class="competition__content"
    >

      <p class="competition__step">
        Step {{slideIndex + 1}}
      </p>

      <div
        class="competition__slide"
        v-show="slideIndex === 0"
      >

        <h4 class="competition__question">Are you definitely <br> free on these dates?</h4>

        <div class="competition-dates">

          <span class="competition-dates__date">5 April 2019</span>
          <div class="competition-dates__dots">

            <span class="competition-dates__dot competition-dates__dot--highlight"></span>
            <span class="competition-dates__dot"></span>
            <span class="competition-dates__dot"></span>
            <span class="competition-dates__dot"></span>
            <span class="competition-dates__dot"></span>
            <span class="competition-dates__dot"></span>
            <span class="competition-dates__dot competition-dates__dot--highlight"></span>

          </div>
          <span class="competition-dates__date">7 April 2019</span>

        </div>

        <div class="competition__buttons">

          <div
            v-if="noMessageVisible"
            class="competition__no-message"
          >

            <p>We're sorry you're not available this weekend! You can still plan your own Microgap for another weekend <a href="/visitbritain/offers">here</a></p>

          </div>

          <button
            class="button button--transparent"
            @click="showNoMessage"
          >No</button>
          <button
            class="button button--transparent"
            @click="nextSlide"
          >Yes</button>
        </div>

      </div>

      <div
        class="competition__slide"
        v-show="slideIndex === 1"
      >

        <h4 class="competition__question">Your general information</h4>

        <div
          class="competition__form"
          @keydown="resetInvalidInputs"
          @keyup.enter.native="nextSlide"
        >

          <div class="competition__input competition__input--name">
            <input
              required
              type="text"
              placeholder="Name"
              v-model="name"
            >
          </div>
          <div class="competition__input competition__input--email">
            <input
              required
              type="email"
              placeholder="Email Address"
              v-model="email"
            >
          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>
          <button
            class="button button--yellow"
            @click="nextSlide"
          >Next</button>
        </div>

      </div>

      <!-- <div
        class="competition__slide"
        v-show="slideIndex === 2"
      >

        <h4 class="competition__question">How old are you?</h4>

        <div class="competition-age-counter">

          <div
            class="competition-age-counter__icon competition-age-counter__icon--minus"
            @click="ageDown"
          >
            <span></span>
          </div>

          <div class="competition-age-counter__age">
            <span>{{selecectedAge}}</span>
          </div>

          <div
            class="competition-age-counter__icon competition-age-counter__icon--plus"
            @click="ageUp"
          >
            <span></span>
            <span></span>
          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>
          <button
            class="button button--yellow"
            @click="nextSlide"
          >Next</button>
        </div>

      </div> -->

      <div
        class="competition__slide"
        v-show="slideIndex === 2"
      >

        <h4 class="competition__question">Where do you want to microgap?</h4>

        <div class="competition-experience-radio">

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': geographicLocation === 'england'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="england"
                v-model="geographicLocation"
              >

              <img src="~assets/images/competition-experience-england.jpg">

              <span class="competition-experience-radio__tile-title">England</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': geographicLocation === 'scotland'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="scotland"
                v-model="geographicLocation"
              >

              <img src="~assets/images/competition-experience-scotland.jpg">

              <span class="competition-experience-radio__tile-title">Scotland</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': geographicLocation === 'wales'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="wales"
                v-model="geographicLocation"
              >

              <img src="~assets/images/competition-experience-wales.jpg">

              <span class="competition-experience-radio__tile-title">Wales</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': geographicLocation === 'northern-ireland'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="northern-ireland"
                required
                v-model="geographicLocation"
              >

              <img src="~assets/images/competition-experience-northern-ireland.jpg">

              <span class="competition-experience-radio__tile-title">Northern Ireland</span>

            </label>

          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>
          <button
            class="button button--yellow"
            @click="nextSlide"
          >Next</button>
        </div>

      </div>

      <div
        class="competition__slide"
        v-show="slideIndex === 3"
      >

        <h4 class="competition__question">For an increadible weekend experience are you most likely to go to...</h4>

        <div class="competition-experience-radio">

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperienceLocation === 'city'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="city"
                v-model="selectedExperienceLocation"
              >

              <img src="~assets/images/competition-experience-city.jpg">

              <span class="competition-experience-radio__tile-title">City</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperienceLocation === 'coast'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="coast"
                v-model="selectedExperienceLocation"
              >

              <img src="~assets/images/competition-experience-coast.jpg">

              <span class="competition-experience-radio__tile-title">Coast</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperienceLocation === 'country'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="country"
                v-model="selectedExperienceLocation"
              >

              <img src="~assets/images/competition-experience-country.jpg">

              <span class="competition-experience-radio__tile-title">Country</span>

            </label>

          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>
          <button
            class="button button--yellow"
            @click="nextSlide"
          >Next</button>
        </div>

      </div>

      <div
        class="competition__slide"
        v-show="slideIndex === 4"
      >

        <h4 class="competition__question">What type of experience would most appeal to you</h4>

        <div class="competition-experience-radio competition-experience-radio--pills">

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'everything'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="everything"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-everything.jpg">

              <span class="competition-experience-radio__tile-title">Everything</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'adventure'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="adventure"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-adventure.jpg">

              <span class="competition-experience-radio__tile-title">Adventure</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'culture'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="culture"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-culture.jpg">

              <span class="competition-experience-radio__tile-title">Culture</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'local-flavours'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="local-flavours"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-local-flavours.jpg">

              <span class="competition-experience-radio__tile-title">Local flavours</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'wellness'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="wellness"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-wellness.jpg">

              <span class="competition-experience-radio__tile-title">Wellness</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'volunteering'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="volunteering"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-volunteering.jpg">

              <span class="competition-experience-radio__tile-title">Volunteering</span>

            </label>

          </div>

          <div
            class="competition-experience-radio__tile competition-experience-radio__tile"
            :class="{'competition-experience-radio__tile--selected': selectedExperience === 'new-skills'}"
          >

            <label>
              <input
                type="radio"
                name="experience"
                value="new-skills"
                v-model="selectedExperience"
              >

              <img src="~assets/images/competition-experience-new-skills.jpg">

              <span class="competition-experience-radio__tile-title">New skills</span>

            </label>

          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>
          <button
            class="button button--yellow"
            @click="nextSlide"
          >Next</button>
        </div>

      </div>

      <div
        class="competition__slide"
        v-show="slideIndex === 5"
      >

        <h4 class="competition__question">GDPR consent</h4>

        <div
          class="competition__form"
          @change="resetInvalidInputs"
        >

          <div class="competition__gdpr">

            <label id="visitBritainOptIn">
              I would like to hear more from Visit Britain
            </label>

            <br>

            <label for="hearMoreYes">
              <input
                required
                data-required-either="true"
                type="checkbox"
                v-model="hearMoreYes"
                value="Yes"
                for="hearMoreYes"
                name="hearMorYes"
              >Yes
            </label>
            <br>

            <label for="hearMoreNo">
              <input
                required
                data-required-either="true"
                type="checkbox"
                v-model="hearMoreNo"
                value="No"
                for="hearMoreNo"
                name="hearMoreNo"
              >No
            </label>
            <br>

            <br>

            <label>
              <input
                required
                type="checkbox"
                v-model="termsAndConditions"
                name="termsAndConditions"
              >
              I agree to Terms and Conditions
            </label>
            <br>
            <br>

            <label>
              <input
                required
                type="checkbox"
                v-model="consentAge"
                name="consentAge"
              >
              I am over the age of 21
            </label>

          </div>

        </div>

        <div class="competition__buttons">
          <button
            class="button button--yellow"
            @click="previousSlide"
          >Previous</button>

          <button
            class="button button--yellow"
            @click="submitForm"
            :disabled="submittting"
          >Submit</button>
        </div>

      </div>

      <competition-progress :slideIndex="slideIndex" />

    </div>
  </div>
</template>

<script>
import CompetitionProgress from "@/components/CompetitionProgress";

export default {
  name: "Competition",
  props: [],
  data() {
    return {
      slideIndex: 0,
      // selecectedAge: 28,
      selectedExperienceLocation: "city",
      selectedExperience: "everything",
      geographicLocation: "england",
      name: "",
      email: "",
      submissionSuccess: false,
      submittting: false,
      noMessageVisible: false,
      hearMoreYes: null,
      hearMoreNo: null,
      consentAge: null,
      termsAndConditions: null
    };
  },
  components: {
    CompetitionProgress
  },
  watch: {
    hearMoreNo(newVal) {
      if (newVal) {
        this.hearMoreYes = false;
      }
    },
    hearMoreYes(newVal) {
      if (newVal) {
        this.hearMoreNo = false;
      }
    }
  },
  methods: {
    // ageUp() {
    //   this.selecectedAge++;
    // },
    // ageDown() {
    //   if (this.selecectedAge) {
    //     this.selecectedAge--;
    //   }
    // },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    valideSlide() {
      let slides = document.getElementsByClassName("competition__slide");

      let currentSlide = slides[this.slideIndex];

      let requiredFields = currentSlide.querySelectorAll("[required]");

      let validated = true;

      //Itterate through any required fields if we have them
      if (requiredFields) {
        for (let x in requiredFields) {
          let field = requiredFields[x];

          //only validate the actual fields
          if (typeof field === "object") {
            //validate text
            if (field.type === "text" && !field.value.length) {
              validated = false;

              field.classList.add("invalid");
            }

            //validate email
            if (
              field.type === "email" &&
              (!field.value.length || !this.validateEmail(field.value))
            ) {
              validated = false;

              field.classList.add("invalid");
            }

            if (field.type === "checkbox") {
              //validate checkbox with either option required
              if (field.getAttribute("data-required-either")) {
                let checkboxes = document.querySelectorAll(
                  "[data-required-either]"
                );

                let eitherCheckboxChecked = false;

                [].forEach.call(checkboxes, function(checkbox) {
                  if (checkbox.checked) {
                    eitherCheckboxChecked = true;
                  }
                });

                if (!eitherCheckboxChecked) {
                  document
                    .getElementById("visitBritainOptIn")
                    .classList.add("invalid");
                  validated = false;
                }
              } else if (!field.checked) {
                validated = false;

                field.parentElement.classList.add("invalid");
              }
            }
          }
        }
      }

      return validated;
    },
    resetInvalidInputs() {
      let invalids = document.querySelectorAll(".invalid");

      [].forEach.call(invalids, function(el) {
        el.classList.remove("invalid");
      });
    },
    nextSlide() {
      this.noMessageVisible = false;

      if (this.valideSlide()) {
        this.slideIndex++;
      }
    },
    previousSlide() {
      if (this.slideIndex > 0) {
        this.slideIndex--;
      }
    },
    showNoMessage() {
      this.noMessageVisible = true;
    },
    submitForm() {
      if (this.valideSlide()) {
        this.submittting = true;

        let hearMore = "No";

        if (this.hearMoreYes) {
          hearMore = "Yes";
        } else if (this.hearMoreNo) {
          hearMore = "No";
        }

        let postObject = {
          name: this.name,
          email: this.email,
          hearMore: hearMore,
          // age: this.selecectedAge.toString(),
          experience: this.selectedExperience,
          experienceLocation: this.selectedExperienceLocation,
          geographicLocation: this.geographicLocation
        };

        this.$axios
          .$post(
            "https://myesyx0kr1.execute-api.eu-west-1.amazonaws.com/test/writeTheWrongSubmitForm",
            postObject
          )
          .then(response => {
            console.log(response);

            this.submissionSuccess = true;
            this.submittting = false;
          })
          .catch(error => {
            console.log(error);
            this.submittting = false;
          });
      }
    }
  },
  mounted() {}
};
</script>
