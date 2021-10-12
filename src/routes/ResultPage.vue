<template>
  <header>
    <h1>
      '<span class="keyword">{{ keyword }}</span>' 
      검색결과
      <span
        v-if="year"
        class="year">(연도: {{ year }})</span>
    </h1>
    <div class="search-container">
      <SearchForm
        search-type="year"
        placeholder="연도별로 검색하기" />
    </div>
  </header>
  <section>
    <Loading v-if="isLoading" />
    <div
      v-else
      class="movieList">
      <ul v-if="movies">
        <MovieCard
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </ul>
      <div
        v-else
        class="no-result">
        <strong>검색 결과가 없네요...</strong>
      </div>
    </div>
    <div
      class="loadMore"
      @click="fetchMoreMovies">
      More
    </div>
  </section>
</template>

<script>
import MovieCard from '~/components/MovieCard'

export default {
  components:{
    MovieCard,
  },
  data(){
    return{
      isLoading: false,
      page: 1
    }
  }    
  ,
  computed: {
    keyword(){
      return this.$route.params.keyword
    },
    year(){
      return this.$route.params.year
    },
    movies() {
      return this.$store.state.resultPage.movies
    },
    totalResult() {
      return parseInt(this.$store.state.resultPage.totalResults, 10)
    }
  },
  watch: {
    $route() {
      this.$store.dispatch('resultPage/searchMovies', {
        keyword: this.$route.params.keyword,
        year: this.$route.params.year
      })
    },
  },
  created() {
    this.fetchMovieList()
  },
  methods:{
    async fetchMovieList(){
      this.isLoading = true
      await this.$store.dispatch('resultPage/searchMovies', {
              keyword: this.$route.params.keyword,
              year: this.$route.params.year,
            })
      this.isLoading = false
    },
    async fetchMoreMovies(){
      this.isLoading = true
      if (this.page < this.totalResult)
      this.page +=1
      await this.$store.dispatch('resultPage/moreMovies', {
              keyword: this.$route.params.keyword,
              year: this.$route.params.year,
              page: this.page
            })
      this.isLoading = false
    }
  }
}
</script>
<style lang="scss" scoped>
header{
  display: flex;
  align-items: center;
  padding: 0 150px;
  h1{
  padding-left: 50px;
    .keyword{
     color:red
    }
    .year{
      color: royalblue
    }  
  }
  .search-container{
    display: flex;
    padding-left: 50px;
  }
}
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ul{

  }
  .movieList{
    ul{
      display:grid;
      grid-template-columns:repeat(5, 200px);
      list-style-type: none;
    }
  }  
  .no-result{

  }
  .loadMore{
    color: gray;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    &:hover{
      color: #eee;
      background-image: linear-gradient(white, gray);
    }
  }
}

</style>