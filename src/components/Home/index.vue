<template>
  <main-layout>
    <slider></slider>
    <block></block>
    <slogan></slogan>
    <achieve></achieve>
    <show-image></show-image>
    <link></link>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

import Slider from './Slider'
import Block from './Block'
import ShowImage from './ShowImage'
import Slogan from './Slogan'
import Achieve from './Achieve'
import Link from './Link'

export default {
  name: 'app',
  components: {
    MainLayout,Slider,Block,ShowImage,Slogan,Achieve,Link
  }
}
</script>

