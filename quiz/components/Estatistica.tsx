interface EstatisticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className={`flex flex-col items-center justify-center m-[10px]`}>
      <div
        className={`flex items-center justify-center rounded-full text-[4rem] font-bold h-44 w-44 ${
          props.corFundo ? props.corFundo : "bg-[#FDD60F]"
        } ${props.corFonte ? props.corFonte : "text-[#333]"}`}
      >
        {props.valor}
      </div>
      <div className="text-3xl font-extralight text-[#ddd]">{props.texto}</div>
    </div>
  );
}
