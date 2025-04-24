
import React from 'react';
import Header from '@/components/Header';
import ProjectOverview from '@/components/ProjectOverview';
import UserStories from '@/components/UserStories';
import DatabaseSchema from '@/components/DatabaseSchema';
import SqlDefinitions from '@/components/SqlDefinitions';
import Workflows from '@/components/Workflows';
import Security from '@/components/Security';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-10" />
      <main className="flex-grow mt-24">
        <ProjectOverview />
        <UserStories />
        <DatabaseSchema />
        <SqlDefinitions />
        <Workflows />
        <Security />

        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full p-3 bg-restaurant-primary hover:bg-restaurant-primary/90 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </main>
      <Footer className="mt-12" />
    </div>
  );
};

export default Index;
