'use server'

import prisma from "@/lib/prisma"

// --------------------------- GRUPOS ---------------------------------
export async function obtenerGrupos() {
    // return await prisma.grupo.findMany();
    const grupos = await prisma.grupo.findMany()
    return grupos;
}

export async function obtenerGrupo(id) {
    const grupo = await prisma.grupo.findUnique({
        where: {id: Number(id)}
    })
    return grupo;
}

// --------------------------- ASIGNATURAS ---------------------------------
export async function obtenerAsignaturas() {
    // return await prisma.grupo.findMany();
    const asignaturas = await prisma.asignatura.findMany()
    return asignaturas;
}

export async function obtenerAsignatura(id) {
    const asignatura = await prisma.asignatura.findUnique({
        where: {id: Number(id)}
    })
    return asignatura;
}

// --------------------------- ESTUDIANTES ---------------------------------
export async function obtenerEstudiantes() {
    // return await prisma.grupo.findMany();
    const estudiantes = await prisma.estudiante.findMany()
    return estudiantes;
}

export async function obtenerEstudiante(id) {
    const estudiante = await prisma.estudiante.findUnique({
        where: {id: Number(id)}
    })
    return estudiante;
}

// export {
//     obtenerAsignatura,
//     obtenerAsignaturas,
//     obtenerEstudiante,
//     obtenerEstudiantes,
//     obtenerGrupo,
//     obtenerGrupos
// }