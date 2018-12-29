import axios from 'axios'
const url = 'https://mrsfl.github.io/truelovechain/data.json'

export function getHeaderInfo(){
	return axios.get(url).then((res)=>{
		return Promise.resolve(res)
	})
}