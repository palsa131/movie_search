<template>
  <li @click="goDetailPage">
    <div class="img-wrapper">
      <img :src="movie.Poster" />
    </div>
    <div class="movie-detail">
      <strong>{{ movie.Title }}</strong>
      <span>유형: {{ movie.Type }}</span>
      <span>제작: {{ movie.Year }}</span>
    </div>
  </li>
</template>
<script>
export default {
	props:{
		movie: {
			type: Object,
			default: ()=>({})
		}
	},
	methods:{
		goDetailPage(){
			this.$router.push({
				name:'DetailPage',
				params: { 
					imdbID: this.movie.imdbID, 
					Poster: this.movie.Poster
					}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
li{
	margin: 10px;
	.img-wrapper{
		overflow:hidden;
		border-radius: 4px;
		img{
			border-radius: 4px;	
			width: 100%;
			height: 250px;
			object-fit: cover;
			&:hover{
				transform: scale(1.2);
			}
		}
	}
	.movie-detail{
		display:flex;
		flex-direction: column;
	}
}
</style>