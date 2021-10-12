<template>
  <div
    v-if="titleCheck()"
    class="grid-layout">
    <dt>{{ title }}</dt>
    <dd v-if="titleCheck()">
      {{ content }}
    </dd>
    <dd v-else>
      {{ content[0].Source }}
      {{ content[0].Value }}
    </dd>
  </div>
</template>
<script>
export default {
	props:{
		title:{
			type: String,
			default: ''
		},
		content:{
			type: [String, Array],
			default: ''
		}
	},
	methods:{
		titleCheck(){
			const exceptionTitles = ['Poster','FullPlot']
			if(exceptionTitles.includes(this.title)){
				return false
			}else if(this.title === 'Ratings' && this.content[0]){
				return false
			}
			return true
		}
	}
}
</script>
<style lang="scss" scoped>
.grid-layout{
	display: grid;
	grid-template-columns: 150px 500px;
	dt{
		font-weight: 700;
	}
	dd{
		margin-left:0;
	}
}

</style>