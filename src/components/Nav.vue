<template>
  <nav>
    <div
      class="logo"
      @click="goHome">
      Movie Search
    </div>
    <SearchForm
      search-type="keyword"
      placeholder="영화 제목을 입력하세요!" />
  </nav>
</template>
<script>
export default{
	data(){
		return {
			keyword:''
		}
	},
	methods:{
		searchMovies(){
			this.$router.push({
          name: 'SearchResult',
          params: {
            keyword: this.keyword
          }
        })
			this.keyword = ''
		},
		goHome(){
			this.$router.push({
				name: 'HomePage'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
nav{
	display:flex;
	align-items: center;
	height: 80px;
	padding: 0 60px;
	border-bottom: 1px gray solid;
	.logo{
		flex-shrink: 0;
		min-width: 65px;
		font-size: 30px;
		font-weight: 700;
		cursor: pointer;
	}
}	
</style>