import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="WELCOME BACK"
      title="Good to see you."
      description="Pick up where your curiosity left off."
      alternateText="New around here?"
      alternateLabel="Create an account"
      alternateHref="/auth/register"
    >
      <LoginForm />
    </AuthLayout>
  );
}
