<template>
  <Loading v-if="isLoading" />
  <div
    v-else
    class="movie-detail">
    <header>
      <h1>{{ movieInfo.Title }}</h1>
    </header>
    <section>
      <img
        :key="movieInfo.imdbID"
        :src="movieInfo.Poster" />
      <div class="movie-info__container">
        <nav class="movie-info__nav">
          <strong @click="toggleFullPlot">영화 정보</strong>
          <strong @click="toggleFullPlot">전체 줄거리</strong>
        </nav>
        <dl>
          <Description
            v-if="fullPlot"
            title="Plot"
            :content="movieInfo.FullPlot" />
          <Description
            v-for="(info, key) in movieInfo"
            v-else
            :key="key"
            :title="key"
            :content="info" />
        </dl>     
      </div>    
    </section>
  </div>  
</template>
<script>
import Description from '~/components/Description'
export default {
	components:{
		Description,
	},
	data(){
		return{
			isLoading: false,
			fullPlot: false,
		}
	},
	computed:{
		movieInfo(){
			return this.$store.state.resultPage.movieInfo
		},
	},
	watch:{
	},
	created(){
		this.fetchMovieDetail()
	},
	methods:{
		async fetchMovieDetail(){
			this.isLoading = true

			await this.$store.dispatch('resultPage/fetchMovieDetail',{
				imdbID: this.$route.params.imdbID,
				Poster: this.$route.params.Poster
			})

			this.isLoading = false

			this.fullPlot = false
		},
		toggleFullPlot(){
			this.fullPlot = !this.fullPlot
		}
	}
}
</script>
<style lang="scss" scoped>
.movie-detail{
	padding-left: 60px;
	section{
	width:100%;
	height:100%;
	display:flex;
	img{
		width: 300px;
		height:300px;
		object-fit: fit;
	}
	.movie-info__container{
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		.movie-info__nav{
			strong{
				color: royalblue;
				margin: 0 10px 8px 0;
				cursor: pointer;
				&:hover{
					color: red;
				}
			}
		}
		dl{
			margin-top:0;
		}
	}		
}
}

</style>