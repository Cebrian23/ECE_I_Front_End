import { Date } from "../../../types/history/Date.ts";
import { Organization_Short } from "../../../types/history/Organization.ts";
import { Person_Short } from "../../../types/history/Person.ts";

type Data = {
    name: string,
    start_date?: Date,
    end_date?: Date,
    people?: Person_Short[],
    orgs?: Organization_Short[],
}

const Event_Component = (props: Data) => {
    const name = props.name;
    const people = props.people;
    const orgs = props.orgs;

    const start_date_normal = props.start_date?.normal_date;
    const end_date_normal = props.end_date?.normal_date;
    const start_date_century = props.start_date?.century_date;
    const end_date_century = props.end_date?.century_date;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                {
                    ((start_date_normal !== null && start_date_normal !== undefined) &&
                    (end_date_normal !== null && end_date_normal !== undefined)) &&
                    <>
                        {
                            ((start_date_normal.year === end_date_normal.year) &&
                            (start_date_normal.month === end_date_normal.month) &&
                            (start_date_normal.day === end_date_normal.day) &&
                            (start_date_normal.ac_dc === end_date_normal.ac_dc)) &&
                            <p><b>Fecha en la que transcurrió: </b>
                                {
                                    (start_date_normal.day !== null && start_date_normal.day !== undefined) &&
                                    <>{start_date_normal.day + " de "}</>
                                }
                                {
                                    (start_date_normal.month !== null && start_date_normal.month !== undefined) &&
                                    <>{start_date_normal.month + " de "}</>
                                }
                                {start_date_normal.year + " " + start_date_normal.ac_dc}
                            </p>
                        }
                        {
                            ((start_date_normal.year !== end_date_normal.year) ||
                            (start_date_normal.month !== end_date_normal.month) ||
                            (start_date_normal.day !== end_date_normal.day) ||
                            (start_date_normal.ac_dc !== end_date_normal.ac_dc)) &&
                            <>
                                <p><b>Fecha de inicio: </b>
                                    {
                                        (start_date_normal.day !== null && start_date_normal.day !== undefined) &&
                                        <>{start_date_normal.day + " de "}</>
                                    }
                                    {
                                        (start_date_normal.month !== null && start_date_normal.month !== undefined) &&
                                        <>{start_date_normal.month + " de "}</>
                                    }
                                {start_date_normal.year + " " + start_date_normal.ac_dc}
                                </p>
                                <p><b>Fecha de fin: </b>
                                    {
                                        (end_date_normal.day !== null && end_date_normal.day !== undefined) &&
                                        <>{end_date_normal.day + " de "}</>
                                    }
                                    {
                                        (end_date_normal.month !== null && end_date_normal.month !== undefined) &&
                                        <>{end_date_normal.month + " de "}</>
                                    }
                                    {end_date_normal.year + " " + end_date_normal.ac_dc}
                                </p>
                            </>
                        }
                    </>
                }
                {
                    ((start_date_normal === null || start_date_normal === undefined) &&
                    (end_date_normal === null || end_date_normal === undefined) &&
                    (start_date_century !== null && start_date_century !== undefined) &&
                    (end_date_century !== null && end_date_century !== undefined)) &&
                    <>
                        {
                            ((start_date_century.century === end_date_century.century) &&
                            (start_date_century.ac_dc === end_date_century.ac_dc)) &&
                            <p><b>Siglo del evento: </b>{start_date_century + " " + start_date_century.ac_dc}</p>
                        }
                        {
                            ((start_date_century.century !== end_date_century.century) ||
                            (start_date_century.ac_dc !== end_date_century.ac_dc)) &&
                            <>
                                <p><b>Siglo de inicio: </b>{start_date_century.century + " " + start_date_century.ac_dc}</p>
                                <p><b>Siglo de fin: </b>{end_date_century.century + " " + end_date_century.ac_dc}</p>
                            </>
                        }
                    </>
                }
                {
                    people !== null && people !== undefined && people.length > 0 &&
                    <div>
                        <p><b>Personas involucradas:</b></p>
                        <ul>
                            {
                                people.map((person) => {
                                    if(person.country_from !== "China"){
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
                    orgs !== null && orgs !== undefined && orgs.length > 0 &&
                    <div>
                        <p><b>Organizaciones involucradas:</b></p>
                        <ul>
                            {
                                orgs.map((org) => {
                                    return(
                                        <li><a class="a1" href={`/organization/id/${org.id}`}>{org.name}</a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                <p><b>Canciones y álbumes que abordan este evento:</b></p>
            </div>
        </div>
    );
}

export default Event_Component