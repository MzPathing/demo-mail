import axios from 'axios'

export function getData(config){
	const a1=axios.create({
		baseURL:'http://152.136.185.210:8000/api/w6',
		timeout:5000
	})

	// 拦截器

	// 返回
	return a1(config)
}