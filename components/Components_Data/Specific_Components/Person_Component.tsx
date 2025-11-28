import { Date } from "../../../types/history/Date.ts";
import { Event_Short } from "../../../types/history/Event.ts";
import { Organization_Short } from "../../../types/history/Organization.ts";

type Data = {
    name: string,
    surname?: string,
    nickname?: string[],
    birth_date?: Date,
    death_date?: Date,
    country_from: string,
    historical_position: string,
    member_of?: Organization_Short[],
    involved_in?: Event_Short[],
    still_alive: boolean,
}

const Person_Component = (props: Data) => {
    const name = props.name;
    const surname = props.surname;
    const nickname = props.nickname;
    const country_from = props.country_from;
    const historical_position = props.historical_position;
    const member_of = props.member_of;
    const involved_in = props.involved_in;

    const birth_date_normal = props.birth_date?.normal_date;
    const death_date_normal = props.death_date?.normal_date;
    const birth_date_century = props.birth_date?.century_date;
    const death_date_century = props.death_date?.century_date;
    const still_alive = props.still_alive;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre completo: </b>
                    {
                        country_from !== "China" &&
                        <>
                            {
                                surname !== null &&
                                <>{name + " " + surname}</>
                            }
                            {
                                surname === null &&
                                <>{name}</>
                            }
                        </>
                    }
                    {
                        country_from === "China" &&
                        <>{surname + " " + name}</>
                    }
                </p>
                {
                    nickname !== null && nickname !== undefined && nickname.length > 0 &&
                    <div>
                        <p><b>Apodos:</b></p>
                        <ul>
                            {
                                nickname.map((nick) => {
                                    return(
                                        <li>{nick}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    ((birth_date_normal !== null && birth_date_normal !== undefined) &&
                    (death_date_normal !== null && death_date_normal !== undefined)) &&
                    <>
                        <p><b>Fecha de nacimiento: </b>
                                    {
                                        (birth_date_normal.day !== null && birth_date_normal.day !== undefined) &&
                                        <>{birth_date_normal.day + " de "}</>
                                    }
                                    {
                                        (birth_date_normal.month !== null && birth_date_normal.month !== undefined) &&
                                        <>{birth_date_normal.month + " de "}</>
                                    }
                                {birth_date_normal.year + " " + birth_date_normal.ac_dc}
                                </p>
                        <p><b>Fecha de fallecimiento: </b>
                            {
                                (death_date_normal.day !== null && death_date_normal.day !== undefined) &&
                                <>{death_date_normal.day + " de "}</>
                            }
                            {
                                (death_date_normal.month !== null && death_date_normal.month !== undefined) &&
                                <>{death_date_normal.month + " de "}</>
                            }
                            {death_date_normal.year + " " + death_date_normal.ac_dc}
                        </p>
                    </>
                }
                {
                    ((birth_date_normal !== null && birth_date_normal !== undefined) &&
                    (death_date_normal === null || death_date_normal === undefined)) &&
                    <>
                        <p><b>Fecha de nacimiento: </b>
                                {
                                    (birth_date_normal.day !== null && birth_date_normal.day !== undefined) &&
                                    <>{birth_date_normal.day + " de "}</>
                                }
                                {
                                    (birth_date_normal.month !== null && birth_date_normal.month !== undefined) &&
                                    <>{birth_date_normal.month + " de "}</>
                                }
                                {birth_date_normal.year + " " + birth_date_normal.ac_dc}
                            </p>
                        {
                            still_alive === false &&
                            <p><b>Fecha de fallecimiento: </b>Desconocido</p>
                        }
                    </>
                }
                {
                    ((birth_date_normal === null || birth_date_normal === undefined) &&
                    (death_date_normal !== null && death_date_normal !== undefined)) &&
                    <>
                        <p><b>Fecha de nacimiento: </b> Desconocido</p>
                        <p><b>Fecha de fallecimiento: </b>
                            {
                                (death_date_normal.day !== null && death_date_normal.day !== undefined) &&
                                <>{death_date_normal.day + " de "}</>
                            }
                            {
                                (death_date_normal.month !== null && death_date_normal.month !== undefined) &&
                                <>{death_date_normal.month + " de "}</>
                            }
                            {death_date_normal.year + " " + death_date_normal.ac_dc}
                        </p>
                    </>
                }
                {
                    ((birth_date_normal === null || birth_date_normal === undefined) &&
                    (death_date_normal === null || death_date_normal === undefined) &&
                    (birth_date_century !== null && birth_date_century !== undefined) &&
                    (death_date_century !== null && death_date_century !== undefined)) &&
                    <>
                        {
                            ((birth_date_century.century === death_date_century.century) &&
                            (birth_date_century.ac_dc === death_date_century.ac_dc)) &&
                            <p><b>Siglo en el que vivió: </b>{birth_date_century + " " + birth_date_century.ac_dc}</p>
                        }
                        {
                            ((birth_date_century.century !== death_date_century.century) ||
                            (birth_date_century.ac_dc !== death_date_century.ac_dc)) &&
                            <>
                                <p><b>Siglo de nacimiento: </b>{birth_date_century.century + " " + birth_date_century.ac_dc}</p>
                                <p><b>Siglo de fallecimiento: </b>{death_date_century.century + " " + death_date_century.ac_dc}</p>
                            </>
                        }
                    </>
                }
                <p><b>País de origen: </b>{country_from}</p>
                <p><b>Oficio: </b>{historical_position}</p>
                {
                    member_of !== null && member_of !== undefined && member_of.length > 0 &&
                    <div>
                        <p><b>Es miembro de:</b></p>
                        <ul>
                            {
                                member_of.map((org) => {
                                    return(
                                        <li><a class="a1" href={`/organization/id/${org.id}`}>{org.name}</a></li>
                                    );
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
                <p><b>Canciones y álbumes que hablan de esta persona:</b></p>
            </div>
        </div>
    );
}

export default Person_Component;