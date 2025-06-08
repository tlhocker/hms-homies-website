import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS Homies AI Collective",
  description: "A community for Harvard alumni to learn, build, and collaborate in the world of AI.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen relative`}>
        {/* Animated Particles Background */}
        <ParticlesBackground />
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          {/* Animated grid is handled by CSS */}
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent" />
          
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-50" 
            style={{ 
              backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8+vz8/vzd2ccSAAAABnRSTlMAoKAgYGBgGDtP5AAAASxJREFUOMtjYBgFgzYECAryi3GzC4qxszMwmHNwcEiL8TmAGOwcEL4EO4QhxgFhiLGzQxgS7BB1iuzs7OzCyQwMgkpKSkzKSkpK7AwMzMnJyUJgyMTAwJWcnMyTnJzMwsDAnZzMlZyczMXAwA1UCwSMQMDEwAoE6sYMDAL6+voM+vrJlUAGn76+vrpycjIPAwOrvr6+IL++vrEQAwOzpb6+IL++vrEQAwOjVIiIvnGysjADA5OUlBQbkC/FwMAqJSXFJCUlxcrAwColJcUgJSXFxMDAICkpyQ8MSElJMTMwMEpKSvKJiooKMzIwMEtKSrJLSkqyMTAwSUpKskpKSrIyMDBKSUmxS0pKMjMwMEhJSbFLSUkxMTAwMEpJSQkxMDAwMkhJSbEzMDAMp/AHAAY1/msjJ8UYAAAAAElFTkSuQmCC)',
              backgroundRepeat: 'repeat',
            }} 
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <main className="pt-24">
            {children}
          </main>
        </div>

        {/* Glow Effects */}
        <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </body>
    </html>
  );
}
