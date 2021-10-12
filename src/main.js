import { createApp } from 'vue'
import App from '~/App'
import store from '~/store'
import router from '~/routes'
import SearchForm from '~/components/SearchForm'
import Loading from '~/components/Loading'

const app = createApp(App)
app.component('Loading', Loading)
app.component('SearchForm', SearchForm)
app.use(store)
app.use(router)
app.mount('#app')
