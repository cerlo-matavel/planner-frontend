import { X, Tag, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void
}
export function CreateActivityModal({
    closeCreateActivityModal
}: CreateActivityModalProps) {

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Cadastrar actividade</h2>
                        <button type="button" onClick={closeCreateActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as actividades.
                    </p>
                </div>

                <form className="space-y-3">

                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                            name="title"
                            placeholder="Qual é a actividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className="flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Calendar className="text-zinc-400 size-5" />
                        <input
                            type="datetime-local"
                            name="occurs_at"
                            placeholder="Data e hora da actividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <Button variant="primary" size="full">
                        Salvar Actividade
                    </Button>
                    
                </form>
            </div>

        </div>

    )


}