<!-- eslint-disable import/no-extraneous-dependencies -->
<template>
  <RouterView />
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import AOS from 'aos';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
    AOS.init({
      duration: 1500,
      once: true,
    });
  },
};
</script>

<style lang="scss">

</style>
