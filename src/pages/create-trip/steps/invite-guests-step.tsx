import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

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

            <Button onClick={openConfirmTripModal} variant="primary">
                Continuar Viagem
                <ArrowRight className="size-5" />
            </Button>
        </div>
    )
}