<template>
  <Navigation></Navigation>
  <router-view/>
</template>

<script>
import Navigation from "@/components/UserInterface/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
</style>
