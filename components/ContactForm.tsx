"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "The message didn't send.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The message didn't send.");
    }
  }

  const field =
    "w-full border border-line bg-bg px-4 py-3 text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  if (status === "sent") {
    return (
      <div role="status" className="hover-red cut border border-pass/50 bg-surface p-8">
        <p className="font-display text-3xl uppercase">Message sent</p>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply to the email address you gave.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-medium text-accent hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="hover-red space-y-4 cut border border-line bg-surface p-7 sm:p-8" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">Name</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">Message</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} className={field} placeholder="What would you like to talk about?" />
      </label>
      {/* Honeypot: hidden from people, filled in by bots */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status === "error" && (
        <p role="alert" className="text-sm text-rose">
          {error} You can also email me directly at{" "}
          <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-slash w-full bg-accent py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-accent-fg transition-colors hover:bg-pass disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
