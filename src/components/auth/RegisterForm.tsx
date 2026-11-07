"use client";

import { FormEvent, useState } from "react";

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
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

    if (!values.fullName) {
      setError("Enter your full name.");
      return;
    }
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!values.password) {
      setError("Create a password.");
      return;
    }
    if (values.password !== values.confirmPassword) {
      setError("Those passwords don’t match. Try again.");
      return;
    }

    setIsSubmitting(true);
    console.log("Registration form submitted:", values);
    window.setTimeout(() => setIsSubmitting(false), 700);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <label className="form-field">
        <span>Full name</span>
        <span className="input-wrap"><span className="input-icon" aria-hidden="true">◉</span><input type="text" name="fullName" placeholder="Your name" autoComplete="name" required /></span>
      </label>
      <label className="form-field">
        <span>Email address</span>
        <span className="input-wrap"><span className="input-icon" aria-hidden="true">✉</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></span>
      </label>
      <label className="form-field">
        <span>Password</span>
        <span className="input-wrap"><span className="input-icon input-lock" aria-hidden="true">⌑</span><input type={showPassword ? "text" : "password"} name="password" placeholder="Create a password" autoComplete="new-password" required /><button className="password-toggle" type="button" onClick={() => setShowPassword((shown) => !shown)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button></span>
      </label>
      <label className="form-field">
        <span>Confirm password</span>
        <span className="input-wrap"><span className="input-icon input-lock" aria-hidden="true">⌑</span><input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Enter your password again" autoComplete="new-password" required /><button className="password-toggle" type="button" onClick={() => setShowConfirmPassword((shown) => !shown)} aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}>{showConfirmPassword ? "Hide" : "Show"}</button></span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary auth-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><span className="button-spinner" /> Creating preview...</> : <>Create account <span aria-hidden="true">→</span></>}</button>
      <p className="form-disclaimer">Frontend preview only — your details aren&apos;t saved.</p>
    </form>
  );
}
