import { Link } from "react-router-dom";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "HR Training",
      description: "Recruitment, onboarding, HR operations, HRMS basics, compliance overview, interview preparation.",
      icon: "💼",
       link: "/services/hr-training",
      details: [
        "Recruitment & Selection Process",
        "Employee Onboarding & Offboarding",
        "HR Operations & Administration",
        "HRMS & Payroll Basics",
        "Labor Law Compliance",
        "Interview Techniques & Preparation"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Customer Care Training",
      description: "Communication, objection handling, ticketing process, CRM basics, call etiquette, role plays.",
      icon: "📞",
          link: "/services/customer-care",
      details: [
        "Effective Communication Skills",
        "Customer Service Excellence",
        "Objection Handling Techniques",
        "CRM Software Training",
        "Call Etiquette & Phone Skills",
        "Real-world Role Play Scenarios"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
  
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Placement-oriented training programs designed for interview readiness and practical job skills.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 p-10">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                      <p className="text-purple-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></div>
                        <span className="text-sm text-purple-200">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold border border-white/20 transition-all hover:scale-105"
                  >
                    <span>Learn More</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-2 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Complete Training
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Trainers",
                description: "Learn from industry professionals with years of practical experience"
              },
              {
                icon: "💼",
                title: "Job-Ready Skills",
                description: "Focus on practical skills that employers actually look for"
              },
              {
                icon: "🤝",
                title: "Placement Support",
                description: "Direct placement assistance through our corporate network"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">
              How It
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Enroll", desc: "Choose your program" },
              { num: "02", title: "Learn", desc: "Hands-on training" },
              { num: "03", title: "Practice", desc: "Real-world projects" },
              { num: "04", title: "Get Hired", desc: "Placement support" }
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all group"
              >
                <div className="text-5xl font-black text-white/10 mb-4">{step.num}</div>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                <p className="text-sm text-purple-300">{step.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
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