import { Link } from "react-router-dom";

export default function CustomerCarePage() {
  const highlights = [
    "Effective communication techniques",
    "Active listening & empathy building",
    "Handling customer complaints professionally",
    "CRM software basics (Salesforce, Zendesk)",
    "Email & chat support etiquette",
    "Phone call handling & voice modulation",
    "Ticketing systems & workflow management",
    "Conflict resolution strategies",
    "Customer retention techniques",
    "Quality assurance & performance metrics"
  ];

  const keyFeatures = [
    {
      icon: "🎯",
      title: "Real-world Scenarios",
      desc: "Practice with actual customer service situations and role-play exercises"
    },
    {
      icon: "💼",
      title: "Industry Tools Training",
      desc: "Hands-on experience with popular CRM platforms and helpdesk software"
    },
    {
      icon: "📈",
      title: "Performance Metrics",
      desc: "Learn KPIs and quality standards used in customer service industry"
    }
  ];

  const careerOpportunities = [
    "Customer Service Representative",
    "Call Center Agent",
    "Technical Support Specialist",
    "Help Desk Analyst",
    "Client Relations Executive",
    "Customer Success Associate",
    "Support Team Leader",
    "Quality Analyst"
  ];

  const processTimeline = [
    {
      step: "1",
      title: "Customer Care Training Duration (2-3 Months)",
      desc: "Comprehensive training covering communication to technical support"
    },
    {
      step: "2",
      title: "Mock Calls & Live Practice (2-3 Weeks)",
      desc: "Real-time call simulations and customer interaction practice"
    },
    {
      step: "3",
      title: "Resume Building & Interview Prep (1 Week)",
      desc: "Professional resume creation and interview technique training"
    },
    {
      step: "4",
      title: "Company Interviews & Selection (2-4 Weeks)",
      desc: "Direct interviews with hiring partners and BPO companies"
    },
    {
      step: "5",
      title: "Final Selection & Offer (1-2 Weeks)",
      desc: "Job offer processing and salary negotiation support"
    },
    {
      step: "6",
      title: "Onboarding & Training at Company (2-3 Weeks)",
      desc: "Company-specific onboarding and initial training period"
    }
  ];

  const whyChoose = [
    {
      title: "Voice & accent training",
      desc: "Improve clarity, pronunciation, and professional communication style"
    },
    {
      title: "Real call recordings",
      desc: "Learn from actual customer interactions and best practices"
    },
    {
      title: "BPO-focused curriculum",
      desc: "Training aligned with BPO and call center industry requirements"
    },
    {
      title: "Soft skills development",
      desc: "Master patience, empathy, and professional customer handling"
    },
    {
      title: "Placement in top BPOs",
      desc: "Direct connections with leading customer service companies"
    },
    {
      title: "Shift readiness training",
      desc: "Prepare for rotational shifts and 24/7 support environments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">

               <Link to="/services" className="text-sm font-medium">
                              <span className="text-sm font-medium">🎯 BACK TO SERVICES</span>
                              </Link>
                
              </div>

              <div>
                <p className="text-green-300 mb-2">COMMUNICATION SPECIALIST</p>
                <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                    CUSTOMER CARE
                  </span>
                  <br />
                  <span className="text-white">TRAINING</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    PROGRAM
                  </span>
                </h1>
                <p className="text-xl text-green-200">
                  Master Communication Skills & Land BPO Jobs
                </p>
                <p className="text-green-300 mt-2">Duration: 2-3 Months</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#enroll" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 inline-block">
                  Enroll in this Course / Query
                </a>
                <a href="#schedule" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all inline-block">
                  Training Modules
                </a>
                <a href="#eligibility" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all inline-block">
                  Voice & Accent Training
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:bg-white/10 transition-all inline-block">
                  Email / Contact Us
                </a>
                <a href="#syllabus" className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:bg-white/10 transition-all inline-block">
                  View Curriculum
                </a>
              </div>
            </div>

            {/* Right Content - Highlights Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                <div className="space-y-3 mb-8">
                  {[
                    "Communication & objection handling",
                    "CRM software training (Salesforce, Zendesk)",
                    "Call etiquette & phone skills",
                    "Email & chat support techniques",
                    "Ticketing process & workflow",
                    "Real-world role play scenarios"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-green-200">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-green-300 mb-4">Visit: www.nemesisgroup.in</p>
                  <a href="#enroll" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    Enquire Now →
                  </a>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-500/20 backdrop-blur-md rounded-2xl border border-white/10"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 backdrop-blur-md rounded-2xl border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Covered Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-green-900/20" id="syllabus">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-sm font-semibold mb-4">
              CURRICULUM
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Skills Covered in Customer Care Training
              </span>
            </h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Complete training from basic communication to advanced customer handling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Skills List */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-6">Core Modules</h3>
              <div className="space-y-3">
                {highlights.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex-shrink-0"></div>
                    <span className="text-sm text-green-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Topics */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">🎤 Voice & Communication Training</h3>
                <p className="text-sm text-green-300">
                  Develop clear pronunciation, proper voice modulation, and professional telephone etiquette for effective customer interactions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">💻 CRM & Tools Mastery</h3>
                <p className="text-sm text-green-300">
                  Get hands-on experience with industry-standard CRM platforms, ticketing systems, and customer service software used by top companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20" id="schedule">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-sm font-semibold mb-4">
              PROGRAM BENEFITS
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Customer Care Training</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-green-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Training Schedule Box */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold mb-6">Training Schedule & Format</h3>
            <p className="text-green-200 mb-6">
              Flexible batch timings designed for working professionals and fresh graduates. Choose morning, afternoon, or evening batches.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">60-90 minutes per session</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">6 days a week training schedule</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">Mock calls & live practice sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">Weekly assessments & feedback</span>
              </div>
            </div>
            <a href="#enroll" className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
              View Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-b from-green-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-sm font-semibold mb-4">
              CAREER PATHS
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Career Opportunities in Customer Service
              </span>
            </h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              High-demand roles in BPOs, tech companies, and customer service centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-6">Job Roles</h3>
              <div className="grid grid-cols-2 gap-4">
                {careerOpportunities.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-green-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">📊 Salary & Growth</h3>
                <p className="text-sm text-green-300">
                  Entry-level positions start at ₹15,000-25,000/month with rapid growth opportunities. Senior roles can earn ₹40,000-60,000/month.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">🌟 Industry Demand</h3>
                <p className="text-sm text-green-300">
                  Customer service professionals are always in high demand across BPO, IT, e-commerce, banking, and telecom sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-4">
              ROADMAP
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Training to Placement Journey
              </span>
            </h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Complete pathway from enrollment to job placement in 3-5 months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {processTimeline.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-white/10">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-green-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">⏱️ Quick Placement</h3>
              <p className="text-green-300 text-sm mb-4">
                Most students get placed within 3-5 months of starting the program with immediate interview opportunities after training completion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">🎯 100% Support</h3>
              <p className="text-green-300 text-sm mb-4">
                Dedicated placement team works with you throughout the process with unlimited interview opportunities until placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-b from-transparent to-green-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-sm font-semibold mb-4">
              ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why choose Nemesis Group for Customer Care Training?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="enroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl border border-white/20 p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-10"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Customer Service Career?</h2>
              <p className="text-xl text-green-200 mb-10 max-w-3xl mx-auto">
                Join our comprehensive customer care training program and get placed in top BPO and customer service companies. Start earning while building your communication skills!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105">
                  Enroll Now
                </a>
                <a href="#contact" className="px-10 py-5 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Enroll / Contact
              </span>
            </h2>
            <p className="text-green-300">
              Ready to kickstart your customer service career? Get in touch today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>+91-8808062698</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <span>edu.info@nemesisgroup.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <span>www.nemesisgroup.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-sm">KARADE INFOTECH CENTER, LOHEGAON, PUSAD 445215</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#enroll" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105">
                  Start Today
                </a>
                <a href="#contact" className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
                  SMS Enquiry
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-10">
              <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
              <p className="text-green-200 mb-6">
                Whether you're a fresher looking to enter the customer service industry or want to improve your communication skills, we're here to help you succeed with our proven training methodology.
              </p>
              <p className="font-bold text-lg mb-2">Next Step</p>
              <p className="text-sm text-green-300 mb-6">
                Contact us via call/email for batch details and fee structure. Visit our office for direct counseling and demo class.
              </p>
              <a href="#enroll" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105">
                Contact Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}