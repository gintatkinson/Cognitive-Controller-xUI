/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardView } from './components/views/DashboardView';
import { TopologyView } from './components/views/TopologyView';
import { DevicesView } from './components/views/DevicesView';
import { LinksView } from './components/views/LinksView';
import { ServicesView } from './components/views/ServicesView';
import { SlicesView } from './components/views/SlicesView';
import { DetailView } from './components/views/DetailView';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentContext, setCurrentContext] = useState('admin');
  const [selectedItem, setSelectedItem] = useState<{ id: string, type: 'device' | 'link' | 'service' | 'slice' } | null>(null);

  const handleNavigate = (id: string, type: 'device' | 'link' | 'service' | 'slice') => {
    setSelectedItem({ id, type });
    setActiveTab('detail');
  };

  const renderView = () => {
    if (activeTab === 'detail' && selectedItem) {
      return <DetailView item={selectedItem} onNavigate={handleNavigate} onBack={() => setActiveTab(selectedItem.type + 's')} />;
    }

    switch (activeTab) {
      case 'dashboard': return <DashboardView onNavigate={handleNavigate} />;
      case 'topology': return <TopologyView onNavigate={handleNavigate} />;
      case 'devices': return <DevicesView onNavigate={handleNavigate} />;
      case 'links': return <LinksView onNavigate={handleNavigate} />;
      case 'services': return <ServicesView onNavigate={handleNavigate} />;
      case 'slices': return <SlicesView onNavigate={handleNavigate} />;
      default: return <DashboardView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setSelectedItem(null); }} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header currentContext={currentContext} setContext={setCurrentContext} />
        
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + (selectedItem?.id || '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <footer className="h-10 border-t border-zinc-900 bg-zinc-950 px-8 flex items-center justify-between text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span>© 2026 ETSI TeraFlowSDN</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span className="text-emerald-500/70">Connected to Controller Node: TFS-CORE-01</span>
          </div>
          <div className="flex items-center gap-4">
            <span>API Latency: 14ms</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span>Uptime: 142d 04h 22m</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
