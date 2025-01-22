import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaGrupo({ params }) {
    const { id } = await params;

    return(
        <Suspense fallback={"Obteniendo grupo.."}>
            <Producto id={id}/>
        </Suspense>
    )


}

export default PaginaGrupo;

async function Grupos({ id }) {
    const grupo = await prisma.grupo.findUnique({
        where: {
            id: +parametros.id
        }
    });


    return(
        <div>
            <p>Grupo: {grupo.nombre}</p>
            <p>Tutor: {grupo.tutor}</p>
            <p>Aula: {grupo.aula}</p>
        </div>
    );
}