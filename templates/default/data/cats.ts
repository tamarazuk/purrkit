// UPDATE: Add your adoptable cats here
export interface Cat {
  id: string;
  name: string;
  age: string;
  gender: "Male" | "Female";
  description: string;
  image: string;
  traits: string[];
  featured?: boolean;
}

export const cats: Cat[] = [
  {
    id: "1",
    name: "Whiskers",
    age: "2 years",
    gender: "Male",
    description: "Whiskers is a friendly and playful tabby who loves to chase toys and cuddle on the couch. He's great with kids and would make a wonderful family pet.",
    image: "https://cataas.com/cat?width=400&height=400&id=1",
    traits: ["Playful", "Good with kids", "Indoor only"],
    featured: true
  },
  {
    id: "2",
    name: "Luna",
    age: "1 year",
    gender: "Female",
    description: "Luna is a sweet and gentle black cat with gorgeous green eyes. She's a bit shy at first but warms up quickly with treats and gentle pets.",
    image: "https://cataas.com/cat?width=400&height=400&id=2",
    traits: ["Gentle", "Quiet", "Loves treats"],
    featured: true
  },
  {
    id: "3",
    name: "Simba",
    age: "4 years",
    gender: "Male",
    description: "Simba is a confident orange tabby who thinks he's the king of the castle. He loves sunbathing, head scratches, and ruling his domain.",
    image: "https://cataas.com/cat?width=400&height=400&id=3",
    traits: ["Confident", "Independent", "Vocal"],
    featured: true
  },
  {
    id: "4",
    name: "Mittens",
    age: "3 years",
    gender: "Female",
    description: "Mittens is a beautiful tuxedo cat with perfect white paws. She's affectionate and loves to follow her people around the house.",
    image: "https://cataas.com/cat?width=400&height=400&id=4",
    traits: ["Affectionate", "Social", "Talkative"],
    featured: true
  },
  {
    id: "5",
    name: "Oliver",
    age: "6 months",
    gender: "Male",
    description: "Oliver is an energetic kitten who loves to play and explore. He's curious about everything and would do well in an active household.",
    image: "https://cataas.com/cat?width=400&height=400&id=5",
    traits: ["Energetic", "Curious", "Playful"]
  },
  {
    id: "6",
    name: "Bella",
    age: "5 years",
    gender: "Female",
    description: "Bella is a calm and loving senior lady who enjoys the simple things in life - a warm lap, a sunny window, and a good nap.",
    image: "https://cataas.com/cat?width=400&height=400&id=6",
    traits: ["Calm", "Loving", "Senior"]
  },
  {
    id: "7",
    name: "Max",
    age: "2 years",
    gender: "Male",
    description: "Max is a friendly gray cat who gets along great with other cats and dogs. He's adaptable and easygoing.",
    image: "https://cataas.com/cat?width=400&height=400&id=7",
    traits: ["Friendly", "Good with pets", "Easygoing"]
  },
  {
    id: "8",
    name: "Chloe",
    age: "1 year",
    gender: "Female",
    description: "Chloe is a playful calico with tons of personality. She loves interactive toys and will keep you entertained for hours.",
    image: "https://cataas.com/cat?width=400&height=400&id=8",
    traits: ["Playful", "Entertaining", "Active"]
  },
  {
    id: "9",
    name: "Charlie",
    age: "3 years",
    gender: "Male",
    description: "Charlie is a gentle giant who loves to lounge around and observe his surroundings. He's perfect for someone looking for a laid-back companion.",
    image: "https://cataas.com/cat?width=400&height=400&id=9",
    traits: ["Gentle", "Laid-back", "Observer"]
  },
  {
    id: "10",
    name: "Sophie",
    age: "4 years",
    gender: "Female",
    description: "Sophie is a beautiful long-haired cat who loves to be brushed and pampered. She's affectionate and enjoys being the center of attention.",
    image: "https://cataas.com/cat?width=400&height=400&id=10",
    traits: ["Affectionate", "Needs grooming", "Attention-loving"]
  },
  {
    id: "11",
    name: "Leo",
    age: "2 years",
    gender: "Male",
    description: "Leo is an adventurous cat who loves to climb and explore high places. He would do best in a home with cat trees and vertical spaces.",
    image: "https://cataas.com/cat?width=400&height=400&id=11",
    traits: ["Adventurous", "Climber", "Active"]
  },
  {
    id: "12",
    name: "Daisy",
    age: "7 years",
    gender: "Female",
    description: "Daisy is a sweet senior girl who has lots of love left to give. She's looking for a quiet home where she can enjoy her golden years.",
    image: "https://cataas.com/cat?width=400&height=400&id=12",
    traits: ["Sweet", "Senior", "Quiet"]
  }
];
