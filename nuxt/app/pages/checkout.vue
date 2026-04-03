<script setup>
useHead({
  title: 'Checkout'
})

const { data: plans } = await useFetch('/api/plans')
const plan = computed(() => plans.value?.[0])

const form = reactive({
  cardNumber: '',
  expiry: '',
  cvc: '',
  name: '',
  address: '',
  agree: false
})

const submit = async () => {
  if (!form.agree) return alert('Погодься з умовами')

  await $fetch('/api/subscription/create', {
    method: 'POST',
    body: {
      ...form,
      plan: plan.value
    }
  })

  alert('Успішно 🚀')
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">

    <div class="bg-gray-800 text-white text-center py-3 font-semibold">
      Checkout
    </div>

    <div class="max-w-6xl mx-auto p-6">


      <div class="grid md:grid-cols-2 gap-6">

        <div class="bg-white rounded-xl shadow p-6 border-t-4 border-green-400">

          <h3 class="font-semibold text-gray-900 mb-2">
            {{ plan?.title }} - Annual
          </h3>

          <p class="text-xs text-gray-400 mb-2">
            {{ plan?.badge }}
          </p>

          <div class="flex items-baseline mb-2">
            <span class="text-3xl font-bold text-gray-900">
              {{ plan?.price }}
            </span>
            <span class="text-sm text-gray-400 ml-1">
              {{ plan?.period }}
            </span>
          </div>

          <p class="text-xs text-gray-400">
            billed yearly at <span class="line-through">$2,988</span>
            {{ plan?.yearly }}
          </p>

          <p class="text-green-600 text-sm font-semibold mt-2">
            $498 in savings
          </p>

          <hr class="my-4"/>

          <ul class="space-y-2 text-sm text-gray-800">
            <li v-for="f in plan?.features" :key="f" class="flex gap-2">
              <span class="text-green-500">✔</span>
              <span>{{ f }}</span>
            </li>
          </ul>

        </div>

        <div class="bg-white rounded-xl shadow p-6">

          <h3 class="font-semibold text-gray-900 mb-4">
            Order Summary
          </h3>

          <div class="text-sm text-gray-700 space-y-2">

            <div class="flex justify-between">
              <span>Annual Plan</span>
              <span>{{ plan?.yearly }}</span>
            </div>

            <div class="flex justify-between">
              <span>Total Due</span>
              <span>{{ plan?.yearly }}</span>
            </div>

            <div class="flex justify-between font-semibold">
              <span>Due Today</span>
              <span>$0.00</span>
            </div>

          </div>

          <div class="bg-gray-100 text-center text-sm py-2 rounded text-gray-500 mt-4">
            Includes 3-Day Free Trial
          </div>

          <h3 class="font-semibold text-gray-900 mt-6 mb-3">
            Billing Information
          </h3>

          <div class="space-y-3 text-gray-500">

            <div class="grid grid-cols-3 gap-2">
              <input v-model="form.cardNumber"
                     placeholder="Number"
                     class="col-span-1 border p-2 rounded" />
              <input v-model="form.expiry"
                     placeholder="MM/YY"
                     class="border p-2 rounded" />
              <input v-model="form.cvc"
                     placeholder="CVC"
                     class="border p-2 rounded" />
            </div>

            <input v-model="form.name"
                   placeholder="Full name"
                   class="w-full border p-2 rounded" />

            <input v-model="form.address"
                   placeholder="Address"
                   class="w-full border p-2 rounded" />

            <label class="flex gap-2 text-xs text-gray-600">
              <input type="checkbox" v-model="form.agree" />
              <span>
                I consent to Terms of Use and understand billing terms.
              </span>
            </label>

            <button @click="submit"
                    class="w-full bg-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-400 transition">
              Try It Free
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>
