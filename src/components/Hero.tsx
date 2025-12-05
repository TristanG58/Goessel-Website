import { Phone, Calendar, ChevronDown, Award, Clock, Shield } from 'lucide-react'

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#termin')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollDown = () => {
    const element = document.querySelector('#trust')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {/* Circuit Lines Decoration */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-20 hidden lg:block">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 100 H80 V40 H140" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 160 H100 V100 H160 V60" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="80" cy="40" r="6" fill="#F59E0B"/>
            <circle cx="160" cy="60" r="6" fill="#F59E0B"/>
            <circle cx="20" cy="100" r="4" fill="#F59E0B"/>
            <circle cx="60" cy="160" r="4" fill="#F59E0B"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-4 md:mb-8 animate-fade-in">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="tracking-wide uppercase">Elektromeister in Balve</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-white mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ihr Elektriker für{' '}
            <span className="text-accent">zuverlässige</span>{' '}
            Arbeit.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light mb-6 md:mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Von der Steckdose bis zur Photovoltaik – persönlich, schnell, fair.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToBooking} className="btn-primary text-sm md:text-lg w-full sm:w-auto !py-3 !px-5 md:!py-4 md:!px-8">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Kostenlosen Termin buchen
            </button>
            <a
              href="tel:+492375205268"
              className="btn-ghost w-full sm:w-auto !py-2.5 !px-4 md:!py-3 md:!px-6 text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              02375 205268
            </a>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 text-white/70 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Meisterbetrieb</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Faire Preise</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Schnelle Termine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow cursor-pointer hidden sm:block"
        aria-label="Nach unten scrollen"
      >
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-xs md:text-sm font-medium tracking-wide">Mehr erfahren</span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </button>
    </section>
  )
}

export default Hero
