<template>
  <main-layout>
    <slider></slider>
    <block></block>
    <slogan></slogan>
    <achieve></achieve>
    <show-image></show-image>
    <link-block></link-block>
    <connect></connect>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

import Slider from './Slider'
import Block from './Block'
import ShowImage from './ShowImage'
import Slogan from './Slogan'
import Achieve from './Achieve'
import LinkBlock from './Link'
import Connect from './Connect'

export default {
  name: 'app',
  components: {
    MainLayout,Slider,Block,ShowImage,Slogan,Achieve,LinkBlock,Connect
  }
}
</script>

