<template>
  <el-dialog
    v-model="dialogVisible"
    title="Item Details"
    width="90%"
    v-if="props.data[nowProductKey]"
  >
    <template #header>
      <button
        class="el-dialog__headerbtn goback"
        type="button"
        v-if="step == 2"
        @click="go(1)"
      >
        <el-icon><ArrowLeft /></el-icon>
      </button>
      <div class="title">Item Details</div>
    </template>

    <div class="pop-step1" v-if="step == 1">
      <div class="product-img-box">
        <el-image :src="props.data[nowProductKey].imgUrl" fit="cover" lazy/>
        <div class="btn" @click="go(2)">Seen In</div>
      </div>
      <div class="text" v-html="props.data[nowProductKey].text"></div>
    </div>

    <div class="pop-step2" v-if="step == 2">
      <el-image
        class="prod-img"
        :src="props.data[nowProductKey].imgUrl"
        fit="cover"
      />
      <el-image
        class="post-img"
        :src="props.postData[postKeyNum].imgUrl"
        lazy
        fit="cover"
      />
      <div class="show-product">
        <el-image
          class="product"
          v-for="(v, k) in props.data"
          :key="k"
          :src="v.imgUrl"
          fit="cover"
          lazy
          @click="handleImgData(k)"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";

const props = defineProps({
  pop: Boolean,
  data: Array,
  postData: Array,
  nowProductKey: Number,
});
const emits = defineEmits(["closePop", "changeImg"]);
const dialogVisible = ref(false);
const step = ref(1);

//+++++++++++++++++++++++
//watch
//+++++++++++++++++++++++
watch(
  () => props.pop,
  (val) => {
    if (val) dialogVisible.value = true;
  }
);
watch(
  () => dialogVisible.value,
  (val) => {
    if (!val) emits("closePop");
    go(1);
  }
);
//+++++++++++++++++++++++
//computed
//+++++++++++++++++++++++
const postKeyNum = computed(() => {
  return props.nowProductKey + 1 == props.data.length
    ? 0
    : props.nowProductKey + 1;
});
//+++++++++++++++++++++++
//function
//+++++++++++++++++++++++
const go = (val) => {
  step.value = val;
};

const handleImgData = (key) => {
  emits("changeImg", key);
  go(1);
};

//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(() => {});
</script>
