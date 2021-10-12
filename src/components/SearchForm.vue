<template>
  <form
    class="search-form"
    @submit.prevent>
    <input
      v-model="keyword"
      class="search-field"
      :placeholder="placeholder"
      type="text" />
    <button
      class="search-btn"
      @click="searchMovies">
      검색
    </button>
  </form>
</template>

<script>
export default{
	props:{
		searchType:{
			type: String,
			default: ''
		},
		placeholder:{
			type: String,
			default:''
		}
	},
	data(){
		return {
			keyword:'',
			
		}
	},
	computed:{
		SearchTypeCheck(){
			// 영화이름 검색인지 연도별 검색인지 체크
			return this.searchType === 'keyword' 
						? { keyword: this.keyword }
						: { year: this.keyword }
		}
	},
	methods:{
		searchMovies(){
			if( this.searchType === 'keyword'){
				this.routerPush('SearchResult')
			}else{
				this.routerPush('SearchYear')
			}			
			this.keyword = ''
		},
		routerPush(name){
			this.$router.push({
          name,
          params: this.SearchTypeCheck
        })
		}
	}
}
</script>

<style lang="scss" scoped>
	.search-form{
		padding: 0 30px;
		display:flex;
		flex-grow: 1;		
		.search-field{
			max-width: 600px;
			flex-grow:1;
		}
		.search-btn{
			margin-left: 8px;
		}
	}
</style>
