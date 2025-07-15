import Products from "../components/Products"
import ShopFloorFeatures from "../components/ShopFloorFeatures"

export default function ProductsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive automation solutions designed to meet the evolving needs of modern infrastructure.
          </p>
        </div>
      </div>
      <Products />

      <section className="py-16 bg-white">
        <ShopFloorFeatures />
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are built with cutting-edge technology and industry-leading standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Uptime Reliability" },
              { metric: "24/7", label: "Monitoring Support" },
              { metric: "50ms", label: "Response Time" },
              { metric: "256-bit", label: "Encryption Security" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
