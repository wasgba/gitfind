import React from 'react';
import './styles.css';

const List = ({ repos }) => {
  return (
    <div className="repo-list">
      <h2>Repositórios</h2>
      {repos.length > 0 ? (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
              </a>
              <p>{repo.description || 'Nenhuma descrição'}</p>
              <p>Linguagem: {repo.language || 'Não especificada'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </div>
  );
};

export default List;
