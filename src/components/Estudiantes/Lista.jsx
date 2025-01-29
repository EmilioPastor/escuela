import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerAsignaturas } from "@/lib/data";
import EstudianteInsertar from "./Insertar";
import EstudianteModificar from "./Modificar";
import EstudianteEliminar from "./Eliminar";

// ------------------- Componente de servidor 

export default async function Estudiantes() {
    const estudiantes = await obtenerAsignaturas();
    //console.log(estudiantes);
    return (
        <div>

            <EstudianteInsertar/>


            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div >
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p><img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>{estudiante.tutor_legal}</p>
                        </div>

                        <EstudianteModificar grupo={grupo}/>
                        <EstudianteEliminar grupo={grupo}/>
                       

                        <hr />
                    </div>
                )
            }
        </div>
    );
}