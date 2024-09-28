import React from 'react';

function Feature(props) {
  return <p style={{ textAlign: 'center' }}>{props.text}</p>;
}

function Home() {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}>Bem-vindo ao BookKeeper</h1>
      <Feature text= "O BookKeeper é uma solução intuitiva e eficiente para organizar sua biblioteca pessoal ou profissional. Com ele, você pode facilmente adicionar, editar e gerenciar seus livros de forma prática e rápida. Seja para colecionadores, amantes da leitura ou administradores de bibliotecas, o BookKeeper é a ferramenta ideal para manter tudo em ordem e ao alcance de suas mãos"/>
      <Feature text="Organize sua biblioteca de forma fácil e intuitiva" />
      <Feature text="Encontre qualquer livro em segundos" />
      <Feature text="Gerencie seus empréstimos com facilidade" />
    </div>
  );
}

export default Home;