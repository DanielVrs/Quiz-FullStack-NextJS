import QuestaoModel from "@/model/questão";
import Questao from "./Questao";
import Botao from "./Botao";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irParaProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  const respostaFornecida = (indice: number) => {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  };
  return (
    <div>
      {props.questao ? (
        <Questao
          valor={props.questao}
          respostaFornecida={respostaFornecida}
          tempoParaResposta={6}
          tempoEsgotado={props.irParaProximoPasso}
        />
      ) : (
        false
      )}
      <Botao
        onClick={props.irParaProximoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
