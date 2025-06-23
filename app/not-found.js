export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
      <h1 className="text-h1 text-primary mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary">Back to Home</a>
    </div>
  );
} 