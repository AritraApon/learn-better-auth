"use client";

import { authClient } from "@/lib/auth-client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type LoginValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

    const formData = new FormData(event.currentTarget);
    const values: LoginValues = {
      email: String(formData.get("email") ?? "").trim(),
      password: String(formData.get("password") ?? ""),
    };

    const { data, error } = await authClient.signIn.email({
        /**
         * The user emailt
         */
        email:values.email,
        /**
         * The user password
         */
        password : values.password,
        /**
         * A URL to redirect to after the user verifies their email (optional)
         */
        callbackURL: "/",
        /**
         * remember the user session after the browser is closed.
         * @default true
         */
        rememberMe: false
}, {
    //callbacks
})

    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!values.password) {
      setError("Enter your password.");
      return;
    }

     if(data){
      toast.success("Login successful");
     }
     if(error){
      toast.error(error.message)
     }

    setIsSubmitting(true);
    console.log("Login form submitted:", { ...values, rememberMe: formData.get("remember") === "on" });
    window.setTimeout(() => setIsSubmitting(false), 700);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <label className="form-field">
        <span>Email address</span>
        <span className="input-wrap"><span className="input-icon" aria-hidden="true">✉</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></span>
      </label>
      <label className="form-field">
        <span>Password</span>
        <span className="input-wrap"><span className="input-icon input-lock" aria-hidden="true">⌑</span><input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" autoComplete="current-password" required /><button className="password-toggle" type="button" onClick={() => setShowPassword((shown) => !shown)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button></span>
      </label>
      <div className="form-options"><label className="remember-label"><input type="checkbox" name="remember" /><span className="custom-checkbox" /> Remember me</label><button className="forgot-link" type="button">Forgot password?</button></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary auth-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><span className="button-spinner" /> Signing in...</> : <>Sign in <span aria-hidden="true">→</span></>}</button>
      <p className="form-disclaimer">Frontend preview only — no account or session is created.</p>
    </form>
  );
}
