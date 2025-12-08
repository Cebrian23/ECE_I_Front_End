import { Date } from "../../../types/history/Date.ts";
import { Event_Short } from "../../../types/history/Event.ts";
import { Person_Short } from "../../../types/history/Person.ts";

type Data = {
    name: string,
    creation_date?: Date,
    dissolution_date?: Date,
    members?: Person_Short[],
    involved_in?: Event_Short[],
    still_exists: boolean,
}

const Organization_Component = (props: Data) => {
    const name = props.name;
    const members = props.members;
    const involved_in = props.involved_in;

    const creation_date_normal = props.creation_date?.normal_date;
    const dissolution_date_normal = props.dissolution_date?.normal_date;
    const creation_date_century = props.creation_date?.century_date;
    const dissolution_date_century = props.dissolution_date?.century_date;
    const still_exists = props.still_exists;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                {
                    ((creation_date_normal !== null && creation_date_normal !== undefined) &&
                    (dissolution_date_normal !== null && dissolution_date_normal !== undefined)) &&
                    <>
                        <p><b>Fecha de creación: </b>
                            {
                                (creation_date_normal.day !== null && creation_date_normal.day !== undefined) &&
                                <>{creation_date_normal.day + " de "}</>
                            }
                            {
                                (creation_date_normal.month !== null && creation_date_normal.month !== undefined) &&
                                <>{creation_date_normal.month + " de "}</>
                            }
                            {creation_date_normal.year + " " + creation_date_normal.ac_dc}
                        </p>
                        <p><b>Fecha de disolución: </b>
                            {
                                (dissolution_date_normal.day !== null && dissolution_date_normal.day !== undefined) &&
                                <>{dissolution_date_normal.day + " de "}</>
                            }
                            {
                                (dissolution_date_normal.month !== null && dissolution_date_normal.month !== undefined) &&
                                <>{dissolution_date_normal.month + " de "}</>
                            }
                            {dissolution_date_normal.year + " " + dissolution_date_normal.ac_dc}
                        </p>
                    </>
                }
                {
                    ((creation_date_normal !== null && creation_date_normal !== undefined) &&
                    (dissolution_date_normal !== null || dissolution_date_normal !== undefined)) &&
                    <>
                        <p><b>Fecha de creación: </b>
                            {
                                (creation_date_normal.day !== null && creation_date_normal.day !== undefined) &&
                                <>{creation_date_normal.day + " de "}</>
                            }
                            {
                                (creation_date_normal.month !== null && creation_date_normal.month !== undefined) &&
                                <>{creation_date_normal.month + " de "}</>
                            }
                            {creation_date_normal.year + " " + creation_date_normal.ac_dc}
                        </p>
                        {
                            still_exists === false &&
                            <p><b>Fecha de disolución: </b>Desconocido</p>
                        }
                    </>
                }
                {
                    ((creation_date_normal === null || creation_date_normal === undefined) &&
                    (dissolution_date_normal !== null && dissolution_date_normal !== undefined)) &&
                    <>
                        <p><b>Fecha de creación: </b>Desconocido</p>
                        <p><b>Fecha de disolución: </b>
                            {
                                (dissolution_date_normal.day !== null && dissolution_date_normal.day !== undefined) &&
                                <>{dissolution_date_normal.day + " de "}</>
                            }
                            {
                                (dissolution_date_normal.month !== null && dissolution_date_normal.month !== undefined) &&
                                <>{dissolution_date_normal.month + " de "}</>
                            }
                            {dissolution_date_normal.year + " " + dissolution_date_normal.ac_dc}
                        </p>
                    </>
                }
                {
                    ((creation_date_normal === null || creation_date_normal === undefined) &&
                    (dissolution_date_normal === null || dissolution_date_normal === undefined) &&
                    (creation_date_century !== null && creation_date_century !== undefined) &&
                    (dissolution_date_century !== null && dissolution_date_century !== undefined)) &&
                    <>
                        {
                            ((creation_date_century.century === dissolution_date_century.century) &&
                            (creation_date_century.ac_dc === dissolution_date_century.ac_dc)) &&
                            <p><b>Siglo de existencia: </b>{creation_date_century + " " + creation_date_century.ac_dc}</p>
                        }
                        {
                            ((creation_date_century.century !== dissolution_date_century.century) ||
                            (creation_date_century.ac_dc !== dissolution_date_century.ac_dc)) &&
                            <>
                                <p><b>Siglo de creación: </b>{creation_date_century.century + " " + creation_date_century.ac_dc}</p>
                                <p><b>Siglo de disolución: </b>{dissolution_date_century.century + " " + dissolution_date_century.ac_dc}</p>
                            </>
                        }
                    </>
                }
                {
                    members !== null && members !== undefined && members.length > 0 &&
                    <div>
                        <p><b>Miembros destacados:</b></p>
                        <ul>
                            {
                                members.map((person) => {
                                    if(person.country_from !== "China" && person.country_from !== "Imperio chino"){
                                        if(person.surname !== null){
                                            return(
                                                <li><a class="a1" href={`/person/id/${person.id}`}>{person.name} {person.surname}</a></li>
                                            );
                                        }
                                        else{
                                            <li><a class="a1" href={`/person/id/${person.id}`}>{person.name}</a></li>
                                        }
                                    }
                                    else{
                                        <li><a class="a1" href={`/person/id/${person.id}`}>{person.surname} {person.name}</a></li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    involved_in !== null && involved_in !== undefined && involved_in.length > 0 &&
                    <div>
                        <p><b>Se ha involucrado en:</b></p>
                        <ul>
                            {
                                involved_in.map((event) => {
                                    return(
                                        <li><a class="a1" href={`/event/id/${event.id}`}>{event.name}</a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                <p><b>Canciones y álbumes que hablan de esta organización:</b></p>
            </div>
        </div>
    );
}

export default Organization_Component;