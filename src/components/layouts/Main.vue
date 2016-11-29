<template id="main">
  <div>
    <Navbar></Navbar>
    <slot></slot>
    <Foot></Foot>
  </div>
</template>

<script>
  import Navbar from './../common/Navbar.vue'
  import Foot from './../common/Foot.vue'

  export default {
    components: {
      Navbar,Foot
    }
  }
</script>

