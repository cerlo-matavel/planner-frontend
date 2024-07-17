import { MapPin, Calendar, Settings2, Plus, CheckCircle2, Link2, UserCog, CircleDashed } from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {

    

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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

                    <button
                        className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </button>

                </div>


            </div>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6 ">
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-semibold">
                            Atividades
                        </span>
                        <button
                            className="bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium 
                            flex items-center gap-2 px-5 py-2 h-10.2">
                            <Plus className=" size-5" />
                            <span>Cadastrar atividade</span>
                        </button>
                    </div>

                    {/* Div de dias */}
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

                </div>

                {/* Div de links importantes */}
                <div className="w-80 h-full space-y-6">
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
                        <button className="bg-zinc-800 hover:bg-zinc-700
                         text-zinc-200 font-medium
                         rounded-lg shadow-shape w-full flex items-center justify-center
                         gap-2  px-5 py-2">
                            <Plus className="size-5" />
                            Cadastrar novo link
                        </button>
                    </div>

                    <div className="w-full h-px bg-zinc-800" />

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
                        <button className="bg-zinc-800 hover:bg-zinc-700
                         text-zinc-200 font-medium
                         rounded-lg shadow-shape w-full flex items-center justify-center
                         gap-2  px-5 py-2">
                            <UserCog className="size-5" />
                            Gerir convidados
                        </button>
                    </div>
                </div>
            </main>

        </div>
    )

}