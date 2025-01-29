import Modal from "@/components/Modal";
import { eliminarAsignatura, insertarAsignatura, modificarAsignatura } from "@/lib/actions";
import { obtenerAsignaturas } from "@/lib/data";
import AsignaturaInsertar from "./Insertar";
import AsignaturaModificar from "./Modificar";
import AsignaturaEliminar from "./Eliminar";

// ------------------- Componente de servidor 

export default async function Asignaturas() {
    const asignaturas = await obtenerAsignaturas();
    //console.log(asignaturas);
    return (
        <div>

            <AsignaturaInsertar/>


            {
                asignaturas.map(asignatura =>
                    <div key={asignatura.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{asignatura.nombre}</p>
                            < p>{asignatura.profesor}</p>
                            <p>{asignatura.num_horas}</p>
                        </div>

                        <AsignaturaModificar grupo={grupo}/>
                        <AsignaturaEliminar grupo={grupo}/>

                       

                        <hr />
                    </div>
                )
            }
        </div>
    );
}