/**
 * Created by admin on 2023/5/14.
 */
//获取left1数据
function get_left1() {
    $.ajax({
        url:"/get_left1",
        type:"post",
        success:function (datas) {
            ec_left1_Option.xAxis[0].data=datas['day']
            ec_left1_Option.series[0].data=datas['confirm']
            ec_left1_Option.series[1].data=datas['suspect']
            ec_left1_Option.series[2].data=datas['heal']
            ec_left1_Option.series[3].data=datas['dead']
            ec_left1.setOption(ec_left1_Option)
        },
        error:function () {

        }


    })

}

//获取left2数据
function get_left2() {
    $.ajax({
        url:"/get_left2",
        type:"post",
        success:function (datas) {
            ec_left2_Option.xAxis[0].data=datas['day']
            ec_left2_Option.series[0].data=datas['confirm']
            ec_left2_Option.series[1].data=datas['suspect']
            ec_left2.setOption(ec_left2_Option)
        },
        errors:function () {

        }
    })

}


function get_right1() {
    $.ajax({
        url:"/get_right1",
        type:"post",
        success:function (datas) {
            ec_right1_Option.xAxis[0].data=datas['day']
            ec_right1_Option.series[0].data=datas['confirm']
            ec_right1_Option.series[1].data=datas['suspect']
            ec_right1_Option.series[2].data=datas['heal']
            ec_right1_Option.series[3].data=datas['dead']
            ec_right1.setOption(ec_right1_Option)
        },
        error:function () {

        }


    })

}

function get_right2() {
    $.ajax({
        url:"/get_right2",
        type:"post",
        success:function (datas) {
            ec_right2_Option.xAxis[0].data=datas['day']
            ec_right2_Option.series[0].data=datas['confirm']
            ec_right2_Option.series[1].data=datas['suspect']
            ec_right2_Option.series[2].data=datas['heal']
            ec_right2_Option.series[3].data=datas['dead']
            ec_right2.setOption(ec_right2_Option)
        },
        error:function () {

        }


    })

}

function get_right3() {
    $.ajax({
        url:"/get_right3",
        type:"post",
        success:function (datas) {
            ec_right3_Option.xAxis[0].data=datas['day']
            ec_right3_Option.series[0].data=datas['confirm']
            ec_right3.setOption(ec_right3_Option)
        },
        error:function () {

        }


    })

}

setInterval(get_left1,1000)
setInterval(get_left2,1000)
setInterval(get_right1,1000)
setInterval(get_right2,1000)
setInterval(get_right3,1000)

