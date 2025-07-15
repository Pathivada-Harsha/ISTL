import WhoWeAre from "../components/WhoWeAre"

export default function WhoWeArePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Meet the passionate team behind ISTLabs and learn about our core values and principles.
          </p>
        </div>
      </div>
      <WhoWeAre />

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading innovation in automation technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
                description: "15+ years in automation and smart infrastructure",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
                description: "Expert in IoT and industrial automation systems",
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Engineering",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
                description: "Leading our product development and innovation",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
