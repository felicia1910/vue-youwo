<template>
  <el-image class="post-img" :src="postData[nowPostKey].imgUrl" fit="cover" />

  <div class="show-product">
    <el-image
      class="product"
      v-for="(v, k) in productData"
      :key="k"
      :src="v.imgUrl"
      fit="cover"
      @click="handlePop(true, k)"
    />
  </div>

  <Popup
    :pop="popupValue"
    @closePop="handlePop(false)"
    :data="productData"
    :postData="postData"
    :nowProductKey="nowProductKey"
    @changeImg="changeImg"
  />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Popup from "./components/Popup.vue";

const postData = [
  {
    id: 1,
    imgUrl:
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
  },
  {
    id: 2,
    imgUrl:
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  },
  {
    id: 3,
    imgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  },
];

const productData = [
  {
    id: 1,
    imgUrl:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    text: "<p>Some text description1. Some text description1.Some text description1. Some text description1.<br/>Some text description1.Some text description1.Some text description1.Some text description1.Some text description1.</p>",
  },
  {
    id: 2,
    imgUrl:
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    text: "<p>Some text description2. Some text description2.Some text description2. Some text description2.<br/>Some text description2.Some text description2.Some text description2.Some text description2.Some text description2.<br/>Some text description2.</p>",
  },
  {
    id: 3,
    imgUrl:
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    text: "<p>Some text description3. Some text description3.Some text description3. Some text description3.<br/>Some text description3.Some text description3.Some text description2.Some text description1.Some text description1.</p>",
  },
];

const nowPostKey = ref(0);
const nowProductKey = ref(null);
const popupValue = ref(false);

//+++++++++++++++++++++++
//function
//+++++++++++++++++++++++
const start = () => {};

const handlePop = (val, key) => {
  popupValue.value = val;
  nowProductKey.value = val ? key : null;
};

const changeImg=(key)=>{
  nowProductKey.value =key
}

//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(() => {
  start();
});
</script>
