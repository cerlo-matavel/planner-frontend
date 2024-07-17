import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-5">
                    {/* flex-1 e shrink-0 sao usados para garantir que o elemento nao tenha o seu tamanho
                                reduzido, ao usar flex na entidade superior*/}
                    <div className="space-y-1.5 flex-1"> {/*Uso de flex-1*/}
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/104700011rfgvreberebefverbefverbefber
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400" />
                </div>

                <div className="flex items-center justify-between gap-5">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/104700011rfgvreberebefverbefverbefber
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" /> {/*Uso de shrink-0*/}
                </div>

            </div>

            <Button variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}