<template>
  <NuxtLayout>
    <div flex flex-col gap-2 items-center>
      <div flex flex-col gap-2 items-center>
        <div flex flex-col gap-2 text-red>
          <div v-for="(error, index) in errorMessages" :key="error">
            <span>{{ index + 1 }}. {{ error }}</span>
          </div>
        </div>
        <input v-model="productData.name" placeholder="Enter Product's Name" />
        <input v-model="productData.type" placeholder="Enter Product's Type" />
        <div flex gap-3>
          <span>{{ productNo }}</span>
          <button @click="increase">+</button>
          <button @click="decrease">-</button>
        </div>
      </div>
      <button
        bg-blue-500
        text-white
        rounded
        transition
        hover:bg-blue-600
        border="none rounded"
        @click="addToCart"
      >
        Add to Cart
      </button>
      <div
        v-for="(product, index) in cartDisplay"
        :key="product.name"
        flex
        gap-2
      >
        <div bg-gray-300 max-w-sm p-8 rounded-2xl flex flex-col gap-2 w-auto>
          <span>Name: {{ product.name }}</span>
          <span>Type: {{ product.type }}</span>
          <button
            bg-red-7
            text-white
            border="none rounded"
            @click="remove(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { validate } = useValidate();
const { validateNumber } = validateNumber();

const cartDisplay = ref([]);
const errorMessages = ref([]);
const productNo = ref(0);
const productData = reactive({
  name: "",
  type: "",
});

const addToCart = () => {
  errorMessages.value = [];

  const result = validate(productData);

  if (result === true) {
    cartDisplay.value.push({ ...productData });

    productData.name = "";
    productData.type = "";
  } else {
    errorMessages.value = result;
  }
};

const remove = (index) => cartDisplay.value.splice(index, 1);

const increase = () => productNo.value++;
const decrease = () => {
  const result = validateNumber(productNo);
  if (result === true) {
    productNo.value--;
    productNo.value = 0;
  } else {
    errorMessages.value = result;
  }
};
//   if (productNo.value <= 0) {
//     errorMessages.value = ["The product number should be more than 0"];
//     return;
//   }
</script>
