<script setup>
useHead({
  title: 'Список продуктів'
})

const { data: products } = await useFetch('/api/products')
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div v-for="product in products" :key="product.id"
           class="relative bg-white rounded-2xl p-8 w-[350px] border-2 border-transparent hover:border-gray-500 shadow-md transition-all duration-300 overflow-hidden">

        <!-- top line -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-300 rounded-t-2xl"></div>

        <!-- badge -->
        <span class="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-md mb-4">
          {{ product.badge }}
        </span>

        <!-- price -->
        <div class="flex items-baseline">
          <span class="font-mono text-5xl font-bold text-gray-900 leading-none">
            {{ product.price }}
          </span>
          <span class="text-sm text-gray-400 ml-1">
            {{ product.period }}
          </span>
        </div>

        <p class="text-xs text-gray-400 mt-1.5">
          Billed yearly at
          <strong class="text-gray-900 font-semibold">
            {{ product.yearly }}
          </strong>
        </p>

        <!-- button -->
        <div class="relative mt-5 mb-5 group/btn">
          <button
            class="w-full py-3 bg-gray-100 group-hover/btn:bg-transparent group-hover/btn:border group-hover/btn:border-gray-900 text-gray-500 group-hover/btn:text-gray-900 text-sm font-semibold rounded-xl cursor-pointer transition-all duration-200">
            Select plan
          </button>
        </div>

        <hr class="border-gray-100 mb-5" />

        <!-- features -->
        <ul class="flex flex-col gap-3.5">
          <li v-for="(feature, index) in product.features" :key="index"
              class="flex items-start gap-2.5">

            <span class="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 16 16">
                <path d="M8 1C8 4.866 11.134 8 15 8C11.134 8 8 11.134 8 15C8 11.134 4.866 8 1 8C4.866 8 8 4.866 8 1Z"
                      fill="#22c55e"/>
              </svg>
            </span>

            <span class="text-sm text-gray-900 leading-snug">
              {{ feature }}
            </span>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>
