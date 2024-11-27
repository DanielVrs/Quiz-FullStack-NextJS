import Botao from "@/components/Botao";
import Estatistica from "@/components/Estatistica";
import { useRouter } from "next/router";

export default function Resultado() {
  const router = useRouter();
  const total = router.query.total;
  const certas = Number(router.query.certas);
  const percentual =
    total && certas ? Math.round((certas / Number(total)) * 100) : 0;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl font-bold">Resultado Final</h1>
      <div className="flex">
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="bg-[#9cd2a4]" />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="bg-[#DE6A33]"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
}
