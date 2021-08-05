import React from 'react'
import { useEffect, useState, FormEvent } from 'react';
import api from '../../services/api';
import { Container, Button, ContainerTable } from './styles';
import { Link } from 'react-router-dom';
import { FaSave, FaTrash } from 'react-icons/fa';

interface IExames {
  id: string;
  nome: string;
  tipoexame: string;
  nomeexame: string;
  mesanoexame: string;
  laboratorio: string;
}

function Dashboard() {
  const [exames, setExames] = useState<IExames[]>([]);

  const [nome, setNome] = useState('');
  const [tipoExame, setTipoExame] = useState('');
  const [nomeExame, setNomeExame] = useState('');
  const [mesaNoExame, setMesAnoDoExame] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [idS, setIdS] = useState(null);

  async function loadData() {
    const dados = await api.get(`/exames`).then((res) => res.data);
    setExames(dados);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function addExame(event: FormEvent) {
    event.preventDefault();

    const dado = {
      nome: nome,
      tipoexame: tipoExame,
      nomeexame: nomeExame,
      mesanoexame: mesaNoExame,
      laboratorio: laboratorio,
    };

    if (idS) {
      await api.put(`/exames/${idS}`, dado);
    } else {
      await api.post('/exames', dado);
    }

    setNome('');
    setTipoExame('');
    setNomeExame('');
    setMesAnoDoExame('');
    setLaboratorio('');
    setIdS(null);
    loadData();
  }

  return (
    <>
      <Container>
        <h1>Cadastrar Exames</h1>
        <form onSubmit={addExame}>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />

          <input
            type="text"
            name="tipoexame"
            value={tipoExame}
            onChange={(e) => setTipoExame(e.target.value)}
            placeholder="Tipo de exame"
          />

          <input
            type="text"
            name="nomeexame"
            value={nomeExame}
            onChange={(e) => setNomeExame(e.target.value)}
            placeholder="Nome do exame"
          />

          <input
            type="number"
            name="mesanoexame"
            value={mesaNoExame}
            onChange={(e) => setMesAnoDoExame(e.target.value)}
            placeholder="Mes e ano do Exame"
          />

          <input
            type="text"
            name="laboratorio"
            value={laboratorio}
            onChange={(e) => setLaboratorio(e.target.value)}
            placeholder="Laboratório"
          />

          <Button type="submit">
            <a href="">
              <FaSave color="white" />
            </a>
            Salvar
          </Button>

          <Button type="submit">
            <Link to={'/exames'}>Totais</Link>
          </Button>
        </form>
      </Container>
      <Table />
    </>
  );
}


function Table() {
  const [exames, setExames] = useState<IExames[]>([]);

  async function loadData() {
    const dados = await api.get(`/exames`).then((res) => res.data);
    setExames(dados);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function deleteExame(id: string) {
    await api.delete(`/exames/${id}`);

    loadData();
  }

  return (
    <ContainerTable>
      <h1>Exames</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo de Exame</th>
            <th>Nome do Exame</th>
            <th>Mês e Ano do Exame</th>
            <th>Laboratório</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {exames.map((e: IExames, index) => {
            return (
              <tr key={index.toString()}>
                <td>{` ${e.nome}`}</td>
                <td>{` ${e.tipoexame}`}</td>
                <td>{` ${e.nomeexame}`}</td>
                <td>{` ${e.mesanoexame}`}</td>
                <td>{` ${e.laboratorio}`}</td>

                <td>
                  <button
                    onClick={() => {
                      deleteExame(e.id);
                    }}
                  >
                    <a href="">
                      <FaTrash color="white" />
                    </a>
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContainerTable>
  );
}


export { Dashboard }



