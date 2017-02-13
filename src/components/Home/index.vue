<template>
  <div>
    <slider></slider>
    <slogan></slogan> 
    <connect></connect>
    <link-block></link-block>
  </div>
</template>

<script>

import Slider from './Slider'
import Slogan from './Slogan'
import LinkBlock from './Link'
import Connect from './Connect'

export default {
  name: 'app',
  components: {
    Slider,Slogan,LinkBlock,Connect
  }
}
</script>