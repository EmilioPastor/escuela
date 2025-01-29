import Grupos from "@/components/Grupos/Lista";
import { Suspense } from "react";



async function PaginaGrupos() {

    return (

        <div className="flex justify-center min-h-screen bg-cyan-400">
            <div className="text-center space-y-6">
                <p className="text-lg text-black-200">
                    Aquí encontrarás información sobre los grupos
                </p>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">LISTA DE GRUPOS</h1>

                    <Suspense fallback={"Obteniendo grupos ..."}>
                        <Grupos />
                    </Suspense>
                </div>
            </div>
        </div>


    )

}

export default PaginaGrupos;


