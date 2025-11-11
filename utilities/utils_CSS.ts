import { BookGQL } from "../types/literature/Book.ts";
import { Album_Short, Album_Shorter } from "../types/music/Album.ts";
import { Song, Song_Short } from "../types/music/Song.ts";

/**
 * Función que, a partir del tamaño de un array de entrada,
 * devuelve un string que servirá para seleccionar el estilo CSS
 * con el que se mostrarán los datos del array
 * @param data Es el array de datos que hay que mostrar al usuario
 * @returns Devuelve el estilo que se devería usar a la hora de mostrar las canciones, albumes o libros
 */
export const Class_Selector = (data: Song[] | Song_Short[] | Album_Shorter[] | Album_Short[] | BookGQL[]): string => {
        if(data.length === 4 || data.length % 4 === 0){
            return "group4";
        }
        else if(data.length === 3 || data.length % 3 === 0){
            return "group3";
        }
        else if(data.length === 2 || data.length % 2 === 0){
            return "group2";
        }
        else if(data.length === 1){
            return "group1";
        }
    
    return "group3";
}