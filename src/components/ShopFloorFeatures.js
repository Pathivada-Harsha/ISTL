// Icon components
const ActivityIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const PieChartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
    />
  </svg>
)

const Tv2Icon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const BellRingIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-5 5v-5zM4.868 19.718A8.966 8.966 0 0112 16a8.966 8.966 0 017.132 3.718M6.343 14.457A5.978 5.978 0 0112 12a5.978 5.978 0 015.657 2.457"
    />
  </svg>
)

const TrendingUpIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const BadgeCheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const BarChart3Icon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const SmartphoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
    />
  </svg>
)

const features = [
  {
    icon: Tv2Icon,
    title: "Unified Visibility",
    description: "Access all device and system data through a centralized dashboard.",
  },
  {
    icon: ActivityIcon,
    title: "Live KPI Tracking",
    description: "Track key performance indicators such as uptime, downtime, and load in real time.",
  },
  {
    icon: BellRingIcon,
    title: "Proactive Alerts",
    description: "Receive timely alerts for faults, disconnections, or unusual activity.",
  },
  {
    icon: BarChart3Icon,
    title: "Historical Data Insights",
    description: "Review historical trends to evaluate performance and identify inefficiencies.",
  },
  {
    icon: PieChartIcon,
    title: "Data Analytics",
    description: "Visualize consumption patterns, usage statistics, and system behavior.",
  },
  {
    icon: TrendingUpIcon,
    title: "Trend Analysis",
    description: "Detect recurring issues or usage trends for long-term planning.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Quality Monitoring",
    description: "Monitor power quality parameters to ensure compliance and reliability.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile Access",
    description: "Monitor and manage systems remotely through mobile-friendly views.",
  },
];


const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon className="icon" />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
)

export default function ShopFloorFeatures() {
  return (
    <div className="shop-floor-container">
      <header className="header">
        <h1 className="main-title">
          Everything You Need for  <span className="highlight">Smarter Infrastructure </span>
        </h1>
      </header>
      <main>
        <div className="features-grid">
          {/* First row */}
          <div className="intro-card">
            <div className="intro-accent"></div>
            <h2 className="intro-title">Why Choose ISTL Intelligence?</h2>
          </div>
          <FeatureCard icon={features[0].icon} title={features[0].title} description={features[0].description} />
          <FeatureCard icon={features[1].icon} title={features[1].title} description={features[1].description} />

          {/* Second row */}
          <FeatureCard icon={features[2].icon} title={features[2].title} description={features[2].description} />
          <FeatureCard icon={features[3].icon} title={features[3].title} description={features[3].description} />
          <FeatureCard icon={features[4].icon} title={features[4].title} description={features[4].description} />

          {/* Third row */}
          <FeatureCard icon={features[5].icon} title={features[5].title} description={features[5].description} />
          <FeatureCard icon={features[6].icon} title={features[6].title} description={features[6].description} />
          <FeatureCard icon={features[7].icon} title={features[7].title} description={features[7].description} />
        </div>
      </main>
    </div>
  )
}
