require('dotenv').config()
const axios = require('axios')
const { API_END_POINT, API_KEY} = process.env

exports.handler = async function(event) {
	const payload = JSON.parse(event.body)
	const { keyword, year = '', page = 1, imdbID, MovieList = false, FullPlot = false  ,Detail = false} = payload
	let url =''
	if ( MovieList ){
			url = `${API_END_POINT}?apikey=${API_KEY}&s=${ keyword }&y=${year}&page=${ page }`
	}else if( FullPlot ){
			url = `${API_END_POINT}?apikey=${API_KEY}&i=${ imdbID }&plot=full`
	}else if( Detail ) {
			url = `${API_END_POINT}?apikey=${API_KEY}&i=${ imdbID }&plot=short`
	}
	const res = await axios.get(url)

	return {
		statusCode: 200,
		body: JSON.stringify(res.data)
	} 
	
}