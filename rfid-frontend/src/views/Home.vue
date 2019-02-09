<template>
	<b-table  hover :items="items"></b-table>
</template>
<script>
import axios from 'axios';

export default {
	data () {
		return {
			items: null
		}
	},
	mounted () {
		axios
			.get('http://localhost:8000/v1/users/all')
			.then(response => (this.items = response.data.result))
	}
}
</script>
