import { obtenerAsignatura } from "@/lib/data";


// ----------------  Componentes de servidor --------------

export default async function Estudiante({ id }) {
    const estudiante = await obtenerAsignatura(id);
    //console.log(estudiante);

    return (
        <div>
            <p><img src={estudiante.foto} /></p>
            <p> {estudiante.nombre} </p>
            <p> {estudiante.fecha_nacimiento.toLocaleDateString()} </p>
            <p> {estudiante.tutor_legal} </p>
        </div>
    );
}


