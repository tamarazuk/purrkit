"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="bg-gradient-to-b from-base-100 to-secondary/10 py-24 px-4"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-base-content md:text-5xl">
          Less spreadsheet chaos.
          <br />
          More time for cats.
        </h2>
        <p className="mb-10 text-lg text-base-content/70">
          Get updates as we ship the generator and the ops portal.
        </p>

        <form
          className="join w-full max-w-md shadow-xl"
          onSubmit={onSubmit}
        >
          <input
            className="input input-bordered validator join-item w-full"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            disabled={status === "loading"}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            aria-label="Email address"
          />
          <button
            className="btn btn-secondary join-item px-8"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="loading loading-spinner loading-sm" aria-label="Loading" />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        <p className="validator-hint mt-2 text-xs">Please enter a valid email address</p>

        {status === "success" ? (
          <p className="mt-4 text-xs text-base-content/70">
            Thanks! You’re on the list.
          </p>
        ) : status === "error" ? (
          <p className="mt-4 text-xs text-error">
            Something went wrong. Please try again.
          </p>
        ) : (
          <p className="mt-4 text-xs text-base-content/50">No spam. Just product updates.</p>
        )}
      </div>
    </section>
  );
}
