<template>
  <div>
    <panel :type="type" :footer="footer" :list="list">
    </panel>
  </div>
</template>

<script>

export default {
  data() {
    return {
      type: '1',
      header: 'header',
      footer: null,
      list: [
        {
          title: '班主任请假',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。的发生发射点反对',
          url: '/vacation/incharge'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '科任老师请假',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/vacation/nocharge',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          title: '请假记录',
          url: '/history',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        }, 
        {
          title: '德育考勤',
          url: '/stat',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        }
      ]
    }
  }
}
</script>

<style>

</style>
