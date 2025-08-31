import React from 'react';
import './styles.css';

const Header = ({ user }) => {
  return (
    <header className="profile-header">
      <img src={user.avatar_url} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h1>{user.name || user.login}</h1>
        <p>{user.bio || 'Descrição não disponível'}</p>
        <p>{user.company || ''}</p>
        <p>{user.location || ''}</p>
      </div>
    </header>
  );
};

export default Header;
