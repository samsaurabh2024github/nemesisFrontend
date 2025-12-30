import React from 'react'

const Contact = () => {
  return (
    <>
   
    
      <section className="py-24 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" id="contact" >
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
      </section>
 </>
  
  )
}

export default Contact