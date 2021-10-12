import { createRouter, createWebHistory } from 'vue-router'
import ResultPage from './ResultPage'
import DetailPage from './DetailPage'
import HomePage from './HomePage'

export default createRouter({
	history: createWebHistory(),
	scrollBehavior: () => ({ top: 0 }),
	routes: [
		{
			name: 'HomePage',
			path: '/',
			component: HomePage,
		},
		{
			name: 'SearchResult',
			path: '/searchResult/:keyword',
			component: ResultPage,
			children:[
				{
					name: 'SearchYear',
					path: ':year',
					component: ResultPage,
				}
			]
		},
		{
			name: 'DetailPage',
			path: '/detailPage/:imdbID',
			component: DetailPage,
		}		
	]
})