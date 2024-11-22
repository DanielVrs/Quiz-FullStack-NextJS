interface EnunciadoProps {
  texto: string;
}

export default function Enunciado(props: EnunciadoProps) {
  return (
    <div className="flex ">
      <span className="text-4xl font-bold">{props.texto}</span>
    </div>
  );
}
