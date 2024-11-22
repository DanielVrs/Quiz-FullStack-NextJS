import Questao from "@/components/Questao";
import RespostaModel from "@/model/resposta";
import QuestaoModel from "@/model/questão";
import { useState } from "react";
import Botao from "@/components/Botao";

const questaoMock = new QuestaoModel(1, "Qual é a capital do Brasil?", [
  RespostaModel.errada("Rio de Janeiro"),
  RespostaModel.certa("Brasília"),
  RespostaModel.errada("São Paulo"),
  RespostaModel.errada("Salvador"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
    console.log(indice);
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Questao
        valor={questao}
        tempoParaResposta={10}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto="Próxima" href="/resultado" />
    </div>
  );
}
