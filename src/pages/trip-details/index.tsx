import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationAndDateHeader/>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6 ">
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-semibold">
                            Atividades
                        </span>
                        <button onClick={openCreateActivityModal}
                            className="bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium 
                            flex items-center gap-2 px-5 py-2 h-10.2">
                            <Plus className=" size-5" />
                            <span>Cadastrar actividade</span>
                        </button>
                    </div>

                    {/* Div de dias */}
                    <Activities />

                </div>

                {/* Div de links importantes */}
                <div className="w-80 h-full space-y-6">
                    <ImportantLinks />

                    <div className="w-full h-px bg-zinc-800" />

                    <Guests />
                </div>
            </main>

            {
                isCreateActivityModalOpen && (
                    <CreateActivityModal
                        closeCreateActivityModal={closeCreateActivityModal} />
                )
            }
        </div>
    )

}