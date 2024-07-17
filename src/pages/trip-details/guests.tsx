import { CircleDashed, CheckCircle2, UserCog, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-5">
                    {/* flex-1 e shrink-0 sao usados para garantir que o elemento nao tenha o seu tamanho
                                reduzido, ao usar flex na entidade superior*/}
                    <div className="space-y-1.5 flex-1"> {/*Uso de flex-1*/}
                        <span className="block font-medium text-zinc-100">Chica Cossa</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            chica.cossa@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400" />
                </div>

                <div className="flex items-center justify-between gap-5">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Cerlo Matavel</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            chshinn808@gmail.com
                        </span>
                    </div>
                    <CheckCircle2 className="size-5 text-lime-300 shrink-0" /> {/*Uso de shrink-0*/}
                </div>

            </div>

            <Button variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerir convidados
            </Button>
        </div>
    )
}