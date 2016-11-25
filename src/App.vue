<template>
  <div id="app">
    <Navbar></Navbar>
    <Slider></Slider>
  	<Footerbar></Footerbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Footerbar from './components/Foot'

export default {
  name: 'app',
  components: {
    Navbar,Slider,Footerbar
  }
}
</script>

