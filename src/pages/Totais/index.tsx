import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Tr } from './styles';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

interface IExames {
  id: string;
  nome: string;
  tipoexame: string;
  nomeexame: string;
  mesanoexame: string;
  laboratorio: string;
}

function Totais() {
  const [exames, setExames] = useState<IExames[]>([]);

  async function loadData() {
    const dados = await api.get(`/exames`).then((res) => res.data);
    setExames(dados);
  }

  useEffect(() => {
    loadData();
  }, []);

  let fnc = exames.filter((tipo) => tipo.laboratorio === 'Lab Funcional',).length;
  let med = exames.filter((tipo) => tipo.laboratorio === 'Lab Medicina').length;

  let adm = exames.filter((tipo) => tipo.tipoexame === 'Admissional').length;
  let per = exames.filter((tipo) => tipo.tipoexame === 'Periódico').length;
  let dem = exames.filter((tipo) => tipo.tipoexame === 'Demissional').length;

  let hmc = exames.filter((tipo) => tipo.nomeexame === 'Hemograma Completo').length;
  let aud = exames.filter((tipo) => tipo.nomeexame === 'Audiometria').length;
  let acv = exames.filter((tipo) => tipo.nomeexame === 'Acuidade Visual').length;

  return (
    <Container>
      <a href="/">
        <FaArrowAltCircleLeft className="back" color="black" size={18} />
        Voltar
      </a>

      <h1>Relatórios</h1>

      <table>
        <thead>
          <Tr>
            <td>{`Foram realizados ${fnc} exames no Lab Funcional.`}</td>
            <td>{`Foram realizados ${med} exames no Lab Medicina.`}</td>
            <br />
            <td>{`Foi realizado ${adm} exame Admissional. `}</td>
            <td>{`Foi realizado ${per} exame Periódico. `}</td>
            <td>{`Foi realizado ${dem} exame Demissional. `}</td>
            <br />
            <td>{`Foram realizados ${hmc} exame Hemograma Completo. `}</td>
            <td>{`Foi realizado ${aud} exame Audiometria. `}</td>
            <td>{`Foi realizado ${acv} exame Acuidade Visual. `}</td>
          </Tr>
        </thead>
      </table>
    </Container>
  );
}

export { Totais };
