import React, { useState } from 'react';
import { SignupScreen } from './screens/SignupScreen';
import { AddressScreen } from './screens/AddressScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ShoppingListScreen } from './screens/ShoppingListScreen';
import { ExploreScreen } from './screens/ExploreScreen';

type Screen = 'signup' | 'address' | 'home' | 'list' | 'explore';
type Tab = 'home' | 'list' | 'explore';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('signup');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const handleSignup = () => {
    setCurrentScreen('address');
  };

  const handleLoginClick = () => {
    // Simula login e vai direto para home
    setCurrentScreen('home');
  };

  const handleSaveAddress = () => {
    setCurrentScreen('home');
  };

  const handleSkipAddress = () => {
    setCurrentScreen('home');
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    
    // Mapeia tabs para screens
    const screenMapping: Record<Tab, Screen> = {
      home: 'home',
      list: 'list',
      explore: 'explore'
    };
    
    setCurrentScreen(screenMapping[tab]);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'signup':
        return (
          <SignupScreen
            onSignup={handleSignup}
            onLoginClick={handleLoginClick}
          />
        );
      
      case 'address':
        return (
          <AddressScreen
            onSave={handleSaveAddress}
            onSkip={handleSkipAddress}
          />
        );
      
      case 'home':
        return (
          <HomeScreen
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        );
      
      case 'list':
        return (
          <ShoppingListScreen
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        );
      
      case 'explore':
        return (
          <ExploreScreen
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        );
      
      default:
        return (
          <HomeScreen
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative overflow-hidden">
      {renderScreen()}
    </div>
  );
}