<script setup lang="ts">
import type { Plan } from '~/types/plan'

useSeoMeta({ title: 'Checkout' })

const route = useRoute()
const router = useRouter()

const { data: plans } = await useFetch<Plan[]>('/api/plans')

const plan = computed(() =>
  plans.value?.find(p => p.id === Number(route.query.planId))
)

const formattedPrice = computed(() => {
  if (!plan.value) return ''
  return plan.value.billing === 'monthly'
    ? plan.value.displayPrice
    : plan.value.billed
})

const form = reactive({
  cardNumber: '',
  expiry: '',
  cvc: '',
  name: '',
  address: '',
  agree: false
})

const submit = () => {
  if (!form.agree) return
  alert('Success')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="bg-gray-800 text-white text-center py-3 font-semibold">
      Checkout
    </div>

    <div class="max-w-6xl mx-auto px-4 py-8">
      <button
        @click="router.back()"
        class="text-sm text-gray-500 hover:text-gray-800 mb-4"
      >
        &lt;&lt; back
      </button>

      <h1 class="text-xl font-semibold text-gray-800 mb-2">
        You’re Almost In - Start Your 3-Day Free Trial Now!
      </h1>

      <p class="text-sm text-gray-500 mb-6">
        Set up your account to gain instant access! You won’t be charged if you decide to cancel within 3 days
      </p>

      <div class="grid md:grid-cols-2 gap-6 items-start">

        <div class="bg-white rounded-xl shadow p-6 border-t-4 border-green-400 max-w-md">
          <h3 class="font-semibold text-gray-900 mb-2">
            {{ plan?.title }} - {{ plan?.billing === 'annual' ? 'Annual' : 'Monthly' }}
          </h3>

          <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
            {{ plan?.badge }}
          </span>

          <div class="flex items-baseline mt-3">
            <span class="text-4xl font-bold text-gray-900">{{ plan?.displayPrice }}</span>
            <span class="text-sm text-gray-400 ml-1">{{ plan?.period }}</span>
          </div>

          <p class="text-xs text-gray-400 mt-1">
            billed yearly at
            <span v-if="plan?.oldPrice" class="line-through mr-1">{{ plan?.oldPrice }}</span>
            <span class="font-semibold text-gray-700">{{ plan?.billed }}</span>
          </p>

          <p v-if="plan?.savings" class="text-green-600 text-sm font-semibold mt-2">
            {{ plan?.savings }}
          </p>

          <hr class="my-4"/>

          <ul class="space-y-3">
            <li v-for="f in plan?.features" :key="f.title" class="flex gap-2">
              <span class="text-green-500">✦</span>
              <div>
                <div class="text-sm text-gray-900">{{ f.title }}</div>
                <div v-if="f.subtitle" class="text-xs text-gray-400">{{ f.subtitle }}</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-xl shadow p-6 max-w-md w-full">
          <h3 class="font-semibold text-gray-900 mb-4">Order Summary</h3>

          <div class="text-sm text-gray-700 space-y-2">
            <div class="flex justify-between">
              <span>{{ plan?.billing === 'annual' ? 'Annual Plan' : 'Monthly Plan' }}</span>
              <span>{{ formattedPrice }}</span>
            </div>

            <div class="flex justify-between">
              <span>Total Due</span>
              <span>{{ formattedPrice }}</span>
            </div>

            <div class="flex justify-between font-semibold border-t pt-2">
              <span>Due Today</span>
              <span>$0.00</span>
            </div>
          </div>

          <div class="bg-gray-100 text-center text-sm py-3 rounded mt-4 text-gray-600">
            Includes 3-Day Free Trial
          </div>

          <h3 class="font-semibold text-gray-900 mt-6 mb-3 flex items-center gap-1">
            Billing Information
            <span class="text-gray-400 text-xs">ⓘ</span>
          </h3>

          <div class="border rounded-lg p-3 bg-gray-50 flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>

            <input v-model="form.cardNumber" placeholder="Number" class="flex-1 bg-transparent outline-none text-sm"/>
            <input v-model="form.expiry" placeholder="MM / YY" class="w-20 bg-transparent outline-none text-sm"/>
            <input v-model="form.cvc" placeholder="CVC" class="w-16 bg-transparent outline-none text-sm"/>
          </div>

          <div class="border rounded-lg p-3 mb-4">
            <label class="text-xs text-gray-500">Full name</label>
            <input v-model="form.name" class="w-full border rounded-lg p-2 text-sm mt-1 mb-3"/>

            <label class="text-xs text-gray-500">Address</label>
            <input v-model="form.address" class="w-full border rounded-lg p-2 text-sm mt-1"/>
          </div>

          <label class="flex gap-2 text-xs gap-2 text-gray-600 mb-5">
            <input type="checkbox" v-model="form.agree" class="mt-1"/>
            <span>
              I consent to Terms of Use and understand my 3-day free trial will automatically convert to
              {{ plan?.billed }} per year starting soon. The yearly fee will be automatically charged each year.
            </span>
          </label>

          <button
            :disabled="!form.agree"
            @click="submit"
            class="w-full py-3 rounded-lg font-semibold transition bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Try It Free
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
