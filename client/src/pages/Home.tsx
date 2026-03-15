export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Creative Web Design Agency
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We craft stunning digital experiences that elevate your brand and engage your audience
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-3">Design</h3>
            <p className="text-gray-400">
              Beautiful, modern designs that capture your brand's essence and resonate with your target audience
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Development</h3>
            <p className="text-gray-400">
              Fast, responsive websites built with cutting-edge technologies for optimal performance
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Launch</h3>
            <p className="text-gray-400">
              Seamless deployment and ongoing support to ensure your digital presence thrives
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Digital Presence?</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get Started Today
          </button>
        </section>
      </div>
    </div>
  );
}
