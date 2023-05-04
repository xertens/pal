<template>
  <NuxtLayout>
    <div flex flex-col gap-2 items-center>
      <nuxt-link to="/cart">
        <button>Go to Cart</button>
      </nuxt-link>
      <div flex flex-col gap-2 items-center>
        <div flex flex-col gap-2 text-red>
          <div v-for="(error, index) in errorMessages" :key="error">
            <span>{{ index + 1 }}. {{ error }}</span>
          </div>
        </div>
        <input v-model="productData.name" placeholder="Enter Product's Name" />
        <input v-model="productData.type" placeholder="Enter Product's Type" />
        <div flex gap-3>
          <span>{{ productData.number }}</span>
          <button
            bg-green
            text-white
            rounded
            border="rounded"
            @click="increase"
          >
            +
          </button>
          <button
            bg-yellow-2
            text-gray
            rounded
            border="rounded"
            :disabled="productData.number === 0"
            @click="decrease"
          >
            -
          </button>
        </div>
      </div>
      <button
        bg-blue-500
        text-white
        rounded
        border="rounded"
        @click="addToCart"
        :disabled="productData.number === 0"
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
          <span>Amount: {{ product.number }}</span>
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
const { validateNumber } = useValidateNumber();

const cartDisplay = ref([]);
const errorMessages = ref([]);
const productData = reactive({
  name: "",
  type: "",
  number: 0,
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

const increase = () => productData.number++;
const decrease = () => productData.number--;

// {
//   const result = validateNumber(productData.number);
//   if (result === true) {
//     productData.number--;
//   } else {
//     errorMessages.value = result;
//   }
// };
</script>
