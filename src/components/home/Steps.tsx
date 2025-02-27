export function Step({ number, title, description }: {
    number: number;
    title: string;
    description: string;
  }) {
    return (
      <div className="relative text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white text-xl font-bold mb-4 relative z-10">
          {number}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }