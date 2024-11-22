import RespostaModel from "@/model/resposta";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

const colors = {
  A: "bg-[#F2C866]",
  B: "bg-[#F266BA]",
  C: "bg-[#85D4F2]",
  D: "bg-[#BCE596]",
};

export default function Resposta(props: RespostaProps) {
  const resposta = props.valor;
  const corFundoLetra = props.corFundoLetra;
  return (
    <div
      className="flex h-[100px] m-[10px]  min-w-[500px] w-[80%]"
      onClick={() => props.respostaFornecida(props.indice)}
    >
      <div className="flex flex-1 relative">
        {!resposta.revelada ? (
          <div className=" flex items-center h-full w-full absolute rounded-xl p-[15px] bg-white text-black">
            <span
              className={`text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center mr-5 ${
                colors[corFundoLetra as keyof typeof colors]
              } text-white`}
            >
              {props.letra}
            </span>
            <div className="text-xl font-bold">{resposta.valor} </div>
          </div>
        ) : (
          <div className="flex flex-col h-full w-full absolute">
            {resposta.certa ? (
              <div className="text-white flex-1 rounded-xl flex flex-col items-center justify-center bg-[#2baa6d]">
                <div className="">A resposta certa é...</div>
                <div className="text-2xl font-bold">{resposta.valor}</div>
              </div>
            ) : (
              <div className="text-white flex-1 rounded-xl flex flex-col items-center justify-center bg-[#e44a4c]">
                <div className="">A resposta informada está errada...</div>
                <div className="text-2xl font-bold">{resposta.valor}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
