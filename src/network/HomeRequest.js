import {getData} from 'network/request.js'

export function getHomeMultidata(){
	return getData({
		url:"/home/multidata"
	})
}

export function getGoodsItems(type,page){
	return getData({
		url:"/home/data",
		params:{
			type,
			page
		}
	})
}