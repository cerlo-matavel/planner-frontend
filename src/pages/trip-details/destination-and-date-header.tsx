import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
    return (
        <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center justify-between shadow-shape">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="bg-transparent placeholder-zinc-400 outline-none flex-1">
                    Maputo, Moçambique
                </span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="bg-transparent placeholder-zinc-400 w-40 outline-none">
                        17 a 23 de Agosto
                    </span>
                </div>

                <div className="w-px h-6 bg-zinc-800" />
                
                <Button variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            </div>


        </div>
    )
}