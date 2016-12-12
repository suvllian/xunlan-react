<template>
  <div>
    <slider></slider>
    <block></block>
    <slogan></slogan>
    <achieve></achieve>
    <show-image></show-image>
    <link-block></link-block>
    <connect></connect>
  </div>
</template>

<script>

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
    Slider,Block,ShowImage,Slogan,Achieve,LinkBlock,Connect
  }
}
</script>