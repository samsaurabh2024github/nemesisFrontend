import { Link } from "react-router-dom";

export default function HRTrainingPage() {
  const highlights = [
    "Recruitment & selection process",
    "Onboarding & orientation of new hires",
    "Employee engagement and retention",
    "Payroll management",
    "HRMS software basics",
    "Performance appraisal systems",
    "Compensation & benefits overview",
    "Labour law and statutory compliance",
    "Exit interviews and exit procedures",
    "HR analytics and data management"
  ];

  const keyFeatures = [
    {
      icon: "📚",
      title: "Structured Curriculum",
      desc: "Step-by-step modules covering all HR fundamentals and practical applications"
    },
    {
      icon: "📊",
      title: "Placement & Salary Hike Prep",
      desc: "Interview preparation and resume building for better opportunities"
    },
    {
      icon: "🎓",
      title: "Learning Support",
      desc: "Continuous guidance and doubt-clearing sessions throughout the program"
    }
  ];

  const careerOpportunities = [
    "HR Executive",
    "Recruiter",
    "Payroll Specialist",
    "HR Coordinator",
    "Talent Acquisition Specialist",
    "HR Administrator",
    "Onboarding Specialist",
    "HRIS Analyst"
  ];

  const processTimeline = [
    {
      step: "1",
      title: "HR Training Duration (3-4 Months)",
      desc: "Comprehensive training covering all HR fundamentals"
    },
    {
      step: "2",
      title: "Practical Exposure & Assessments (1-2 Months)",
      desc: "Hands-on projects and regular skill assessments"
    },
    {
      step: "3",
      title: "Resume Preparation & Profile Building (2-3 Days)",
      desc: "Professional resume creation and LinkedIn optimization"
    },
    {
      step: "4",
      title: "Interview Scheduling (3-4 Weeks)",
      desc: "Connect with hiring companies for placement"
    },
    {
      step: "5",
      title: "Interview Rounds & Selection (1-2 Months)",
      desc: "Multiple interview rounds with placement support"
    },
    {
      step: "6",
      title: "Onboarding & Joining the Company (2-4 Weeks)",
      desc: "Final documentation and joining formalities"
    }
  ];

  const whyChoose = [
    {
      title: "Industry-oriented teaching",
      desc: "Curriculum designed by HR professionals for real-world readiness"
    },
    {
      title: "Professional certification",
      desc: "Recognized certificate upon course completion"
    },
    {
      title: "Experienced trainers",
      desc: "Learn from industry experts with years of HR experience"
    },
    {
      title: "Practical learning approach",
      desc: "Focus on case studies and real HR scenarios"
    },
    {
      title: "Guaranteed interviews",
      desc: "Access to our network of hiring companies"
    },
    {
      title: "Placement assistance",
      desc: "End-to-end support from training to job placement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                <p className="text-purple-300 mb-2">SPECIALIST COURSE</p>
                <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    HR – HUMAN
                  </span>
                  <br />
                  <span className="text-white">RESOURCE</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    CERTIFICATION
                  </span>
                  <br />
                  <span className="text-white">COURSE</span>
                </h1>
                <p className="text-xl text-purple-200">
                  Guaranteed Interviews & Placement Assurance
                </p>
                <p className="text-purple-300 mt-2">Duration: 3-4 Months</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#enroll" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 inline-block">
                  Enroll in this Course / Query
                </a>
                <a href="#schedule" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all inline-block">
                  Know Training & Modules
                </a>
                <a href="#eligibility" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all inline-block">
                  Perfect for Beginners
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:bg-white/10 transition-all inline-block">
                  Email / Contact Us
                </a>
                <a href="#syllabus" className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:bg-white/10 transition-all inline-block">
                  View Skills Covered
                </a>
              </div>
            </div>

            {/* Right Content - Highlights Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold mb-6">Highlights</h3>
                <div className="space-y-3 mb-8">
                  {[
                    "Recruitment & selection & interview prep",
                    "Payroll management",
                    "Employee engagement & retention",
                    "HRMS software",
                    "HR compliance and Labour Law",
                    "Practical exercises with feedback"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-purple-200">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-purple-300 mb-4">Visit: www.nemesisgroup.in</p>
                  <a href="#enroll" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    Enquire Now →
                  </a>
                </div>
              </div>

              {/* Floating Images Placeholder */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/20 backdrop-blur-md rounded-2xl border border-white/10"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 backdrop-blur-md rounded-2xl border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Covered Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20" id="syllabus">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-4">
              CURRICULUM
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Skills Covered in Human Resource
              </span>
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              Comprehensive HR training covering recruitment to compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Skills List */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-6">Core Modules</h3>
              <div className="space-y-3">
                {highlights.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></div>
                    <span className="text-sm text-purple-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Topics */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">📈 Core Training + Practical Exposure</h3>
                <p className="text-sm text-purple-300">
                  In-depth theoretical knowledge combined with hands-on practice to prepare you for real HR challenges.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">📊 Certification + Placement Support</h3>
                <p className="text-sm text-purple-300">
                  Receive industry-recognized certification and get placed in top companies with our dedicated placement team.
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
            <span className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-sm font-semibold mb-4">
              PROGRAM BENEFITS
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Human Resource Training</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Training Schedule Box */}
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold mb-6">Online Training Schedule</h3>
            <p className="text-purple-200 mb-6">
              Flexible online classes designed to fit your schedule. Join from anywhere and learn at your own pace with live doubt-clearing sessions.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-sm">45 Min to 1 HR duration per session</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-sm">6 Days a week (Monday to Saturday)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-sm">Assignments & assessments</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-sm">Live doubt-solving sessions</span>
              </div>
            </div>
            <a href="#enroll" className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
              Get Certification Authority
            </a>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-sm font-semibold mb-4">
              CAREER PATHS
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Career Opportunities After HR Training
              </span>
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              Wide range of HR roles waiting for you across various companies in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-6">Job Roles</h3>
              <div className="grid grid-cols-2 gap-4">
                {careerOpportunities.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-purple-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                    <span className="text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">💼 Scope after growth</h3>
                <p className="text-sm text-purple-300">
                  With experience, HR professionals can advance to senior roles like HR Manager, HR Business Partner, and eventually VP of Human Resources.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4">🌟 Certification + profile optimization</h3>
                <p className="text-sm text-purple-300">
                  Industry-recognized certification strengthens your resume and online profiles, making you more attractive to potential employers.
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
            <span className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-sm font-semibold mb-4">
              ROADMAP
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Process & Timeline After HR Certification
              </span>
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              Step-by-step journey from enrollment to placement in 6-8 months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {processTimeline.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-white/10">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-purple-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">📅 Total time to get placed</h3>
              <p className="text-purple-300 text-sm mb-4">
                From training start to final placement typically takes 6-8 months including all preparation, interviews, and joining formalities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">🤝 Continuous support</h3>
              <p className="text-purple-300 text-sm mb-4">
                Our placement team provides ongoing assistance throughout your job search journey with interview preparation and company connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold mb-4">
              ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why choose Nemesis Group for HR Training?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="enroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl border border-white/20 p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-10"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Start your HR career with confidence</h2>
              <p className="text-xl text-purple-200 mb-10 max-w-3xl mx-auto">
                Get trained by industry experts, earn a recognized certification, and land your dream HR job with our placement support. Whether you're starting fresh or upskilling, we're here to guide you every step.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Enroll / Contact
              </span>
            </h2>
            <p className="text-purple-300">
              For any queries or to start your HR training journey, reach out to us today
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
                <a href="#enroll" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                  Start Today
                </a>
                <a href="#contact" className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
                  SMS Enquiry
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-white/20 p-10">
              <h3 className="text-2xl font-bold mb-4">Thank you for exploring!</h3>
              <p className="text-purple-200 mb-6">
                Whether you're looking to start your HR career or transition into Human Resources, we're here to support your professional transformation with comprehensive training and guaranteed placement assistance.
              </p>
              <p className="font-bold text-lg mb-2">Next Step</p>
              <p className="text-sm text-purple-300 mb-6">
                Contact us via call/email for program guidance. Check our calendar or submit applications via office directly.
              </p>
              <a href="#enroll" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
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