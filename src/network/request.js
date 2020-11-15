import axios from 'axios'

export function getData(config){
	const a1=axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})

	// 拦截器

	// 返回
	return a1(config)
}