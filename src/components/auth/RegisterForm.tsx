"use client";

import { authClient } from "@/lib/auth-client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    if (isGoogleLoading) return;
    setIsGoogleLoading(true);
    setError("");

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard", // where to land after Google auth
      });
    } catch (err) {
      console.error(err);
      toast.error("Google sign-in failed. Please try again.");
      setIsGoogleLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

    const formData = new FormData(event.currentTarget);
    const values: RegisterValues = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      password: String(formData.get("password") ?? ""),
      confirmPassword: String(formData.get("confirmPassword") ?? ""),
    };

    // ---- validation FIRST ----
    if (!values.fullName) {
      setError("Enter your full name.");
      return;
    }
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (values.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (values.password !== values.confirmPassword) {
      setError("Those passwords don't match. Try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: values.email,
        password: values.password, // ✅ actual password, not confirmPassword
        name: values.fullName,
        callbackURL: "/dashboard", // redirect after email verification
      });

      if (authError) {
        toast.error(authError.message ?? "Registration failed.");
        setError(authError.message ?? "Registration failed.");
        return;
      }

      if (data) {
        toast.success("Registration successful! Check your email to verify.");
        // Optionally: router.push("/auth/login")
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <label className="form-field">
        <span>Full name</span>
        <span className="input-wrap">
          <span className="input-icon" aria-hidden="true">◉</span>
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </span>
      </label>

      <label className="form-field">
        <span>Email address</span>
        <span className="input-wrap">
          <span className="input-icon" aria-hidden="true">✉</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </span>
      </label>

      <label className="form-field">
        <span>Password</span>
        <span className="input-wrap">
          <span className="input-icon input-lock" aria-hidden="true">⌑</span>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
          />
          <button
            className="password-toggle"
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </span>
      </label>

      <label className="form-field">
        <span>Confirm password</span>
        <span className="input-wrap">
          <span className="input-icon input-lock" aria-hidden="true">⌑</span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Enter your password again"
            autoComplete="new-password"
            required
          />
          <button
            className="password-toggle"
            type="button"
            onClick={() => setShowConfirmPassword((s) => !s)}
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </span>
      </label>

      {error && <p className="form-error" role="alert">{error}</p>}

      <button
        className="button button-primary auth-submit"
        type="submit"
        disabled={isSubmitting || isGoogleLoading}
      >
        {isSubmitting ? (
          <><span className="button-spinner" /> Creating account...</>
        ) : (
          <>Create account <span aria-hidden="true">→</span></>
        )}
      </button>

      {/* Divider */}
      <div className="auth-divider">
        <span>or continue with</span>
      </div>

      {/* Google button */}
      <button
        type="button"
        className="button button-google"
        onClick={handleGoogleLogin}
        disabled={isGoogleLoading || isSubmitting}
      >
        {isGoogleLoading ? (
          <><span className="button-spinner" /> Connecting...</>
        ) : (
          <>
            <GoogleIcon />
            Continue with Google
          </>
        )}
      </button>

      <p className="form-disclaimer">
        By continuing you agree to our Terms &amp; Privacy Policy.
      </p>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C40.9 35.7 44 30.6 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}