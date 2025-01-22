import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaGrupos() {

    return (
        <div>
            <h1>Lista de productos: </h1>
            <Suspense fallback={"Obteniendo grupos..."}>
                <Grupos />
            </Suspense>
        </div>

    )
}

export default PaginaGrupos;

// ------------------- Componente del servidor

async function Grupos() {
    const grupos = await prisma.grupo.findMany();
    return (
        <div>
            <ul>
                {grupos.map((grupo) => (
                    <div key={grupo.id}>

                        <p>Grupo: {grupo.nombre}</p>
                        <p>Tutor: {grupo.tutor}</p>
                        <p>Aula: {grupo.aula}</p>
                        <hr />
                        <br />

                    </div>
                ))}
            </ul>
        </div>
    );
}