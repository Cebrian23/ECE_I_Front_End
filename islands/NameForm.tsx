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
                <h1>Filtro por nombre</h1>
                <div class="row_data">
                    <div class="column_data">
                        <label for="name">Nombre:</label>
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
                            <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                        }
                        {
                            page_back === "People" &&
                            <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                        }
                        {
                            page_back === "Organizations" &&
                            <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                        }
                        {
                            page_back === "Literature" &&
                            <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                        }
                        {
                            page_back === "Heraldries" &&
                            <button type="button" onClick={() => location.href="/heraldry/heraldries"}>Volver</button>
                        }
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NameForm;