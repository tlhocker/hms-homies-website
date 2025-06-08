import Link from 'next/link';

export default function InsightsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow">
        Insights & Articles
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass-card p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-2">How AI is Transforming Healthcare</h2>
          <p className="text-gray-400 mb-4 flex-1">Explore the latest breakthroughs in AI-driven diagnostics, patient care, and medical research.</p>
          <Link href="#" className="text-blue-400 hover:underline mt-auto">Coming soon</Link>
        </div>
        <div className="glass-card p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-2">Building Your First AI Project</h2>
          <p className="text-gray-400 mb-4 flex-1">A step-by-step guide for beginners to launch their own machine learning applications.</p>
          <Link href="#" className="text-blue-400 hover:underline mt-auto">Coming soon</Link>
        </div>
        <div className="glass-card p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-2">The Future of AI Education</h2>
          <p className="text-gray-400 mb-4 flex-1">How collaborative learning and open resources are shaping the next generation of AI leaders.</p>
          <Link href="#" className="text-blue-400 hover:underline mt-auto">Coming soon</Link>
        </div>
      </div>
    </div>
  );
} 