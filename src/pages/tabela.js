import { useEffect, useState } from 'react';
import { ContatosService } from '../shared/services/api/contatos/ContatosService';
import { Link } from 'react-router-dom';
import './tabela.css';

export const Tabela = () => {
  const [nome, setNome] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(true);

    ContatosService.getAll(nome).then((result) => {
      setIsLoading(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setRows(result.data);
      }
    });
  };

  useEffect(() => {
    loadData(nome);
  }, []);

  return (
    <div key="tabela" className="container">
      <h1>Contatos</h1>
      <div className="container-pesquisar">
        <label className="rotulo-pesquisa">Pesquisar:</label>
        <input
          className="input-pesquisa"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(ev) => setNome(ev.target.value)}
        />
        <button className="btn-pesquisa" onClick={() => loadData()}>
          Pesquisar
        </button>
      </div>
      <p>
        <Link to="\contato\add">Adicionar</Link>
      </p>
      {isLoading ? (
        <h1>Aguarde...</h1>
      ) : (
        <table width="90%" border={1}>
          <thead>
            <tr key="Cab">
              <th>Nome</th>
              <th className="col-sexo">Sexo</th>
              <th className="col-email">E-mail</th>
              <th colSpan={2}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="col-nome">{row.nome}</td>
                <td className="col-sexo">{row.sexo}</td>
                <td className="col-email">{row.email}</td>
                <td className="col-editar">
                  <Link to={`/edit/${row.id}`} className="btn-editar">
                    Editar
                  </Link>
                </td>
                <td className="col-excluir">
                  <Link to={`/delete/${row.id}`} className="btn-excluir">
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
