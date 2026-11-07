import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      eyebrow="START SOMETHING GOOD"
      title="Join the journey."
      description="Create your account and keep building with us."
      alternateText="Already have an account?"
      alternateLabel="Sign in"
      alternateHref="/auth/login"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
