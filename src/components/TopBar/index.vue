<template>
  <div id="topBar" ref="topBar" :style="scrollDirection?'top:-75px;':'top:0px'">


    <div class="left">
      <img src="@/assets/svg/hzdd_site.svg" alt="">
      <p @click="jumpDefault">Hzdd</p>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>
      <a href="https://www.bilibili.com" target="_self">BiliBili</a>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>

      <a href="https://developer.mozilla.org/zh-CN/" target="_self">MDN</a>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>

      <a href="https://www.iconfont.cn" target="_self">iconfont</a>

    </div>


    <div class="center">
      <div id="input-wrapper">
        <input type="text" placeholder="Search" ref="searchElement" @keypress.enter="searchRequest" autofocus>
        <div class="input-button">
          <img src="@/assets/svg/search.svg" alt="img" @mousedown="searchRequest">
        </div>


        <button class="drop-down-button" @mouseenter="enterDropDownButton" @mouseleave="leaveDropDownButton">{{
            buttonText
          }}
        </button>
        <div class="drop-down-frame" ref="dropDownFrame" id="dropDown" @mouseenter="enterDropDownButton"
             @mouseleave="leaveDropDownButton">

          <div class="drop-down-item" v-for="(engine,index) in engineList" :key="index"
               @click="clickDropDownItem($event,index)"
          >{{ engine.name }}
          </div>

        </div>
      </div>
    </div>


    <div class="right">
      <p>登录</p>
      <Divider class="colDivider" style="height: 50%;"/>
      <p @click="jumpResume">简历</p>
    </div>


  </div>
</template>

<script setup lang="ts">
import {throttle} from "lodash";
import {getCurrentInstance, onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import mock from "../../../mock";
import {reqMockSearchEngine} from "@/api";
import {useRouter} from "vue-router";
const router = useRouter()

//路由跳转
function jumpDefault() {
  router.push('/')
}
function jumpResume(){
 router.push('/resume')
}

//搜索框逻辑
const searchElement = ref<HTMLInputElement>()
let url = ref('https://www.baidu.com/baidu?word=')

function searchRequest() {
  let flag = 1; // 为0 时代表输入法正在启动, enter事件不触发
  let searchContent = searchElement.value?.value
  url.value = `${url.value}${searchContent}`
  searchElement.value?.addEventListener('compositionstart', (ev) => {
    flag = 0
  })
  searchElement.value?.addEventListener('compositionend', (ev) => {
    flag = 1
  })
  if (flag === 1) {
    window.location.href = url.value
    searchElement.value?.blur()
    searchElement.value!.value = ''
  }
}

//快捷键 option/alt+F 打开搜索框处理逻辑
document.onkeyup = (ev) => {
  if (ev.altKey) {
    getFocusByCombineKey(ev)
  }
}

function getFocusByCombineKey(key: KeyboardEvent) {
  if (key.code === 'KeyF') {
    searchElement.value?.focus()
  }
}


//搜索引擎下拉框处理逻辑
const dropDownFrame = ref<HTMLDivElement>()
let buttonText = ref('百度')
const engineList: any[] = reactive([])

onBeforeMount(async () => {
  const reqResult = await reqMockSearchEngine()
  for (const reqResultKey in reqResult.data) {
    engineList.push(reqResult.data[reqResultKey])
  }
})

function foldDropDownFrame() {
  const divProxy: HTMLDivElement = dropDownFrame.value!
  divProxy.style.height = '0'
  divProxy.style.padding = '0'
}
function unfoldDropDownFrame() {
  const divProxy: HTMLDivElement = dropDownFrame.value!
  divProxy.style.paddingTop = '19px'
  divProxy.style.height = 30 * engineList.length + parseInt(divProxy.style.paddingTop) + 4 +'px'
}
function enterDropDownButton(e: any) {
  unfoldDropDownFrame()
}
function leaveDropDownButton(e: any) {
  foldDropDownFrame()
}
function clickDropDownItem(e: any, index: any) {
  buttonText.value = e.target.innerText
  url.value = engineList[index].url + engineList[index].params

  foldDropDownFrame()
}

document.addEventListener('mousedown', function (e: MouseEvent) {
  const eventTarget = e.target as Element
  if (eventTarget.className.includes('drop-down')) {
    e.preventDefault()
  }
})


// 下拉隐藏顶栏处理逻辑
let scrollDirection = ref(0) //0: up ,1:down
// let scrollY = ref(window.scrollY)
// document.onscroll = throttle((e) => {
//   scrollY.value = window.scrollY
//   if (scrollY.value <= 0) {
//     scrollY.value = 0
//   }
//   if (scrollY.value >= document.body.clientHeight) {
//     scrollY.value = document.body.clientHeight
//   }
// }, 100)
// watch(scrollY, (nv, ov) => {
//   console.log(nv, ov)
//   nv >= ov ? scrollDirection.value = 1 : scrollDirection.value = 0
// })
</script>

<style lang="scss" scoped>
#topBar {
  position: fixed;
  top: 0;
  @include defineWidthHeight(100%, 75px);

  @include flexRow();
  justify-content: space-between;

  border: .2px solid rgba(128, 128, 128, 0.47);
  background: rgba(255, 255, 255, 0.5);

  box-shadow: inset 0 4px 10px rgba(168, 167, 167, 0.4);
  z-index: 200;
  transition: .2s;
}

.left {
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    padding-right: 20px;
  }

  a {
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 20px;
    transition: .3s;

    &:hover {
      color: rgba(0, 136, 255, 0.9);
      transform: scale(1.2);
    }


  }

  img {
    @include defineWidthHeight(70px, 70px);
    cursor: pointer;
    padding: 0 20px;
  }
}

.center {
  position: relative;
  @include defineWidthHeight(30%, 100%);
  @include flexRow();
  align-items: center;

  #input-wrapper {
    position: relative;
    background: red;
    border-radius: 50%;
    background: radial-gradient(
            circle at 75% 30%,
            rgb(239, 135, 182) 6%,
            skyblue 50%,
            plum 100%
    );
    box-shadow: inset 0 0 40px #fff,
    inset 2px -5px 10px #eaf5fc;
    animation: staticStatus 5s ease-in-out infinite;


    input {
      position: relative;
      box-sizing: border-box;
      pointer-events: auto;
      width: 60px;
      height: 60px;
      outline: none;
      cursor: text;
      border-radius: 50%;
      border: 1px solid rgb(229, 226, 226);
      background: transparent;
      padding-left: 20px;
      padding-right: 40px;
      font-size: 18px;

      transition: .2s;
      z-index: 1;

      &:hover {
        width: 300px;
        height: 40px;
        border-radius: 20px;
        animation: 0;
        background: white;
      }

      &:focus {
        width: 300px;
        height: 40px;
        border-radius: 20px;
        animation: 0;
        background: white;
      }

      &::placeholder {
        color: rgba(128, 128, 128, 0.55);
      }


    }


    .input-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 15%;
      height: 100%;
      border-radius: 20px;
      opacity: 0;
      @include flexRow();
      align-items: center;
      z-index: 1;
      img {
        @include defineWidthHeight(50%, 50%);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

      }
    }
    input:hover + .input-button {
      //pointer-events: none;
      cursor: pointer;
      opacity: 1;
    }
    input:focus + .input-button {
      pointer-events: auto;
      cursor: pointer;
      opacity: 1;
      animation: search 4s linear infinite;
    }

    .drop-down-button {
      position: absolute;
      height: 60px;
      width: 60px;
      left: 0;
      font-size: 16px;

      opacity: 0;
      border-radius: 50%;
      border: 1px solid rgba(128, 128, 128, 0.18);
      background: #e2e2fe;
      z-index: -1;
      transition: 0.2s;


      &:hover {
        background: #b5b5fd;
      }

      &:active {
        background: #efeffe;
      }
    }
    input:hover ~ .drop-down-button {
      height: 40px;
      width: 70px;
      border-radius: 20px;
      opacity: 0;
    }
    input:focus ~ .drop-down-button {
      height: 40px;
      width: 70px;
      border-radius: 20px;
      opacity: 1;
      display: inline-block;
      cursor: pointer;
      left: -80px;
      z-index: 1;
    }
    input:focus ~ .drop-down-frame {
      opacity: 1;
      left: -80px;
    }

    .drop-down-frame {
      opacity: 0;
      box-sizing: border-box;
      text-align: center;
      position: absolute;
      width: 70px;
      height: 0;
      top: 50%;
      left: 0;
      border-radius: 10px;
      border: 1px solid rgba(128, 128, 128, 0.18);
      background: #e2e2fe;

      z-index: 0;
      transition: .2s;
      overflow: hidden;

      .drop-down-item {
        font-size: 16px;
        white-space: nowrap;
        width: 100%;

        box-sizing: border-box;
        cursor: pointer;
        line-height: 30px;
        height: 30px;
        border-top: 1px rgba(128, 128, 128, 0.18) solid;
        transition: .1s;

        &:hover {
          background: #aeaeff;
        }
      }
    }
  }

  @keyframes search {
    25% {
      transform: translate(3px, 3px);
    }
    50% {
      transform: translate(-4px, -4px);
    }
    75% {
      transform: translate(4px, -4px);
    }
    100% {
      transform: translate(0px, 0px);
    }

  }
  @keyframes staticStatus {
    50% {
      box-shadow: inset 0 0 20px #fff,
      inset -10px 0 10px #eaf5fc,
      inset -40px -10px 10px #eacde6,
      inset -0px 20px 10px #f9f6de,
      inset 0px -20px 20px #f9f6de;
    }
  }
  @keyframes hoverStatus {
    to {
      width: 200px;
      height: 40px;
      border-radius: 20px;
    }
  }

}

.right {
  display: flex;
  align-items: center;

  p {
    padding: 25px;
    transition: .2s;

    &:hover {
      color: rgba(215, 83, 255, .7);
      transform: scale(1.1);
    }
  }
}


p {
  cursor: pointer;
  font-size: 20px;

}


</style>