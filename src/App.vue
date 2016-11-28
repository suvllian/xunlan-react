<template>
  <div id="app">
    <Navbar></Navbar>
    <Slider></Slider>
    <Block></Block>
    <Slogan></Slogan>
    <Achieve></Achieve>
    <ShowImage></ShowImage>
    <Link></Link>
  	<Footerbar></Footerbar>
  </div>
</template>

<script>
import Navbar from './components/Home/Navbar'
import Slider from './components/Home/Slider'
import Block from './components/Home/Block'
import ShowImage from './components/Home/ShowImage'
import Slogan from './components/Home/Slogan'
import Achieve from './components/Home/Achieve'
import Link from './components/Home/Link'
import Footerbar from './components/Home/Foot'

export default {
  name: 'app',
  components: {
    Navbar,Slider,Block,ShowImage,Slogan,Achieve,Link,Footerbar
  }
}
</script>

