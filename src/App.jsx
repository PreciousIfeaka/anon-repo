import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './pages/Intro';
import Memories from './pages/Memories';
import Proposal from './pages/Proposal';
import Success from './pages/Success';
import SuspenseStart from './pages/SuspenseStart';
import SuspenseFollowUp from './pages/SuspenseFollowUp';
import FuturePromise from './pages/FuturePromise';
import CalmDown from './pages/CalmDown';
import FloatingHearts from './components/FloatingHearts';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const location = useLocation();

  return (
    <>
      <FloatingHearts />
      <BackgroundMusic />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SuspenseStart />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/suspense-followup" element={<SuspenseFollowUp />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/future-promise" element={<FuturePromise />} />
          <Route path="/calm-down" element={<CalmDown />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
