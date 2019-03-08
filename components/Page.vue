<template>
  <div
    class="page"
    :class="'page--'+pageName"
  >

  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["pageName"]
};
</script>
