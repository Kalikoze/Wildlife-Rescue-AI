import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-primary flex items-center overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-accent-orange rounded-full blur-3xl"></div>
      </div>

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl">
          <header>
            <span className="inline-block mb-4 text-accent-green font-medium tracking-wide uppercase text-sm">
              WildWatch AI
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-light sm:text-6xl lg:text-7xl">
              Intelligent{' '}
              <span className="text-accent-green">Wildlife</span>{' '}
              Monitoring with{' '}
              <span className="text-accent-orange">AI</span>
            </h1>
          </header>

          <p className="mb-12 text-xl text-neutral-light/80 lg:text-2xl font-light leading-relaxed">
            Empowering zoos, sanctuaries, and educators with AI-powered video analysis to better understand and protect animal behavior.
          </p>

          <nav className="flex flex-wrap gap-6">
            <Link
              href="/dashboard"
              className="group inline-flex items-center px-8 py-4 text-base font-medium text-neutral-light bg-accent-orange hover:bg-accent-orange-dark rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center px-8 py-4 text-base font-medium text-accent-green border-2 border-accent-green hover:bg-accent-green hover:text-primary rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
            </Link>
          </nav>
        </article>
      </main>
    </section>
  )
} 