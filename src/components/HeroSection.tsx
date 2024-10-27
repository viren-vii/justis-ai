import FeatureCard from "@/components/FeatureCard";

export default function HeroSection() {
  return (
    <section className="text-left space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        justis<span className="text-[#323EBA]">.ai</span>
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Democratizing legal help with{" "}
        <span className="text-[#323EBA] font-bold">AI</span>.
      </p>
      <div className="text-center text-gray-700 mt-6 border-t pt-6">
        <h2 className="text-xl font-semibold">
          Access to legal help shouldn't be a privilege.
        </h2>
        <p className="text-md">
          Our AI-Driven Legal Aid app is designed to support you by providing{" "}
          <span className="text-blue-600">affordable</span> and{" "}
          <span className="text-yellow-600">accessible</span> legal assistance
          at your fingertips.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-space mt-6 text-center space-y-4 md:space-y-0 md:space-x-6">
        <FeatureCard
          title="The Problem"
          body="Many people lack access to affordable legal services, leaving them without the support they need."
          emoji="⚖️"
        />
        <FeatureCard
          title="Our Solution"
          body="Using AI technology, we provide affordable, accessible, and reliable legal aid to everyone."
          emoji="🤖"
        />
        <FeatureCard
          title="The Impact"
          body="Empowering individuals with legal knowledge and tools to protect their rights."
          emoji="🌍"
        />
      </div>
    </section>
  );
}
