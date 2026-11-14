import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

export const LoginPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main id="main-content" className="section-space flex items-center justify-center min-h-[75vh]">
      <div className="container-shell max-w-md w-full">
        <div className="surface-card p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="info">Account access</Badge>
            <h1 className="text-2xl font-semibold text-forest-950">
              Welcome back to Leaf &amp; Root
            </h1>
            <p className="text-xs text-text-secondary">
              Sign in to review your saved plants, schedules, and care logs.
            </p>
          </div>

          {submitted ? (
            <div className="p-5 bg-success-soft border border-success-border rounded-xl text-center text-xs text-success-strong space-y-3">
              <Check className="size-6 mx-auto text-success-strong" />
              <p className="font-semibold text-sm">Welcome back!</p>
              <p>You have signed in to your plant care workspace.</p>
              <Button to="/plant-care-ai" size="sm" fullWidth={true}>
                Go to Plant Care &amp; AI
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1 text-forest-950">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-forest-950">Password</label>
                  <span className="text-forest-700 hover:underline cursor-pointer">Forgot?</span>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
                />
              </div>

              <Button type="submit" fullWidth={true} size="lg">
                Sign in to your account
              </Button>

              <p className="text-center text-text-subtle pt-2">
                Don&apos;t have an account yet?{" "}
                <Link to="/signup" className="text-forest-800 font-semibold hover:underline">
                  Sign up free
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export const SignupPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content" className="section-space flex items-center justify-center min-h-[75vh]">
      <div className="container-shell max-w-md w-full">
        <div className="surface-card p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="success">Free registration</Badge>
            <h1 className="text-2xl font-semibold text-forest-950">Start your plant collection</h1>
            <p className="text-xs text-text-secondary">
              Create your free Leaf &amp; Root account to save plants and build personalized
              schedules.
            </p>
          </div>

          {submitted ? (
            <div className="p-5 bg-success-soft border border-success-border rounded-xl text-center text-xs text-success-strong space-y-3">
              <Check className="size-6 mx-auto text-success-strong" />
              <p className="font-semibold text-sm">Account created successfully!</p>
              <p>Your plant care profile is ready to explore.</p>
              <Button to="/plant-care-ai" size="sm" fullWidth={true}>
                Open Plant Care &amp; AI
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1 text-forest-950">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1 text-forest-950">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1 text-forest-950">Password</label>
                <input
                  type="password"
                  required
                  placeholder="Create a password"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
                />
              </div>

              <Button type="submit" fullWidth={true} size="lg">
                Create Free Account
              </Button>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-text-subtle text-[11px]">
                <ShieldCheck className="size-3.5 text-forest-600" />
                <span>No credit card required. Free for up to 10 plants.</span>
              </div>

              <p className="text-center text-text-subtle pt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-forest-800 font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};
