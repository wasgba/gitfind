import React, { useState } from 'react';
import Header from '../../components/Header';
import List from '../../components/List'; // Adjusted import name
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.css';

function Home() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    if (!username) return;

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      if (userResponse.ok) {
        setUser(userData);
        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } else {
        alert('Usuário não encontrado!');
        setUser(null);
        setRepos([]);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do GitHub:", error);
      alert('Ocorreu um erro ao buscar o usuário. Verifique sua conexão ou o nome de usuário.');
      setUser(null);
      setRepos([]);
    }
  };

  return (
    <div className="page-background">
      <div className="container">
        <div className="search-section">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="@username"
          />
          <Button onClick={handleSearch}>Buscar</Button>
        </div>

        {user && (
          <>
            <Header user={user} />
            <div className="content">
              <List repos={repos} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
