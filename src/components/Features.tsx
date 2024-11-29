import { Brain, Network, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'Autonomous Agents',
    description: 'Self-learning AI agents that optimize token distribution and market dynamics'
  },
  {
    icon: Network,
    title: 'Decentralized Networks',
    description: 'Seamlessly connected token economies powered by advanced blockchain technology'
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Enterprise-grade security with real-time threat detection and prevention'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] transition-colors"
            >
              <feature.icon className="w-12 h-12 text-[#00F0FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}