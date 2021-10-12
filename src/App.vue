<template>
  <div class="app__inner">
    <Nav />
    <div class="app__page">
      <div class="page__container">
        <RouterView />
      </div>
    </div>    
  </div>
</template>

<script>
import Nav from '~/components/Nav'
export default{
  components:{
    Nav
  }
}
</script>
<style lang="scss" scoped>
.app__inner{
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 14px;
  line-height: 1.4;
  .app__page{
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page__container{
      flex-grow: 1;
    }
  }
}  
</style>