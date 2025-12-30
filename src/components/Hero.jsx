export default function Hero() {
  const items = [
    { icon: "🎯", title: "FOCUS", desc: "Job-ready skills", color: "from-blue-500 to-cyan-500" },
    { icon: "📚", title: "FORMAT", desc: "Practical learning", color: "from-purple-500 to-pink-500" },
    { icon: "🚀", title: "OUTCOME", desc: "Placement support", color: "from-orange-500 to-red-500" },
  ];

  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
     <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-72 md:w-80 h-72 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-72 md:w-80 h-72 md:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT */}
      <div className="space-y-6 md:space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mx-auto lg:mx-0">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">NEMESIS GROUP</span>
        </div>

        <h1 className="font-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            CERTIFIED
          </span>
          <br />
          <span className="text-white">PROFESSIONAL</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            TRAINING
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-purple-200 max-w-xl mx-auto lg:mx-0">
          Guaranteed Interviews & Placement Assurance with Industry-Leading Training Programs
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="group px-7 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>

          <button className="px-7 py-3.5 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
            Explore Services
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-purple-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT – Floating Cards (DESKTOP ONLY) */}
      <div className="hidden lg:flex justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>

        <div className="grid grid-cols-2 gap-6 relative z-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-28 xl:w-32 h-28 xl:h-32 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Feature Cards */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-purple-300">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Contact Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:scale-105 transition-all duration-300">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-4">CONTACT</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span>📞</span> +91-8808062698
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🌐</span> nemesisgroup.in
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✉</span> edu.info@nemesisgroup.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-32 relative" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-4">
              COMPANY OVERVIEW
            </span>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Staffing + Training + Placement
              </span>
              <br />
              <span className="text-white">Support for Freshers</span>
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
             Nemesis Group supports fresher candidates through selection, professional training, and placement assistance — with job-oriented programs that build practical skills, communication, and workplace professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-4 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold mb-4">Fresher-Focused Programs</h3>
                <p className="text-purple-300 leading-relaxed">
                  Designed for candidates starting their careers with zero experience—our programs train freshers in essential workplace skills, soft skills, and domain-specific knowledge.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-4 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-4">Strong Client Network</h3>
                <p className="text-purple-300 leading-relaxed">
                  Direct connections with leading companies ensure our graduates get immediate placement opportunities with competitive packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-sm font-semibold mb-4">
              VISION & MISSION
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Building Future-Ready
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Professionals
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-purple-300 leading-relaxed">
                  To equip every fresher with industry-relevant skills, confidence, and opportunities through personalized mentorship and hands-on training.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-purple-300 leading-relaxed">
                  To become India's leading talent development organization, creating a skilled workforce ready for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Matters */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-sm font-semibold mb-4">
              WHY IT MATTERS
            </span>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Invest in</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Your Future
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 hover:border-orange-500/50 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-2xl font-bold mb-4">Career Growth</h3>
              <p className="text-purple-300 leading-relaxed">
                Continuous learning leads to better opportunities, higher salaries, and long-term career stability in competitive markets.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 hover:border-red-500/50 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-2xl font-bold mb-4">Market Ready Skills</h3>
              <p className="text-purple-300 leading-relaxed">
                Bridge the gap between academic knowledge and industry requirements with practical, hands-on training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Structured Path to
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Identify Gaps", desc: "Assess current skill levels" },
              { num: "02", title: "Set Goals", desc: "Define clear objectives" },
              { num: "03", title: "Hands-On Training", desc: "Practical learning approach" },
              { num: "04", title: "Expert Mentors", desc: "Industry professionals" },
              { num: "05", title: "Track Progress", desc: "Continuous evaluation" },
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-4xl font-black text-white/10 mb-3">{step.num}</div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-purple-300">{step.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-sm font-semibold mb-4">
              PROVEN RESULTS
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">Measurable Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⭐", title: "Engagement", desc: "High learner satisfaction and active participation" },
              { icon: "😊", title: "Experience", desc: "Positive feedback on content and delivery" },
              { icon: "🚀", title: "Success", desc: "Improved employability and career outcomes" },
            ].map((outcome, i) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 hover:scale-105 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{outcome.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{outcome.title}</h3>
                  <p className="text-purple-300">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Term Impact */}
      <section className="py-0 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-sm font-semibold mb-4">
              DEVELOPMENT
            </span>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Lifelong Growth
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl border border-white/10 p-10">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-2xl font-bold mb-4">Soft Skills Mastery</h3>
              <p className="text-purple-300 leading-relaxed">
                Communication, teamwork, time management, and professional etiquette that set you apart in any workplace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl border border-white/10 p-10">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4">Career Advancement</h3>
              <p className="text-purple-300 leading-relaxed">
                Build a foundation for continuous growth, promotions, and leadership opportunities throughout your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-4">
              PROGRAMS
            </span>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Choose Your</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Path
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "HR Training",
                desc: "Recruitment, payroll, labor laws, and HR operations",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Customer Care",
                desc: "Communication, call handling, and client management",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Banking & Finance",
                desc: "Financial products, KYC-AML, and banking fundamentals",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Soft Skills Development",
                desc: "Communication, teamwork, and professional etiquette",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Industry-Oriented Training",
                desc: "Domain-specific on-job training with experts",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Placement Support",
                desc: "Resume building, interviews, and job placement",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-white/30 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{prog.title}</h3>
                    <p className="text-purple-300 text-sm">{prog.desc}</p>
                  </div>
                  <div className="text-2xl text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-4" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl border border-white/20 p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Talk to us for training and placement support</h2>
              <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                Reach out for program details, schedules, and placement assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                 View Services
                </button>
                <a href="#about" className="px-10 py-5 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                  About Us 
                </a>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+91-8808062698</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉</span>
                    <span>edu.info@nemesisgroup.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🌐</span>
                    <span>www.nemesisgroup.in</span>
                  </div>

                   <div className="flex items-center gap-2">
                    <span>🌐</span>
                    <span>TAJPUR ROAD HUNDAL CHOWK LUDHIANA, PUNJAB 141015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}