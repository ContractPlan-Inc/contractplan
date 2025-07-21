export function FeaturesGrid() {
  const features = [
    {
      title: 'AI-Powered Contract Insights',
      description: 'Detect patterns, risks, and renewal triggers automatically with built-in intelligence.',
    },
    {
      title: 'Visual Timelines & Dashboards',
      description: 'Get a clear view of obligations, deliverables, and deadlines across all contracts.',
    },
    {
      title: 'Secure File Collaboration',
      description: 'Centralize contract documents and enable easy access for all stakeholders.',
    },
    {
      title: 'Automated Reminders',
      description: 'Never miss a milestone again with proactive email and in-app alerts.',
    },
    {
      title: 'Granular Permissions',
      description: 'Control access by role, contract, or department with a simple click.',
    },
    {
      title: 'Clerk Auth Integration',
      description: 'Secure login and user management with Clerk built right in.',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-midnight mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
