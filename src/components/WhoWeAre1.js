const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    />
  </svg>
)

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A team of dedicated engineers and innovators committed to revolutionizing automation technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="mb-4 text-blue-600 mx-auto">
              <ShieldIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide reliable, innovative automation solutions that enhance efficiency, reduce costs, and contribute
              to sustainable infrastructure development.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="mb-4 text-blue-600 mx-auto">
              <ZapIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading automation company that transforms traditional infrastructure into smart, connected
              systems for a better tomorrow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="mb-4 text-blue-600 mx-auto">
              <SettingsIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, quality, reliability, and customer satisfaction drive everything we do. We believe in building
              long-term partnerships through excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
