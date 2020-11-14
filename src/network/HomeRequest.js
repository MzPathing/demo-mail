import {getData} from 'network/request.js'

export function getHomeMultidata(){
	return getData({
		url:"/home/multidata"
	})
}