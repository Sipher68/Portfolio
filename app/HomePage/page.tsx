'use client';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the 'pages' directory.

import Navbar from '../../components/Navbar';
import DotGroup from '../../components/DotGroup';
import Landing from './../Landing/page';
import MySkills from './../MySkills/MySkills';
import Projects from '../Projects/page';
import Contact from '../Contact/page';
import { useEffect, useState } from 'react';
import LineGradient from '../../components/LineGradient';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w=5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w=5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w=5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w=5/6 mx-auto">
        <Contact />
      </div>
    </div>
  );
}
