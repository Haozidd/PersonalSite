<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: 35px;">简历</span>
            </div>
          </template>

          <div id="userInfo">
            <el-descriptions :column="4"  title="个人信息" >
              <el-descriptions-item label="姓 名 :">黄皓</el-descriptions-item>

              <el-descriptions-item label="性 别 :">男</el-descriptions-item>
              <el-descriptions-item label="年 龄 :">26</el-descriptions-item>
              <el-descriptions-item label="学 历 :">本科</el-descriptions-item>

              <el-descriptions-item label="电  话 :">17727243857</el-descriptions-item>
              <el-descriptions-item label="求职岗位 :">前端开发</el-descriptions-item>


              <el-descriptions-item label="邮 箱 :">
                <el-tag size="small">285626941@qq.com</el-tag>
              </el-descriptions-item>
            </el-descriptions>
            <el-image style="width: 100px; height: 118px" :src="url" :fit="fits[1]"/>
          </div>

          <el-divider />

          <div id="skill">
            <el-descriptions :column="4" title="专业技能"></el-descriptions>
            <div class="text item" ><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 H5、C3及其预处理器、JS/TS 等基础前端开发技术</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 Vue 2/3 全家桶，会使用相关前端 UI 框架</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 Node.js，掌握 Express/Koa 框架，能简单实现后端接口编写，连接数据库获取数据，网站部署上线等操作</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 V8 引擎执行过程</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 ES6+ 新特性，掌握解构赋值、Promise 异步编程、async/await 等技术</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 HTTP 协议，理解 DNS 域名系统、TCP 数据传输机制等基本网络知识</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>掌握 Git、Webpack、Vite 等工具</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>掌握 npm/pnpm 包管理器，Linux 常用命令，MySQL/MongoDB 数据库基本操作，了解 Java 语言并掌握其常用 API</span>
            </div>
          </div>

          <el-divider />

          <div id="project">
            <el-descriptions :column="4" title="项目经验"></el-descriptions>
            <div id="project1">
              <div class="text item">
                <span style="font:16px bold">练习项目: 电商平台</span>
              </div>
              <div class="text item">
                <span>项目描述 : 包含登录、注册、搜索、详情页、购物车、订单支付等模块</span>
              </div>
              <div class="text item">
                <span>技术选型 :   Vue2 + Vuex + vue-router + vue-cli + Axios</span>
              </div>
              <div class="text item"><i>掌握内容 : </i>
                <span> 利用导航守卫配合Token实现登录拦截.
                      封装分页器、api、工具函数,降低耦合性,实现代码复用.
                      利用防抖与节流,实现对输入框回调函数请求的限制与对导航页hover时向服务器请求数据的间隔限制.
                      利用 Swiper 实现轮播图.
                      利用 qrcode 生成支付二维码，并对服务器进行轮询查询和后续页面跳转操作
                    </span>
              </div>
            </div>
            <div id="project2">
              <div class="text item">
                <span style="font:16px bold">练习项目: 后台管理系统</span>
              </div>
              <div class="text item">
                <span>项目描述: 包含登录退出、用户管理、权限管理、订单管理、数据统计等模块</span>
              </div>
              <div class="text item">
                <span>技术选型: Vue3 + Pinia + Router + Vite + ECharts + TS + Element Plus</span>
              </div>
              <div class="text item"><i>掌握内容 : </i>
                <span>
                      利用 Element Plus 框架进行页面整体布局.
                      二次封装 Axios 实现请求响应拦截器,对后端服务器返回的http状态码进行对token的二次登录验证，以及对重复请求的取消处理.
                      利用 $nextTick 处理 resetFields() 进行表单初始化时可能导致的异常问题.
                      利用 ECharts 对服务器返回数据动态渲染实现数据可视化
                    </span>
              </div>
            </div>







          </div>

          <el-divider />
          <div id="education">
            <el-descriptions :column="4" title="教育背景"></el-descriptions>
            <div class="text item">
                  <span>惠州学院&nbsp;&nbsp;&nbsp;&nbsp;
                    2016.09-2020.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    土木工程
                  </span>
            </div>

          </div>
          <el-divider />
          <div id="work">
            <el-descriptions :column="4" title="工作经历"></el-descriptions>
            <div class="text item">
                  <span>自学前端转行，无互联网行业从业经验
                  </span>
            </div>
          </div>






        </el-card>




      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">


const fits = ['fill','contain','cover','none','scale-down']
const url =
    'src/assets/jpg/idPhoto.JPG'

</script>

<style lang="scss">
.common-layout{
  @include flexRow()
}
#userInfo{
  position: relative;
  display: flex;

  .el-descriptions{
    flex: 1;

  }
  .el-image{
    position: absolute;
    right: 5px;
  }
}

#skill{
  i{
    display: flex;
    align-items: center;
    width: 45px;
    flex-shrink: 0;
  }
}
#project{
  i{
    padding-top: 2px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    font: 14px sans-serif;
    font-family: Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,
    Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    padding-right: 3px;
  }
}


#project1{
  margin-bottom: 40px;
}
.el-container,.common-layout{
  width: 1200px;
  height: 100%;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-descriptions__title{
    font-size: 20px;
  }

  .text {
    font-size: 14px;
  }
  .item {
    display: flex;
    margin-bottom: 18px;

    span{
      display: flex;
      align-items: center;
    }
  }

  .box-card {
    width: 100%;
  }
}

</style>