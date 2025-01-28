import{PrismaClient} from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();


async function PaginaEstudiante({params}) {
    const {id}=await params;
    return(
        <div>
            <h1>DATOS DE ESTUDIANTE</h1>
            <Suspense fallback={"Obteniendo estudiante con id: " + id}>
                <Estudiante id={id} />
            </Suspense>
        </div>

    );

}

export default PaginaEstudiante;


//--------------------------Componente de servidor------------------------------------
async function Estudiante({id}) {
    const estudiante= await prisma.estudiante.findUnique({
        where:{
            id: +id
        }
    });
        return ( 
            <div>
                <p>{estudiante.nombre}</p>
                <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                <p>{estudiante.foto}</p>
                <p>{estudiante.tutor_legal}</p>
            </div>
         );
}