import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Personalized Nutrition Counseling",
      description: "One-on-one consultations tailored to your unique health goals, lifestyle, and dietary preferences.",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: [
        "Comprehensive nutritional assessment",
        "Personalized meal planning",
        "Regular progress monitoring",
        "Ongoing support and adjustments",
        "Evidence-based recommendations"
      ],
      duration: "60 min initial, 30 min follow-ups",
      price: "Starting at $120"
    },
    {
      title: "Weight Management Program",
      description: "Sustainable weight loss or weight gain programs designed for long-term success.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Metabolic assessment",
        "Customized calorie and macro targets",
        "Weekly check-ins and support",
        "Behavioral coaching",
        "Exercise recommendations"
      ],
      duration: "12-week program",
      price: "$899"
    },
    {
      title: "Sports Nutrition",
      description: "Optimize your athletic performance with specialized nutrition strategies for athletes.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Performance nutrition planning",
        "Hydration strategies",
        "Supplement guidance",
        "Pre and post-workout nutrition",
        "Competition day planning"
      ],
      duration: "Customized packages",
      price: "Starting at $150"
    },
    {
      title: "Diabetes Management",
      description: "Expert guidance for managing type 1, type 2, and gestational diabetes through nutrition.",
      image: "https://images.unsplash.com/photo-1615485737183-6f1c4a8d3803?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Blood sugar management strategies",
        "Carbohydrate counting education",
        "Meal timing optimization",
        "Medical nutrition therapy",
        "Continuous glucose monitoring support"
      ],
      duration: "Ongoing program",
      price: "Starting at $140"
    },
    {
      title: "Digestive Health",
      description: "Address IBS, food intolerances, and other digestive issues with targeted nutrition therapy.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Elimination diet protocols",
        "FODMAP guidance",
        "Gut health optimization",
        "Food sensitivity testing",
        "Probiotic recommendations"
      ],
      duration: "8-12 week program",
      price: "$749"
    },
    {
      title: "Heart Health Nutrition",
      description: "Reduce cardiovascular risk through heart-healthy nutrition and lifestyle modifications.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Cholesterol management",
        "Blood pressure control",
        "Mediterranean diet guidance",
        "Sodium reduction strategies",
        "Heart-healthy meal planning"
      ],
      duration: "Customized program",
      price: "Starting at $130"
    },
    {
      title: "Prenatal & Postnatal Nutrition",
      description: "Support for expecting and new mothers with specialized nutrition for pregnancy and breastfeeding.",
      image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        "Pregnancy nutrition planning",
        "Gestational weight gain guidance",
        "Morning sickness management",
        "Breastfeeding nutrition support",
        "Postpartum recovery nutrition"
      ],
      duration: "Throughout pregnancy",
      price: "$699 package"
    },
    {
      title: "Pediatric Nutrition",
      description: "Help your children develop healthy eating habits and address nutritional concerns.",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Picky eater solutions",
        "Growth and development support",
        "Sports nutrition for young athletes",
        "Childhood obesity prevention",
        "Family meal planning"
      ],
      duration: "Family sessions available",
      price: "Starting at $110"
    },
    {
      title: "Corporate Wellness Programs",
      description: "Boost employee health and productivity with workplace nutrition programs.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Group nutrition workshops",
        "Healthy eating seminars",
        "Individual consultations",
        "Cafeteria menu planning",
        "Wellness challenges"
      ],
      duration: "Customized packages",
      price: "Contact for pricing"
    },
    {
      title: "PCOS & Hormonal Balance",
      description: "Specialized nutrition plans to manage PCOS symptoms and restore hormonal balance naturally.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "PCOS-specific meal plans",
        "Insulin resistance management",
        "Anti-inflammatory nutrition",
        "Hormone balancing strategies",
        "Weight management support"
      ],
      duration: "8-12 week program",
      price: "$799"
    },
    {
      title: "Thyroid Nutrition Support",
      description: "Optimize thyroid function through targeted nutrition for hypothyroidism and hyperthyroidism.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Thyroid-supporting nutrients",
        "Iodine and selenium optimization",
        "Goitrogen management",
        "Energy-boosting meal plans",
        "Medication interaction guidance"
      ],
      duration: "Ongoing support",
      price: "Starting at $135"
    },
    {
      title: "Senior Nutrition Care",
      description: "Age-appropriate nutrition plans for healthy aging and chronic disease prevention.",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        "Age-related nutrition needs",
        "Bone health optimization",
        "Cognitive function support",
        "Easy-to-prepare meals",
        "Medication-nutrition interactions"
      ],
      duration: "Monthly consultations",
      price: "$599/month"
    },
    {
      title: "Eating Disorder Recovery",
      description: "Compassionate nutritional support for eating disorder recovery and healthy relationship with food.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Gentle, non-diet approach",
        "Intuitive eating principles",
        "Meal plan normalization",
        "Psychological support coordination",
        "Family involvement options"
      ],
      duration: "Individualized timeline",
      price: "Starting at $150"
    },
    {
      title: "Kidney Health Nutrition",
      description: "Specialized renal diet guidance for chronic kidney disease and dialysis patients.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Stage-specific renal diets",
        "Phosphorus and potassium control",
        "Fluid management",
        "Dialysis nutrition support",
        "Lab value interpretation"
      ],
      duration: "Ongoing program",
      price: "$849"
    },
    {
      title: "Cancer Nutrition Support",
      description: "Nutritional guidance to support strength and recovery during cancer treatment.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Treatment side effect management",
        "Immune system support",
        "Muscle mass preservation",
        "Anti-inflammatory foods",
        "Caregiver nutrition education"
      ],
      duration: "Throughout treatment",
      price: "Starting at $140"
    },
    {
      title: "Plant-Based Transition",
      description: "Expert guidance for transitioning to a healthy, balanced vegan or vegetarian lifestyle.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Complete protein sources",
        "Vitamin B12 supplementation",
        "Iron and zinc optimization",
        "Meal planning & recipes",
        "Dining out strategies"
      ],
      duration: "6-8 week program",
      price: "$549"
    },
    {
      title: "Food Allergy Management",
      description: "Navigate food allergies safely while maintaining nutritional balance and variety.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      features: [
        "Allergen-free meal planning",
        "Label reading education",
        "Cross-contamination prevention",
        "Nutritional gap filling",
        "Emergency action planning"
      ],
      duration: "Initial + follow-ups",
      price: "$649"
    },
    {
      title: "Menopause Nutrition",
      description: "Manage menopause symptoms and hormonal changes through targeted nutrition strategies.",
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Hot flash reduction strategies",
        "Bone density support",
        "Weight management",
        "Mood-stabilizing nutrition",
        "Phytoestrogen guidance"
      ],
      duration: "12-week program",
      price: "$749"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-green-50">
              Comprehensive nutrition solutions tailored to your unique health journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Expert Nutrition Services for Every Need
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're looking to lose weight, manage a health condition, or optimize your performance, 
                our certified nutritionists are here to guide you with personalized, evidence-based solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-6 text-white">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-700 mb-3 shadow-lg">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2">
                          {service.title}
                        </h3>
                        <div className="space-y-1 text-center">
                          <div className="text-sm font-semibold">
                            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {service.duration}
                          </div>
                          <div className="text-lg font-bold text-green-300">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-700 text-lg mb-6">
                        {service.description}
                      </p>
                      <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-700">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Book Consultation</h3>
                <p className="text-gray-600">
                  Schedule your initial consultation online or by phone at your convenience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-700">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Complete a comprehensive health and nutrition assessment with your nutritionist.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-700">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Plan</h3>
                <p className="text-gray-600">
                  Receive your personalized nutrition plan tailored to your goals and lifestyle.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-700">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular check-ins, plan adjustments, and continuous support for lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Additional Services & Add-Ons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Body Composition Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Advanced InBody scanning to track muscle mass, body fat, and metabolic rate.
                </p>
                <p className="text-green-700 font-bold">$50 per session</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Meal Prep Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Learn time-saving meal prep strategies and receive customized recipes.
                </p>
                <p className="text-green-700 font-bold">$75</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Grocery Store Tour</h3>
                <p className="text-gray-600 mb-4">
                  Personal shopping guidance to make healthier choices at your local store.
                </p>
                <p className="text-green-700 font-bold">$95</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Food Sensitivity Testing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive testing to identify potential food intolerances.
                </p>
                <p className="text-green-700 font-bold">$200</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recipe Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom healthy recipes designed around your preferences and dietary needs.
                </p>
                <p className="text-green-700 font-bold">$100</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Support Groups</h3>
                <p className="text-gray-600 mb-4">
                  Join our monthly support groups for motivation and community.
                </p>
                <p className="text-green-700 font-bold">Free for clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Insurance & Payment Options
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 mb-6">
                We accept most major insurance plans for medical nutrition therapy. Our team will verify your coverage and help you understand your benefits.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Accepted Insurance:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Blue Cross Blue Shield
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      UnitedHealthcare
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Aetna
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Cigna
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Payment Methods:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Credit/Debit Cards
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      HSA/FSA Accounts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Payment Plans Available
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Cash/Check
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-green-50 mb-8">
              Take the first step towards better health. Book your consultation today!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

