import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className="flex my-3">
      <CountdownCircleTimer
        isPlaying
        duration={props.duracao}
        onComplete={props.tempoEsgotado}
        size={120}
        colors={["#bce596", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => <div className="text-2xl">{remainingTime}</div>}
      </CountdownCircleTimer>
    </div>
  );
}
