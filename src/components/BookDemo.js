const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function BookDemo() {
  return (
    <section id="demo" className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Experience the power of our automation solutions firsthand. Book a personalized demo and discover how we can
          optimize your operations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <PhoneIcon className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-blue-100">+91-63013 77549</p>
          </div>
          <div className="text-center">
            <MailIcon className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-blue-100">info@istlabs.in</p>
          </div>
          <div className="text-center">
            <MapPinIcon className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-blue-100">133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India</p>
          </div>
        </div>

        <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium">
          <a href="/book-demo" >
            ScheduleYour Demo
          </a>
        </button>
      </div>
    </section>
  )
}
