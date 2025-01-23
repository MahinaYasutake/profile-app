import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Card from './components/Card';
import './App.css';

const App = () => {
  const profiles = [
    { name: 'John Doe', email: 'john@example.com', jobTitle: 'Web Developer', extraInfo: 'Loves coding and hiking.' },
    { name: 'Jane Smith', email: 'jane@example.com', jobTitle: 'UI Designer', extraInfo: 'Enjoys painting and photography.' },
    { name: 'Alice Johnson', email: 'alice@example.com', jobTitle: 'Data Scientist', extraInfo: '' },
  ];

  return (
    <div className="app">
      <Header />
      <Introduction />
      <section className="profiles">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            name={profile.name}
            email={profile.email}
            jobTitle={profile.jobTitle}
            extraInfo={profile.extraInfo}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
