import { defineStore } from 'pinia'
import type { Plan } from '~/types/plan'

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlan = ref<Plan | null>(null)

  function setPlan(plan: Plan) {
    selectedPlan.value = plan
  }

  function clearPlan() {
    selectedPlan.value = null
  }

  return {
    selectedPlan,
    setPlan,
    clearPlan
  }
})
