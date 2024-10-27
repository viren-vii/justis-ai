import { LoginForm } from "@/components/login-form";
import HeroSection from "@/components/HeroSection";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <HeroSection />
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}