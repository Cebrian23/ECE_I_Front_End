type Props = {
    surname: boolean;
    page_back: string;
}

const NameForm = (props: Props) => {
    const apellido: boolean = props.surname;
    const page_back: string = props.page_back;

    return(
        <div>
            <form>
                <h1>
                    {
                        page_back === "Literature" &&
                        <>Filtro por título</>
                    }
                    {
                        page_back !== "Literature" &&
                        <>Filtro por nombre</>
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
                        <input type="text" name="name" required/>
                        {
                            apellido.valueOf() === true &&
                            <>
                                <br/>
                                <input type="text" name="surname"/>
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
                                <button type="submit" onClick={() => location.href="/event/name/Events_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/person/name/People_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/organization/name/Organizations_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Literature" &&
                            <>
                                <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/book/title/Books_title"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Heraldries" &&
                            <>
                                <button type="button" onClick={() => location.href="/heraldry/heraldries"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/heraldry/name/Heraldries_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Legends" &&
                            <>
                                <button type="button" onClick={() => location.href="/legend/legends"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/legend/name/Legends_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Festivities" &&
                            <>
                                <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/festivity/name/Festivities_name"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Monuments" &&
                            <>
                                <button type="button" onClick={() => location.href="/monument/monuments"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/monument/name/Monuments_name"}>Enviar</button>
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NameForm;