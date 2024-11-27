import RespostaModel from "@/model/resposta";
import QuestaoModel from "@/model/questão";
import { useEffect, useState } from "react";

import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  const carregarQuestoes = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes);
  };

  const carregarQuestao = async (idQuestao: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  };

  useEffect(() => {
    carregarQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  };

  const idParaProximaPergunta = () => {
    if (questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximoIndice];
    }
  };

  const irParaProximoPasso = () => {
    const proximoId = idParaProximaPergunta();
    proximoId ? carregarQuestao(proximoId) : finalizar();
  };

  const irParaProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId);
  };

  const finalizar = () => {
    router.push({
      pathname: "/resultado",
      query: { total: idsDasQuestoes.length, certas: respostasCertas },
    });
  };

  return (
    <Questionario
      questao={questao!}
      ultima={idParaProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irParaProximoPasso={irParaProximoPasso}
    />
  );
}
