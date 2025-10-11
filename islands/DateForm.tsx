type Props = {
    type: string;
    start?: boolean;
    page_back: string;
}

const DateForm = (props: Props) => {
    const type: string = props.type;
    const start: boolean | undefined = props.start;
    const page_back: string = props.page_back;

    return (
        <div>
            <form>
                <h1>Filtro por fecha</h1>
                <div class="row_data">
                    <div class="row_data">
                        <div class="column_data">
                            {
                                type === "Event" &&
                                <label for="year">
                                    {
                                        start === true && "Año de inicio:"
                                    }
                                    {
                                        start === false && "Año de fin:"
                                    }
                                </label>
                            }
                            {
                                type === "Person" &&
                                <label for="year">
                                    {
                                        start === true && "Año de nacimiento:"
                                    }
                                    {
                                        start === false && "Año de fallecimiento:"
                                    }
                                </label>
                            }
                            {
                                type === "Organization" &&
                                <label for="year">
                                    {
                                        start === true && "Año de creación:"
                                    }
                                    {
                                        start === false && "Año de disolución:"
                                    }
                                </label>
                            }
                            {
                                type === "Literature" &&
                                <label for="year">
                                    {
                                        start === true && "Año de publicación mínimo:"
                                    }
                                    {
                                        start === false && "Año de publicación máximo:"
                                    }
                                </label>
                            }
                            {
                                type === "Festivity" &&
                                <>
                                    <label for="month">Mes:</label>
                                    <br/>
                                    <label for="day">Día:</label>
                                </>
                            }
                        </div>
                        <div class="column_data">
                            {
                                start === true && type !== "Festivity" &&
                                <input name="year_a" type="number" min="1700" max="2025" defaultValue="1700" required/>
                            }
                            {
                                start === false && type !== "Festivity" &&
                                <input name="year_a" type="number" min="1700" max="2025" defaultValue="2025" required/>
                            }
                            {
                                type === "Festivity" &&
                                <>
                                    <select name="month_a" required>
                                        <option value="unkown" selected>...Seleccione un mes...</option>
                                        <option value="Enero">Enero</option>
                                        <option value="Febrero">Febrero</option>
                                        <option value="Marzo">Marzo</option>
                                        <option value="Abril">Abril</option>
                                        <option value="Mayo">Mayo</option>
                                        <option value="Junio">Junio</option>
                                        <option value="Julio">Julio</option>
                                        <option value="Agosto">Agosto</option>
                                        <option value="Septiembre">Septiembre</option>
                                        <option value="Octubre">Octubre</option>
                                        <option value="Noviembre">Noviembre</option>
                                        <option value="Diciembre">Diciembre</option>
                                    </select>
                                    <br/>
                                    <input name="day_a" type="number" min="1" max="31" required/>
                                </>
                            }
                        </div>
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
                        {
                            page_back === "Legends" &&
                            <button type="button" onClick={() => location.href="/legend/legends"}>Volver</button>
                        }
                        {
                            page_back === "Miths" &&
                            <button type="button" onClick={() => location.href="/mith/miths"}>Volver</button>
                        }
                        {
                            page_back === "Festivities" &&
                            <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                        }
                        {
                            page_back === "Monuments" &&
                            <button type="button" onClick={() => location.href="/monument/monuments"}>Volver</button> 
                        }
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DateForm;