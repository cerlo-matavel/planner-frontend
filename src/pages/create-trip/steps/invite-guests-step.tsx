import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepProps) {

    return (
        <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3">
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {
                    emailsToInvite.length <= 0 ? (
                        <span className="bg-transparent text-lg text-zinc-400 text-left outline-none">Quem estará na viagem?</span>
                    ) : (
                        <span className="bg-transparent text-lg text-zinc-100 text-left outline-none">
                            {emailsToInvite.length} pessoa(s) convidada(s)
                        </span>
                    )
                }
            </button>

            <button onClick={openConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar Viagem
                <ArrowRight className="size-5" />
            </button>
        </div>
    )
}