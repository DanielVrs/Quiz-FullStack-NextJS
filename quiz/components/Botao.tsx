import Link from "next/link";

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default function Botao(props: BotaoProps) {
  const renderizarBotao = () => {
    return (
      <button
        className="bg-[#9885f0] text-white rounded-lg font-extralight text-xl px-[25px] py-[10px] mb-3 transition-transform duration-200 hover:scale-110 cursor-pointer"
        onClick={props.onClick}
      >
        {props.texto}
      </button>
    );
  };

  return props.href ? (
    <Link href={props.href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
