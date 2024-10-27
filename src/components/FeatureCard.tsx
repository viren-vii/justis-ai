interface FeatureCardProps {
    title: string;
    body: string;
    emoji: string;
  }
  
  export default function FeatureCard({ title, body, emoji }: FeatureCardProps) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-yellow-500 text-2xl mb-2">{emoji}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    );
  }
  