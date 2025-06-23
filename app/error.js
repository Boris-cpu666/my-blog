"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
      <h1 className="text-h1 text-error mb-4">500</h1>
      <p className="text-xl mb-8">Oops! Something went wrong.</p>
      <button className="btn btn-primary mb-2" onClick={() => reset()}>Try Again</button>
      <a href="/" className="btn btn-secondary">Back to Home</a>
    </div>
  );
} 