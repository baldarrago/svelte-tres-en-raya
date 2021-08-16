import { writable } from 'svelte/store'
export const turno = writable(0)
export const marcados = writable(['','','','','','','','',''])
export const ganador = writable('')