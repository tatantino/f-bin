'use client';

import { useState } from 'react';
import {
  CreateTankPlanHistory,
  CreateTankPlanVersion,
  TankPlanHistoryList,
  TankPlanVersionDetail,
  TankPlanVersionsList,
  TankEditor,
  CompositionOverrideEditor,
} from './components';

export default function TankPlanApiTest() {
  const [activeTab, setActiveTab] = useState('versions');
  const [selectedVersionId, setSelectedVersionId] = useState('');

  const handleSelectVersion = (id: string) => {
    setSelectedVersionId(id);
    setActiveTab('version-detail');
  };

  const handleBack = () => {
    setSelectedVersionId('');
    setActiveTab('versions');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'versions':
        return <TankPlanVersionsList onSelectVersion={handleSelectVersion} />;
      case 'version-detail':
        return (
          <TankPlanVersionDetail id={selectedVersionId} onBack={handleBack} />
        );
      case 'create-version':
        return (
          <CreateTankPlanVersion
            onSuccess={() => {
              setActiveTab('versions');
            }}
          />
        );
      case 'history':
        return <TankPlanHistoryList />;
      case 'create-history':
        return (
          <CreateTankPlanHistory
            onSuccess={() => {
              setActiveTab('history');
            }}
          />
        );
      case 'tanks':
        return <TankEditor />;
      case 'composition-override':
        return <CompositionOverrideEditor />;
      default:
        return <div>Select a tab to get started</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tank Plan API Test</h1>

      {/* Tabs navigation */}
      <div className="border-b mb-6">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('versions')}
            className={`py-2 px-3 ${
              activeTab === 'versions' || activeTab === 'version-detail'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Versions
          </button>
          <button
            onClick={() => setActiveTab('create-version')}
            className={`py-2 px-3 ${
              activeTab === 'create-version'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Create Version
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-2 px-3 ${
              activeTab === 'history'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab('create-history')}
            className={`py-2 px-3 ${
              activeTab === 'create-history'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Create History
          </button>
          <button
            onClick={() => setActiveTab('tanks')}
            className={`py-2 px-3 ${
              activeTab === 'tanks'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Tanks
          </button>
          <button
            onClick={() => setActiveTab('composition-override')}
            className={`py-2 px-3 ${
              activeTab === 'composition-override'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Composition Override
          </button>
        </nav>
      </div>

      {/* Tab content */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {renderTabContent()}
      </div>
    </div>
  );
}
