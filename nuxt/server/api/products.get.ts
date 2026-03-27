export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Starter",
      price: "$83.25",
      period: "/month",
      yearly: "$999.00",
      badge: "7-days free then:",
      features: [
        "Primary user + 0 free team members",
        "Save unlimited properties",
        "10 000 exports",
        "500 free skip traces",
        "Imports $0.01"
      ]
    },
    {
      id: 2,
      title: "Pro",
      price: "$120",
      period: "/month",
      yearly: "$1440.00",
      badge: "Most popular",
      features: [
        "Primary user + 5 team members",
        "Unlimited exports",
        "Priority support",
        "Advanced analytics",
        "Imports free"
      ]
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$250",
      period: "/month",
      yearly: "$3000.00",
      badge: "Best value",
      features: [
        "Unlimited team members",
        "Unlimited everything",
        "Dedicated manager",
        "Custom integrations",
        "Premium support"
      ]
    }
  ]
})
