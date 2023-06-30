var ec_right3 = echarts.init(document.getElementById('right3'), "dark");
var ec_right3_Option ={
title: {
		text: "全国青少年饮食健康人数趋势",
		textStyle: {
			color: 'white',
		},
		left: 'left'
	},
	legend: {
		data: ['健康饮食'],
		left: "right"
	},
  xAxis:[ {
    type: 'category',
    data: []
  }],
  yAxis:[ {
    type: 'value'
  }],
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]


};
ec_right3.setOption(ec_right3_Option)


