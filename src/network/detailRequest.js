import {getData} from 'network/request.js'

export function getDetailData(iid){
	return getData({
		url:"/detail",
		params:{
			iid:iid
		}
	})
}



export class getItemInfo{
	constructor(itemInfo,columns,services){
		//标题描述
		this.title=itemInfo.title


		//旧价格
		this.oldPrice=itemInfo.oldPrice
		//销售价格
		this.price=itemInfo.price
		//标红特色
		this.discountDesc=itemInfo.discountDesc


		//销量
		this.sell=columns[0]
		//收藏
		this.star=columns[1]
		//发货信息
		this.deliveryTime=columns[2]

		//退货退运费、包邮、7天无理由退款、72小时发货等
		this.services=services
	}
}