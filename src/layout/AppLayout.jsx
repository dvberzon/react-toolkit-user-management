import React, { useState } from 'react';
import UsersPage from 'users/UsersPage';
import GroupsPage from 'groups/GroupsPage';
import './AppLayout.css';

function AppLayout() {
  const [currentTab, setCurrentTab] = useState('users');
  const tabs = {
    users: UsersPage,
    groups: GroupsPage,
  }
  const TabComponent = tabs[currentTab];
  return (
    <div className="app-layout">
      <header>
        <div class="container">
          <span className="brand-logo">User Management</span>
          <nav className="main-nav">
            <button
              className="nav-option"
              onClick={() => setCurrentTab('users')}
            >
              Users
            </button>
            <button
              className="nav-option"
              onClick={() => setCurrentTab('groups')}
            >
              Groups
            </button>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <TabComponent />
        </div>
      </main>
    </div>
  )
}

export default AppLayout;
