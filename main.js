let myChart = echarts.init(document.querySelector("#main"));
let option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
myChart.setOption(option);
let myChart1 = echarts.init(document.querySelector("#main1"));
myChart1.setOption(
    {
        
        visualMap: {
            // 不显示 visualMap 组件，只用于明暗度的映射
            show: false,
            // 映射的最小值为 80
            min: 80,
            // 映射的最大值为 600
            max: 600,
            inRange: {
                // 明暗度的范围是 0 到 1
                colorLightness: [0, 1]
            }
        },

        series: [
            {
                itemStyle: {
                    // 设置扇形的颜色
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 200,
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    // 阴影颜色
                    shadowColor: 'rgba(150, 0, 0, 0.5)'
                },
                
                name: '访问来源',
                type: 'pie',
                roseType: 'angle',
                radius: '55%',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]

    }
);

