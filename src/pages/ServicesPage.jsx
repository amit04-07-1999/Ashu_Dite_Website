import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: "obesity",
      title: "Obesity & Weight Management",
      description: "Sustainable weight loss made simple. Dr. Ashu Basist designs personalized meal strategies to boost metabolism, improve gut health, and help you achieve your ideal weight — the healthy way.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Personalized meal strategies",
        "Metabolism boosting plans",
        "Gut health improvement",
        "Sustainable weight loss approach",
        "Long-term maintenance support"
      ],
      duration: "Customized program",
      price: "Starting at $120"
    },
    {
      id: "hypertension",
      title: "Hypertension (High Blood Pressure)",
      description: "Balance your blood pressure naturally. Dr. Ashu Basist crafts DASH-inspired diet plans that are low in sodium and rich in nutrients to support heart health, reduce inflammation, and improve vascular function.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 018 0v2M5 10h14M6 10a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      features: [
        "DASH-inspired diet plans",
        "Sodium reduction strategies",
        "Heart-healthy nutrients",
        "Inflammation reduction",
        "Vascular function improvement"
      ],
      duration: "Ongoing program",
      price: "Starting at $130"
    },
    {
      id: "hypothyroidism",
      title: "Hypothyroidism",
      description: "Support your thyroid health with the right foods. Dr. Ashu Basist creates meal plans that enhance thyroid function, regulate metabolism, and combat fatigue, bloating, and weight fluctuations.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Thyroid-supporting meal plans",
        "Iodine and selenium optimization",
        "Metabolism regulation",
        "Fatigue and bloating reduction",
        "Weight fluctuation management"
      ],
      duration: "Ongoing support",
      price: "Starting at $135"
    },
    {
      id: "dyslipidemia",
      title: "Dyslipidemia (High Cholesterol & Triglycerides)",
      description: "Eat smart to improve your lipid profile. Dr. Ashu Basist prepares cholesterol-lowering meal plans rich in fiber, omega-3s, and antioxidants — designed to reduce LDL and boost HDL levels.",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Fiber-rich meal plans",
        "Omega-3 optimization",
        "Antioxidant-rich foods",
        "LDL cholesterol reduction",
        "HDL cholesterol boosting"
      ],
      duration: "12-week program",
      price: "$749"
    },
    {
      id: "diabetes",
      title: "Diabetes Management",
      description: "Manage blood sugar with precision. Dr. Ashu Basist formulates low-glycemic, balanced diet plans that stabilize blood glucose, improve insulin sensitivity, and prevent sugar spikes.",
      image: "https://plus.unsplash.com/premium_photo-1716719138436-4a77432ca10d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Low-glycemic meal plans",
        "Blood glucose stabilization",
        "Insulin sensitivity improvement",
        "Sugar spike prevention",
        "Medical nutrition therapy"
      ],
      duration: "Ongoing program",
      price: "Starting at $140"
    },
    {
      id: "fatty-liver",
      title: "Fatty Liver Reversal",
      description: "Heal your liver naturally. Dr. Ashu Basist focuses on liver-friendly nutrition that supports detoxification, reduces fat accumulation, and improves liver enzyme levels through clean and nourishing foods.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Liver-friendly diet plans",
        "Detoxification support",
        "Fat accumulation reduction",
        "Liver enzyme improvement",
        "Clean nutrition approach"
      ],
      duration: "8-12 week program",
      price: "$799"
    },
    {
      id: "kidney-stones",
      title: "Kidney Stone Management",
      description: "Prevent recurrence through the right nutrition. Dr. Ashu Basist customizes meal plans to balance minerals, optimize hydration, and avoid oxalate-rich or triggering foods.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Mineral balance optimization",
        "Hydration strategies",
        "Oxalate management",
        "Trigger food avoidance",
        "Recurrence prevention"
      ],
      duration: "8-week program",
      price: "$649"
    },
    {
      id: "piles",
      title: "Piles (Arsha Rog)",
      description: "Soothe, heal, and prevent naturally. Dr. Ashu Basist uses Ayurveda-inspired diet plans that reduce inflammation, improve digestion, and prevent constipation with fiber-rich, cooling, and easily digestible foods.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Ayurveda-inspired meal plans",
        "Inflammation reduction",
        "Digestive health improvement",
        "Constipation prevention",
        "Fiber-rich, cooling foods"
      ],
      duration: "6-8 week program",
      price: "$549"
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain & Strength Nutrition",
      description: "Build lean muscle the right way. Dr. Ashu Basist offers personalized high-protein, nutrient-dense plans designed to increase muscle mass, enhance recovery, and improve strength — blending modern sports nutrition with Ayurvedic balance.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "High-protein meal plans",
        "Muscle mass enhancement",
        "Recovery optimization",
        "Strength improvement",
        "Modern + Ayurvedic approach"
      ],
      duration: "12-week program",
      price: "$849"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Consultations & Services</h1>
            <p className="text-xl lg:text-2xl text-orange-50">
              Comprehensive nutrition solutions tailored by Dr. Ashu Basist to your unique health journey
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
                Whether you're looking to lose weight, manage a health condition, or optimize performance, Dr. Ashu Basist provides personalized, evidence-based solutions to guide you.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  id={service.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-mt-24"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-6 text-white">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-500 mb-3 shadow-lg">
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
                          {/* <div className="text-lg font-bold text-orange-300">
                            {service.price}
                          </div> */}
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
                            <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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

      {/* How Diet and Nutrition Help in Controlling Diseases */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How Diet and Nutrition Help in Controlling Diseases
            </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Dr. Ashu Basist believes that the right food can be the most powerful form of medicine. A well-balanced and customized diet plan not only nourishes your body but also helps in preventing and managing various lifestyle disorders naturally.
              </p>
            </div>

            <div className="space-y-12">
              {/* Managing Lifestyle Disorders */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Managing Lifestyle Disorders Through Nutrition
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Many health problems today arise from poor eating habits and imbalanced lifestyles. Through personalized meal planning, Dr. Basist helps manage and even reverse common conditions such as:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Obesity:</strong> Healthy, portion-controlled meals that support sustainable fat loss and improve metabolism.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Diabetes:</strong> Low-glycemic, fiber-rich foods that stabilize blood sugar levels and prevent spikes.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Hypertension:</strong> Diets low in sodium and rich in potassium and magnesium to regulate blood pressure naturally.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Hypothyroidism:</strong> Balanced meals with adequate protein, selenium, zinc, and iodine to support thyroid function.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Dyslipidemia (High Cholesterol):</strong> Inclusion of heart-healthy fats, whole grains, and antioxidants to reduce LDL and improve HDL levels.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Fatty Liver:</strong> Detoxifying foods and reduced sugar intake to improve liver health and function.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Kidney Stones:</strong> Customized fluid and mineral balance to prevent stone formation.</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Piles (Haemorrhoids):</strong> Fiber-rich, Ayurvedic diets that support digestion and relieve constipation naturally.</span>
                  </div>
                </div>
              </div>

              {/* Restoring Balance and Vitality */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Restoring Balance and Vitality
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Dr. Basist focuses on nutrient-rich protocols that help restore your body's natural balance by:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Providing essential vitamins, minerals, and antioxidants</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reducing inflammation and oxidative stress</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Improving digestion and nutrient absorption</span>
                  </div>
                </div>
              </div>

              {/* Ayurvedic Approach */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Ayurvedic Approach to Healing
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Following Ayurvedic principles, Dr. Basist designs each diet plan according to your Prakriti (body constitution) and Dosha balance (Vata, Pitta, Kapha). This holistic approach ensures not only disease management but also overall wellness — balancing the mind, body, and soul.
                </p>
                <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "When diet is wrong, medicine is of no use; when diet is correct, medicine is of no need." — Ayurvedic Proverb
                  </p>
                </div>
              </div>

              {/* Long-Term Wellness */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-10 rounded-2xl shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Long-Term Wellness, Not Short-Term Fixes
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Dr. Basist's goal is not just to control disease symptoms but to help you build a lifetime of healthy habits. He educates and guides you to make mindful food choices that support:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Strong immunity</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Healthy metabolism</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Better energy levels</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Emotional stability and mental clarity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-orange-50 mb-8">
              Take the first step towards better health with a one-to-one consultation from Dr. Ashu Basist.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

