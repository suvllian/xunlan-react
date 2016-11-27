<template>
  <div id="app">
    <Navbar></Navbar>
    <Slider></Slider>
    <Department></Department>
    <Achieve></Achieve>
    <ShowImage></ShowImage>
    <Slogan></Slogan>
  	<Footerbar></Footerbar>
  </div>
</template>

<script>
import Navbar from './components/Home/Navbar'
import Slider from './components/Home/Slider'
import Department from './components/Home/Department'
import ShowImage from './components/Home/ShowImage'
import Slogan from './components/Home/Slogan'
import Achieve from './components/Home/Achieve'
import Footerbar from './components/Home/Foot'

export default {
  name: 'app',
  components: {
    Navbar,Slider,Department,ShowImage,Slogan,Achieve,Footerbar
  }
}
</script>

