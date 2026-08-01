import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet><title>404 – Page Not Found – NetCore Solutions</title></Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg dark:bg-dark-bg px-4 text-center">
        <div className="text-8xl font-bold font-display gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold font-heading text-secondary dark:text-white mb-4">Page Not Found</h1>
        <p className="text-muted dark:text-slate-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
          Back to Home
        </Link>
      </div>
    </>
  );
}
