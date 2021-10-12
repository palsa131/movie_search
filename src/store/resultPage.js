export default {
	namespaced: true,
	state() {
		return{
			movies: [],
			totalResults: '',
			movieInfo: {},
		}
	},
	getters:{},
	mutations: {
		assignState(state, payload){
			Object.keys(payload).forEach(key =>{
				state[key] = payload[key]
			})
		},
	},
	actions: {
		async searchMovies({ commit, state },payload){ // 영화 목록 불러오기	
			const movies = await _request({...payload, MovieList: true})
			commit('assignState',{
				movies: movies.Search,				
			})
			if( state.totalResults !== movies.totalResults){
				commit('assignState',{
					totalResults: movies.totalResults				
			})
			}
		},
		async moreMovies({ commit, state },payload){
			const movies = await _request({...payload, MovieList: true})
			commit('assignState',{
				movies: [...state.movies, ...movies.Search],				
			})

			},
		async fetchMovieDetail({ commit },payload){ // 영화 상세 정보 불러오기
			const { Poster } = payload			
			const movieInfo = await _request({...payload, Detail: true})
			const movieFullPlot = await _request({...payload, FullPlot: true})
			commit('assignState',{
				movieInfo: {
					...movieInfo,
					FullPlot: movieFullPlot.Plot,
					Poster
				}
			})
		}
	}
}


async function _request(payload){
	console.log(payload)
	return await fetch('/.netlify/functions/movie',{
		method: 'POST',
		body: JSON.stringify(payload)
	}).then(res => res.json())
}