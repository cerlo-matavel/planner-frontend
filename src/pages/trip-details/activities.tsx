import { CheckCircle2 } from "lucide-react";

export function Activities() {

    return (
         /* Div de dias */           
        <div className="space-y-8 ">

            {/* Div dia */}
            <div className="space-y-2.5">
                {/* <div className="space-x-2">  porque e que nao posso fazer assim? */}
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">
                        Dia 17
                    </span>
                    <span className="text-zinc-500 text-xs">Sábado</span>
                </div>
                <p className="text-zinc-500 text-sm">
                    Nenhuma actividade cadastrada nessa data.
                </p>
            </div>

            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">
                        Dia 18
                    </span>
                    <span className="text-zinc-500 text-xs">Domingo</span>
                </div>

                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-lime-300" />
                        {/* ml-auto garante que toda a margem a esquerda do elemento seja preenchida
                                    enquanto que o mr-auto faz o mesmo, porem, para a direita */}
                        <span className="text-zinc-100 mr-auto">Corrida de Kart</span>
                        <span className="text-zinc-400 text-sm">14:00h</span>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-lime-300" />
                        <span className="text-zinc-100 mr-auto">Almoço</span>
                        <span className="text-zinc-400 text-sm">16:00h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}