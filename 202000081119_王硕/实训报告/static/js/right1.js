
var ec_right1 = echarts.init(document.getElementById('right1'), "dark");

var ec_right1_Option = {
	//标题样式
	title: {
		text: "全国青少年膳食情况趋势",
		textStyle: {
			// color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
	},
	legend: {
		data: ['健康饮食', '营养缺乏', "饮食不规范", "暴饮暴食"],
		left: "right",
		top:25
	},

	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//x轴坐标点开始与结束点位置都不在最边缘
		// boundaryGap : true,
		data: []
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: "健康饮食",
		type: 'line',
		smooth: true,
		data: []
	}, {
		name: "营养缺乏",
		type: 'line',
		smooth: true,
		data: []
	},
		{
		name: "饮食不规范",
		type: 'line',
		smooth: true,
		data: []
	}, {
		name: "暴饮暴食",
		type: 'line',
		smooth: true,
		data: []
	}]
};
ec_right1.setOption(ec_right1_Option)
