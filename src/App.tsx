/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import DigitalCard from './components/DigitalCard';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50 selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <DigitalCard />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
