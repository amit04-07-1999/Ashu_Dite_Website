import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DietPlansPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const dietPlans = [
    {
      name: "Weight Loss Pro",
      category: "weight-loss",
      duration: "12 weeks",
      price: "$899",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
      description: "Comprehensive program designed for sustainable weight loss with personalized meal plans and weekly support.",
      features: [
        "Customized calorie-controlled meal plans",
        "Weekly nutritionist check-ins",
        "Recipe library access (200+ recipes)",
        "Progress tracking dashboard",
        "Private support group access",
        "Supplement recommendations",
        "Exercise integration guide"
      ],
      ideal: "People looking to lose 15+ lbs sustainably",
      includes: "12 weeks of support, meal plans, and resources",
      badge: "Most Popular"
    },
    {
      name: "Athletic Performance",
      category: "sports",
      duration: "8 weeks",
      price: "$799",
      image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=500&h=300&fit=crop",
      description: "Optimize your athletic performance with sports-specific nutrition strategies and timing protocols.",
      features: [
        "Sport-specific nutrition planning",
        "Pre/post-workout meal timing",
        "Hydration and electrolyte strategies",
        "Supplement stack recommendations",
        "Competition day nutrition",
        "Recovery nutrition protocols",
        "Body composition optimization"
      ],
      ideal: "Athletes and fitness enthusiasts",
      includes: "8 weeks of sports nutrition coaching",
      badge: "For Athletes"
    },
    {
      name: "Diabetes Control",
      category: "medical",
      duration: "Ongoing",
      price: "$699/month",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=300&fit=crop",
      description: "Medical nutrition therapy for managing blood sugar levels and reducing diabetes complications.",
      features: [
        "Blood glucose management strategies",
        "Carbohydrate counting education",
        "Glycemic index/load guidance",
        "Meal timing optimization",
        "Medication coordination support",
        "Continuous monitoring integration",
        "Complication prevention education"
      ],
      ideal: "Type 1, Type 2, and Pre-diabetics",
      includes: "Monthly consultations and ongoing support",
      badge: "Medical"
    },
    {
      name: "Heart Health",
      category: "medical",
      duration: "10 weeks",
      price: "$749",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=300&fit=crop",
      description: "Heart-healthy nutrition plan to lower cholesterol, blood pressure, and cardiovascular disease risk.",
      features: [
        "DASH or Mediterranean diet protocols",
        "Cholesterol-lowering strategies",
        "Sodium reduction guidance",
        "Omega-3 optimization",
        "Anti-inflammatory nutrition",
        "Heart-healthy meal plans",
        "Risk factor monitoring"
      ],
      ideal: "Those with high cholesterol or heart disease risk",
      includes: "10 weeks of cardiovascular nutrition support",
      badge: null
    },
    {
      name: "Digestive Wellness",
      category: "medical",
      duration: "8 weeks",
      price: "$649",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
      description: "Address IBS, bloating, and digestive issues with targeted elimination diets and gut health protocols.",
      features: [
        "Low FODMAP protocol",
        "Elimination diet guidance",
        "Food reintroduction strategy",
        "Gut microbiome support",
        "Probiotic recommendations",
        "Trigger food identification",
        "Symptom tracking tools"
      ],
      ideal: "IBS, IBD, and digestive discomfort sufferers",
      includes: "8 weeks of digestive health support",
      badge: null
    },
    {
      name: "Plant-Based Living",
      category: "lifestyle",
      duration: "6 weeks",
      price: "$549",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=300&fit=crop",
      description: "Transition to or optimize a plant-based diet while ensuring complete nutrition and variety.",
      features: [
        "Complete protein education",
        "Nutrient deficiency prevention",
        "B12 and iron optimization",
        "Plant-based meal planning",
        "Restaurant and travel tips",
        "200+ vegan recipes",
        "Supplement guidance"
      ],
      ideal: "Vegans, vegetarians, or those transitioning",
      includes: "6 weeks of plant-based nutrition education",
      badge: null
    },
    {
      name: "Pregnancy Nutrition",
      category: "prenatal",
      duration: "Throughout pregnancy",
      price: "$899",
      image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=500&h=300&fit=crop",
      description: "Comprehensive nutrition support for a healthy pregnancy, from conception through postpartum.",
      features: [
        "Trimester-specific nutrition",
        "Prenatal vitamin guidance",
        "Gestational weight gain tracking",
        "Morning sickness management",
        "Gestational diabetes prevention",
        "Breastfeeding preparation",
        "Postpartum recovery nutrition"
      ],
      ideal: "Expecting mothers and those trying to conceive",
      includes: "Support throughout pregnancy and 6 weeks postpartum",
      badge: null
    },
    {
      name: "Family Nutrition",
      category: "lifestyle",
      duration: "8 weeks",
      price: "$699",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&h=300&fit=crop",
      description: "Create healthy eating habits for the whole family with kid-friendly meals and educational resources.",
      features: [
        "Family-friendly meal plans",
        "Picky eater strategies",
        "Lunch box ideas",
        "Cooking with kids activities",
        "Nutrition education for children",
        "Budget-friendly planning",
        "Meal prep for families"
      ],
      ideal: "Families with children of any age",
      includes: "8 weeks of family nutrition coaching",
      badge: null
    },
    {
      name: "Anti-Aging & Longevity",
      category: "lifestyle",
      duration: "12 weeks",
      price: "$849",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop",
      description: "Optimize cellular health and longevity through anti-inflammatory nutrition and lifestyle strategies.",
      features: [
        "Anti-inflammatory meal plans",
        "Antioxidant-rich food guidance",
        "Cellular health optimization",
        "Intermittent fasting protocols",
        "Longevity supplement stack",
        "Skin health nutrition",
        "Brain health strategies"
      ],
      ideal: "Those focused on healthy aging and longevity",
      includes: "12 weeks of longevity nutrition coaching",
      badge: "Premium"
    },
    {
      name: "Quick Start Cleanse",
      category: "weight-loss",
      duration: "2 weeks",
      price: "$299",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&h=300&fit=crop",
      description: "Jump-start your health journey with a guided nutritional reset and detox program.",
      features: [
        "2-week meal plan",
        "Whole food focus",
        "Sugar elimination guidance",
        "Daily check-in support",
        "Recipe guide (30+ recipes)",
        "Shopping lists included",
        "Post-cleanse transition plan"
      ],
      ideal: "Beginners or those needing a reset",
      includes: "2 weeks of guided cleanse support",
      badge: "Quick Start"
    },
    {
      name: "Muscle Building",
      category: "sports",
      duration: "12 weeks",
      price: "$849",
      image: "https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?w=500&h=300&fit=crop",
      description: "Maximize muscle growth with high-protein meal plans and strategic nutrient timing.",
      features: [
        "High-protein meal planning",
        "Nutrient timing strategies",
        "Bulking/cutting protocols",
        "Supplement recommendations",
        "Macro tracking guidance",
        "Workout nutrition optimization",
        "Body recomposition strategies"
      ],
      ideal: "Bodybuilders and those building muscle mass",
      includes: "12 weeks of muscle-building nutrition",
      badge: null
    },
    {
      name: "Custom Elite Plan",
      category: "premium",
      duration: "Flexible",
      price: "$1,499+",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop",
      description: "Fully customized nutrition program with unlimited access to your dedicated nutritionist.",
      features: [
        "Unlimited consultations",
        "24/7 text support",
        "Fully customized meal plans",
        "Lab work review and optimization",
        "Supplement protocol design",
        "Home visits available",
        "Priority scheduling"
      ],
      ideal: "Those wanting premium, white-glove service",
      includes: "3-6 months of unlimited nutrition support",
      badge: "Elite"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plans' },
    { id: 'weight-loss', name: 'Weight Loss' },
    { id: 'sports', name: 'Sports & Fitness' },
    { id: 'medical', name: 'Medical Nutrition' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'prenatal', name: 'Prenatal' },
    { id: 'premium', name: 'Premium' }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? dietPlans 
    : dietPlans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Diet Plans & Programs</h1>
            <p className="text-xl lg:text-2xl text-orange-50">
              Personalized nutrition programs designed to help you achieve your unique health goals
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-0 z-40 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Plan Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    {plan.badge && (
                      <div className="absolute top-4 right-4 bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {plan.badge}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-100">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {plan.duration}
                        </span>
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Plan Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{plan.description}</p>
                    
                    <div className="mb-4 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm font-semibold text-orange-800 mb-1">Ideal For:</p>
                      <p className="text-gray-700">{plan.ideal}</p>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        <strong>Package includes:</strong> {plan.includes}
                      </p>
                      <Link
                        to="/contact"
                        className="block text-center bg-gradient-to-r from-orange-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Start This Plan
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Plans</h3>
                <p className="text-gray-600">
                  Every plan is customized to your unique needs, preferences, and health goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600">
                  Direct access to certified nutritionists who guide you every step of the way.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Monitor your progress with our comprehensive tracking tools and regular check-ins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We're confident in our programs. If you're not completely satisfied within the first 14 days, 
              we'll provide a full refund—no questions asked.
            </p>
            <p className="text-gray-600">
              Plus, all plans come with flexible payment options and the ability to pause or modify your program as needed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I switch between plans?</h3>
                <p className="text-gray-700">
                  Yes! We understand that your needs may change. You can upgrade, downgrade, or switch to a different plan at any time. 
                  Just speak with your nutritionist to make the transition seamless.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you accept insurance?</h3>
                <p className="text-gray-700">
                  Many of our medical nutrition therapy programs are covered by insurance. We accept most major insurance plans. 
                  Contact us to verify your coverage and benefits.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if I have dietary restrictions?</h3>
                <p className="text-gray-700">
                  All our plans are fully customizable to accommodate allergies, intolerances, religious restrictions, and personal preferences. 
                  We'll create a plan that works for your unique situation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are consultations virtual or in-person?</h3>
                <p className="text-gray-700">
                  We offer both! Choose whichever format works best for you. Virtual consultations are available via secure video call, 
                  and in-person appointments are available at our clinic.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What happens after my plan ends?</h3>
                <p className="text-gray-700">
                  You'll have all the knowledge and tools to continue on your own. However, many clients choose to continue with 
                  maintenance plans or periodic check-ins to ensure lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Not Sure Which Plan Is Right for You?</h2>
            <p className="text-xl text-orange-50 mb-8">
              Schedule a free 15-minute discovery call to discuss your goals and find the perfect plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+15551234567"
                className="bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DietPlansPage;

