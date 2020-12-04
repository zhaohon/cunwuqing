<template>
  <!--民情分诊-->
  <tk-container class="feedback_wrapper" :status="status">
    <tkui-header slot="header" class="header_border" left>
      <div class="m-r-8" slot="left" @click="$back">
        <tk-icon size="18">fanhui</tk-icon>
      </div>民情分诊
      <div slot="right" @click="$push('/help')">
        <tk-icon size="24">xinjian</tk-icon>
      </div>
    </tkui-header>

    <!-- 民情分诊列表 -->
    <div class="p-x-15 box-bb bg-white" @click="toDetail()">
      <div class="p-y-16 m-b-10">
        <div class="ell_2 font-14 m-b-10">国务院颁布国家最新商铺增收最新商铺增商铺增收税收税收政策</div>
        <Images type="triage" :imgs="imgs"></Images>
        <div class="font-12 color-light-gray m-t-8">
          <span>2020年11月24日</span>
          <span class="m-l-8">16:00</span>
        </div>
      </div>
    </div>
    <div class="p-x-15 box-bb bg-white">
      <div class="p-y-16 m-b-10">
        <div class="ell_2 font-14 m-b-10">国务院颁布国家最新商铺增收最新商铺增商铺增收税收税收政策</div>
        <Images v-if="imgs.length != 0" type="triage" :imgs="imgs"></Images>
        <div class="font-12 color-light-gray m-t-8">
          <span>2020年11月24日</span>
          <span class="m-l-8">16:00</span>
        </div>
      </div>
    </div>
  </tk-container>
</template>

<script>
import Images from '@/components/Images.vue'
export default {
  components: {
    Images
  },
  data () {
    return {
      status: true,
      // imgs:["http://moke-store.oss-cn-beijing.aliyuncs.com/11571c3e-8771-44ed-896d-1243249a0ef1.png",
      //   "http://moke-store.oss-cn-beijing.aliyuncs.com/11571c3e-8771-44ed-896d-1243249a0ef1.png","http://moke-store.oss-cn-beijing.aliyuncs.com/11571c3e-8771-44ed-896d-1243249a0ef1.png",
      //   "http://moke-store.oss-cn-beijing.aliyuncs.com/11571c3e-8771-44ed-896d-1243249a0ef1.png",
      //   ],//测试图片数据
      imgs: [
        'http://moke-store.oss-cn-beijing.aliyuncs.com/11571c3e-8771-44ed-896d-1243249a0ef1.png'
      ] // 测试图片数据
    }
  },
  mounted () {},
  methods: {
    toDetail () {
      console.log('跳转')
      this.$push({
        path: '/triageDetail',
        query: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback_wrapper {
  width: 100%;
  background-color: #f5f5f5 !important;
}
</style>
