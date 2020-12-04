<template>
  <tk-container>
     <tkui-header slot="header" class="header_border" left>
      <div class="m-r-8" slot="left" @click="$back"><tk-icon size="18">fanhui</tk-icon></div>
      地图位置
    </tkui-header>
    <div><div id="container" style="width:100%; height:80vh;"></div>
      <div class="bg-white p-15 ">
          <tk-flex middle between class="font-20 color-black">
              <div>
                  <tk-flex middle class="font-20 color-black">廉台村<span class="tag font-12 m-l-8">村庄</span></tk-flex>
                  <div class="font-14 color-black m-t-10 p-b-15" style="border-bottom:1px solid #f5f5f5">河北省-石家庄市-辛集县-任萍乡</div>
              </div>
              <div class="change_btn font-12 color-white">确认更换</div>
          </tk-flex>

          <div class="font-15 color-black m-t-10">相关简介</div>
          <div class="font-14 color-black m-t-10 p-b-15">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
      </div>
    </div>
  </tk-container>
</template>

<script>

export default {
  data () {
    return {
      ruleForm: []

    }
  },
  activated () {
    this.init()
  },
  methods: {
    init () {
      var map = new AMap.Map('container', { resizeEnable: true })
      AMap.plugin(['AMap.ToolBar', 'AMap.OverView', 'AMap.MapType', 'AMap.Scale', 'AMap.Geolocation'], function () { // 异步加载插件
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          // 定位按钮的排放位置, RB表示右下
          buttonPosition: 'RB',
          setMyLocationStyle: 'http://shusi.deo2o.net/Public/images/icon-fav-grey.png'
        })
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.OverView())
        map.addControl(new AMap.MapType())
        map.addControl(new AMap.Scale())
        map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (e) => {
          // console.log(e) // 定位成功之后做的事
          // 定位成功之后再定位处添加一个marker
          console.log('定位：', e.position.lng, e.position.lat)
          var marker = new AMap.Marker({
            position: [e.position.lng, e.position.lat] // （e.position）--->定位点的点坐标, position ---> marker的定位点坐标，也就是marker最终显示在那个点上，
          })
          map.add(marker)
        })
      })

      var geocoder, marker

      function regeocoder (lnglatXY, that) {
        AMap.plugin('AMap.Geocoder', function () {
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress(lnglatXY, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              var address = result.regeocode.formattedAddress
              that.ruleForm.addr = address
            }
          })
          if (!marker) {
            marker = new AMap.Marker()
            map.add(marker)
          }
          marker.setPosition(lnglatXY)
        })
      }

      var that = this
      map.on('click', function (e) {
        var lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()]
        regeocoder(lnglatXY, that)
        that.ruleForm.long = e.lnglat.getLng()
        that.ruleForm.lat = e.lnglat.getLat()
        console.log('地图选点', that.ruleForm)
      })
    }
  }

}
</script>
<style lang="scss" scoped>
  .succeed{
    padding-top: 52px;
    letter-spacing: 1px;
  }

  .tag{
    padding: 0 4px;
    background-color: #E6EDFB;
    border-radius: 2px;
    color: #0e53d9;
    }

    .change_btn{
        width: 70px;
        height: 32px;
        line-height: 32px;
        background-color: #0e66d9;
        border-radius: 5px;
        text-align: center;
    }
</style>
