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
export const Class_Selector = (data: Song[] | Song_Short[] | Album_Shorter[] | Album_Short[] | BookGQL[], ind_page?: boolean): string => {
    if(data.length === 4 || data.length % 4 === 0){
        //console.log(4);
        return "group4";
    }
    else if(data.length === 3 || data.length % 3 === 0){
        //console.log(3);
        return "group3";
    }
    else if(data.length === 2 || data.length % 2 === 0){
        //console.log(2);
        return "group2";
    }
    else if(data.length === 1){
        if(ind_page === true){
            //console.log("ind_page");
            return "group1_ind_page"
        }
        else if(!ind_page || ind_page === false){
            //console.log(1);
            return "group1";
        }
    }

    //console.log("default");
    
    return "group3";
}