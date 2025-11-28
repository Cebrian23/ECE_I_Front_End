import { useState } from "preact/hooks";

type Props = {
    surname: boolean;
    page_back: string;
}

const NameForm = (props: Props) => {
    const apellido: boolean = props.surname;
    const page_back: string = props.page_back;

    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");

    return(
        <div>
            <form>
                <h1>
                    {
                        page_back === "Literature" &&
                        <>Filtro por título</>
                    }
                    {
                        page_back !== "Literature" && apellido.valueOf() !== true &&
                        <>Filtro por nombre</>
                    }
                    {
                        page_back !== "Literature" && apellido.valueOf() === true &&
                        <>Filtro por nombre y apellido</>
                    }
                </h1>
                <div class="row_data">
                    <div class="column_data">
                        <label for="name">
                            {
                                page_back === "Literature" &&
                                <>Título:</>
                            }
                            {
                                page_back !== "Literature" &&
                                <>Nombre:</>
                            }
                        </label>
                        {
                            apellido.valueOf() === true &&
                            <>
                                <br/>
                                <label for="surname">Apellidos:</label>
                            </>
                        }
                    </div>
                    <div class="column_data">
                        <input type="text" name="name" onChange={(e) => setName(e.currentTarget.value)} required/>
                        {
                            apellido.valueOf() === true &&
                            <>
                                <br/>
                                <input type="text" name="surname" onChange={(e) => setSurname(e.currentTarget.value)}/>
                            </>
                        }
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        {
                            page_back === "Events" &&
                            <>
                                <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                                <button type="button" onClick={() => {
                                    if(name !== ""){
                                        location.href=`/event/name/Events_name?name=${name}`
                                    }
                                }}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                {
                                    surname.valueOf() === "" &&
                                    <button type="button" onClick={() => {
                                        if(name !== ""){
                                            location.href=`/person/name/People_name?name=${name}`
                                        }
                                    }}>Enviar</button>
                                }
                                {
                                    surname.valueOf() !== "" &&
                                    <button type="button" onClick={() => {
                                        if(name !== ""){
                                            location.href=`/person/name/People_name?name=${name}&surname=${surname}`
                                        }
                                    }}>Enviar</button>
                                }
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                <button type="button" onClick={() => {
                                        if(name !== ""){
                                            location.href=`/organization/name/Organizations_name?name=${name}`
                                        }
                                }}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Literature" &&
                            <>
                                <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                <button type="button" onClick={() => {
                                    if(name !== ""){
                                        location.href=`/book/title/Books_title?title=${name}`
                                    }
                                }}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Heraldries" &&
                            <>
                                <button type="button" onClick={() => location.href="/heraldry/heraldries"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/heraldry/name/Heraldries_name?name=${name}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Legends" &&
                            <>
                                <button type="button" onClick={() => location.href="/legend/legends"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/legend/name/Legends_name?name=${name}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Miths" &&
                            <>
                                <button type="button" onClick={() => location.href="/mith/miths"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/mith/name/Miths_name?name=${name}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Festivities" &&
                            <>
                                <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/festivity/name/Festivities_name?name=${name}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Monuments" &&
                            <>
                                <button type="button" onClick={() => location.href="/monument/monuments"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/monument/name/Monuments_name?name=${name}`}>Enviar</button>
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NameForm;