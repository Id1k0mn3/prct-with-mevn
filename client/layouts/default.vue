<template>
  <div>
    <headerComponent>
    </headerComponent>
    <Nuxt />
    <footerComponent>
    </footerComponent>
  </div>
</template>

<script>
import headerComponent from './headerComponent.vue';
import footerComponent from './footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  },

  mounted() {
    console.log('123123')
  }
}
</script>
