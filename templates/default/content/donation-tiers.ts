// UPDATE: Customize your donation tiers and impact information
export const donationInfo = {
  hero: {
    title: "Support Our Mission",
    description: "Your donation helps us rescue, care for, and find loving homes for cats in need. Every dollar makes a difference."
  },
  tiers: [
    {
      name: "Friend of Felines",
      amount: 25,
      description: "Provides food for one cat for a week",
      benefits: [
        "Monthly newsletter",
        "Thank you card"
      ]
    },
    {
      name: "Cat Champion",
      amount: 50,
      description: "Covers basic veterinary care for one cat",
      benefits: [
        "Monthly newsletter",
        "Thank you card",
        "Recognition on our website"
      ]
    },
    {
      name: "Rescue Hero",
      amount: 100,
      description: "Provides spay/neuter surgery for one cat",
      benefits: [
        "Monthly newsletter",
        "Thank you card",
        "Recognition on our website",
        "Exclusive rescue updates"
      ]
    },
    {
      name: "Lifetime Supporter",
      amount: 250,
      description: "Covers complete care for one cat from rescue to adoption",
      benefits: [
        "All previous benefits",
        "Annual impact report",
        "Invitation to special events",
        "Photo updates from rescued cats"
      ]
    }
  ],
  impact: {
    title: "Where Your Donation Goes",
    breakdown: [
      { category: "Medical Care", percentage: 45, description: "Veterinary care, spay/neuter, vaccinations" },
      { category: "Food & Supplies", percentage: 25, description: "Quality food, litter, toys, and enrichment" },
      { category: "Foster Support", percentage: 20, description: "Supporting our amazing foster network" },
      { category: "Operations", percentage: 10, description: "Facility costs, admin, and outreach" }
    ]
  },
  otherWays: [
    {
      title: "Amazon Wishlist",
      description: "Purchase supplies directly from our wishlist and have them shipped to us."
    },
    {
      title: "Volunteer Your Time",
      description: "Join our team of dedicated volunteers helping with events, transport, and more."
    },
    {
      title: "Sponsor a Cat",
      description: "Choose a specific cat to support throughout their journey to adoption."
    },
    {
      title: "Corporate Matching",
      description: "Many employers match charitable donations. Check if yours does!"
    }
  ]
};
