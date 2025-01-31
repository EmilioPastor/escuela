import { obtenerGrupos } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";

// ------------------- Componente de servidor 

export default async function Grupos() {
    const grupos = await obtenerGrupos();
    //console.log(grupos);
    return (
        <div>

            <GrupoInsertar/>


            {
                grupos.map(grupo =>
                    <div key={grupo.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{grupo.nombre}</p>
                            < p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>

                        <GrupoModificar grupo={grupo}/>

                        <GrupoModificar grupo={grupo}/>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}