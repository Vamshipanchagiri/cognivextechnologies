import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CompanyOverview from '@/components/about/CompanyOverview';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import Timeline from '@/components/about/Timeline';
import LeadershipTeam from '@/components/about/LeadershipTeam';

const About = () => {
  const { toast } = useToast();

  const handleJoinTeam = () => {
    toast({
      title: "🚧 Career opportunities page isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>About Us - Cognivex Technologies</title>
        <meta name="description" content="Learn about Cognivex Technologies - a leading IT solutions company in Hyderabad. Our mission, vision, values, and expert team dedicated to digital transformation." />
        <meta property="og:title" content="About Us - Cognivex Technologies" />
        <meta property="og:description" content="Learn about Cognivex Technologies - a leading IT solutions company in Hyderabad. Our mission, vision, values, and expert team dedicated to digital transformation." />
      </Helmet>

      <div id="about" className="min-h-screen pt-24 pb-16 wave-bg">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-6xl font-bold gradient-text mb-6">About Us</h1>
          <p className="text-xl text-slate-600 dark:text-text-dark-muted max-w-3xl mx-auto">
            Pioneering digital transformation through innovative technology solutions since 2018
          </p>
        </motion.section>

        <CompanyOverview />
        <MissionVision />
        <CoreValues />
        <Timeline />
        <LeadershipTeam />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12">
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-slate-600 dark:text-text-dark-muted mb-8">
                Be part of an innovative team that's shaping the future of technology
              </p>
              <Button 
                onClick={handleJoinTeam}
                className="magnetic-hover bg-gradient-to-r from-vibrant-magenta to-cyber-indigo hover:shadow-lg hover:shadow-cyber-indigo/30 text-white px-10 py-4 text-lg rounded-full"
              >
                <Award className="w-5 h-5 mr-2" />
                Explore Careers
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default About;