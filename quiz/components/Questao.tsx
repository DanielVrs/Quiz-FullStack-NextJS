import QuestaoModel from "@/model/questão";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

interface QuestaoProps {
  valor: QuestaoModel;
  tempoParaResposta?: number;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;
  const letras = [
    { valor: "A", cor: "A" },
    { valor: "B", cor: "B" },
    { valor: "C", cor: "C" },
    { valor: "D", cor: "D" },
  ];
  const renderizarRespostas = () => {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        key={questao.id}
        duracao={props.tempoParaResposta ?? 10}
        tempoEsgotado={props.tempoEsgotado}
      />
      {renderizarRespostas()}
    </div>
  );
}
