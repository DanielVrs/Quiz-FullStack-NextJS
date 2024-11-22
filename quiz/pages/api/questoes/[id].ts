import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const id = +req.query.id!;
//   const questao = questoes.filter((questao) => questao.id === id);

//   if (questao.length === 0) {
//     res.status(204).send("Questão não encontrada");
//   } else {
//     res
//       .status(200)
//       .json(questao[0].embaralharRespostas().converterParaObjeto());
//   }
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = +req.query.id!;
  const unicaQuestãoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestãoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestãoOuNada[0].embaralharRespostas();
    // const obj = questaoSelecionada.responderCom(0).converterParaObjeto();
    res.status(200).json(questaoSelecionada.converterParaObjeto());
  } else {
    res.status(204).send("Questão não encontrada");
  }
};
