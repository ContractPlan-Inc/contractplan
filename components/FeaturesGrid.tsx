export function FeaturesGrid() {
  const features = [
    {
      title: 'AI-powered insights',
      description: 'Detect patterns, risks, and renewal triggers automatically with built-in intelligence.',
    },
    {
      title: 'Visual timelines & dashboards',
      description: 'Get a clear view of obligations, deliverables, and deadlines across all contracts.',
    },
    {
      title: 'Secure file collaboration',
      description: 'Centralize contract documents and enable easy access for all stakeholders.',
    },
    {
      title: 'Automated reminders',
      description: 'Never miss a milestone again with proactive email and in-app alerts.',
    },
    {
      title: 'Granular permissions',
      description: 'Control access by role, contract, or department with a simple click.',
    },
    {
      title: 'Clerk auth integration',
      description: 'Secure login and user management with Clerk built right in.',
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-midnight">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
