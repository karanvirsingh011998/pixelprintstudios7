export function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <div className="card p-6 text-center">
        <div className="flex justify-center text-indigo-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }