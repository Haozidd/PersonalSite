<template>
  <div id="topBar" ref="topBar" :style="scrollDirection?'top:-75px;':'top:0px'">
    <div class="left">
      <img src="@/assets/svg/hzdd_site.svg" alt="">
      <p>
        Hzdd
      </p>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>
      <a href="https://www.bilibili.com" target="_self">BiliBili</a>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>

      <a href="https://developer.mozilla.org/zh-CN/" target="_self">MDN</a>

      <Divider class="colDivider" style="height: 50%;margin: 26px"/>

      <a href="https://www.iconfont.cn" target="_self">iconfont</a>

    </div>


    <div class="center">
      <div id="input-wrapper">
        <input type="text" placeholder="Search Internet" ref="searchElement" @keypress.enter="searchRequest" autofocus>
        <div class="input-button">
          <img src="@/assets/svg/search.svg" alt="img" @mousedown="searchRequest">
        </div>
      </div>
    </div>

    <div class="right">
      <p>登录</p>
      <Divider class="colDivider" style="height: 50%;"/>
      <p>注册</p>
    </div>


  </div>
</template>

<script setup lang="ts">
import {throttle} from "lodash";
import {getCurrentInstance, onMounted, ref, watch} from "vue";

const searchElement = ref<HTMLInputElement>()
const topBar = ref<HTMLDivElement>()

let scrollDirection = ref(0) //0: up ,1:down
let scrollY = ref(window.scrollY)

watch(scrollY, (nv, ov) => {
  console.log(nv,ov)
  nv >= ov ? scrollDirection.value = 1 : scrollDirection.value = 0
})
onMounted(() => {
  document.onkeyup = (ev) => {
    if (ev.altKey) {
      getFocusByCombineKey(ev)
    }
  }
  // 解开注释,触发下拉隐藏顶栏
  // document.onscroll = throttle((e) => {
  //   scrollY.value = window.scrollY
  //   if (scrollY.value <= 0) {
  //     scrollY.value = 0
  //   }
  //   if (scrollY.value >= document.body.clientHeight) {
  //     scrollY.value = document.body.clientHeight
  //   }
  // }, 100)

})


function searchRequest() {
  let flag = 1; // 为0 时代表输入法正在启动, enter事件不触发
  let searchContent = searchElement.value?.value
  let url = `http://www.baidu.com/baidu?word=${searchContent}`
  searchElement.value?.addEventListener('compositionstart', (ev) => {
    flag = 0
  })
  searchElement.value?.addEventListener('compositionend', (ev) => {
    flag = 1
  })
  if (flag === 1) {
    window.location.href=url
    searchElement.value?.blur()
    searchElement.value!.value = ''
  }
}

function getFocusByCombineKey(key: KeyboardEvent) {
  if (key.code === 'KeyF') {
    searchElement.value?.focus()
  }
}


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


p{
  cursor: pointer;
  font-size: 20px;

}

</style>