type Props = {
    doubleFilter: boolean;
    type: string;
    start?: boolean;
    page_back: string;
}

const DateForm = (props: Props) => {
    const doubleFilter: boolean = props.doubleFilter;
    const type: string = props.type;
    const start: boolean | undefined = props.start;
    const page_back: string = props.page_back;

    return (
        <div>
            <form>
                <h1>Filtro por fecha</h1>
                <div class="row_data">
                    {
                        doubleFilter === false && 
                        <div class="row_data">
                            <div class="column_data">
                                {
                                    type === "Event" &&
                                    <label for="year_a">
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
                                    <label for="year_a">
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
                                    <label for="year_a">
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
                                    <label for="year_a">
                                        {
                                            start === true && "Año de publicación mínimo:"
                                        }
                                        {
                                            start === false && "Año de publicación máximo:"
                                        }
                                    </label>
                                }
                                {
                                    type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" && type !== "Festivity" &&
                                    <label for="year_b">Año:</label>
                                }
                                <br/>
                                {
                                    type === "Event" &&
                                    <label for="month_a">
                                        {
                                            start === true && "Mes de inicio:"
                                        }
                                        {
                                            start === false && "Mes de fin:"
                                        }
                                    </label>
                                }
                                {
                                    type === "Person" &&
                                    <label for="month_a">
                                        {
                                            start === true && "Mes de nacimiento:"
                                        }
                                        {
                                            start === false && "Mes de fallecimiento:"
                                        }
                                    </label>
                                }
                                {
                                    type === "Organization" &&
                                    <label for="month_a">
                                        {
                                            start === true && "Mes de creación:"
                                        }
                                        {
                                            start === false && "Mes de disolución:"
                                        }
                                    </label>
                                }
                                {
                                    type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                    <label for="month_a">Mes:</label>
                                }
                                <br/>
                                {
                                    type === "Event" &&
                                    <label for="day_a">
                                        {
                                            start === true && "Día de inicio:"
                                        }
                                        {
                                            start === false && "Día de fin:"
                                        }
                                    </label>
                                }
                                {
                                    type === "Person" &&
                                    <label for="day_a">
                                        {
                                            start === true && "Día de nacimiento:"
                                        }
                                        {
                                            start === false && "Día de fallecimiento:"
                                        }
                                    </label>
                                }
                                {
                                    type === "Organization" &&
                                    <label for="day_a">
                                        {
                                            start === true && "Día de creación:"
                                        }
                                        {
                                            start === false && "Día de disolución:"
                                        }
                                    </label>
                                }
                                {
                                    type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                    <label for="day_a">Día:</label>
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
                                    type !== "Festivity" &&
                                    <br/>
                                }
                                <select name="month_a" required={type==="Festivity"}>
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
                                <input name="day_a" type="number" min="1" max="31" required={type==="Festivity"}/>
                            </div>
                        </div>
                    }
                    {
                        doubleFilter === true &&
                        <div class="row_data">
                            <div class="row_data">
                                <div class="column_data">
                                    {
                                        type === "Event" && <label for="year_a">Año de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="year_a">Año de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="year_a">Año de creación:</label>
                                    }
                                    {
                                        type === "Literature" &&
                                        <label for="year_a">Año de publicación mínimo</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="year_a">Año:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="month_a">Mes de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="month_a">Mes de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="month_a">Mes de creación:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="month_a">Mes:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="day_a">Día de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="day_a">Día de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="day_a">Día de creación:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="day_a">Día:</label>
                                    }
                                </div>
                                <div class="column_data">
                                    <input name="year_a" type="number" min="1700" max="2025" defaultValue="1700" required/>
                                    <br/>
                                    <select name="month_a">
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
                                    <input name="day_a" type="number" min="1" max="31"/>
                                </div>
                            </div>
                            <div class="row_data">
                                <div class="column_data">
                                    {
                                        type === "Event" && <label for="year_b">Año de fin:</label>
                                    }
                                    {
                                        type === "Person" && <label for="year_b">Año de fallecimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="year_b">Año de disolución:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="year_b">Año:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="month_b">Mes de fin:</label>
                                    }
                                    {
                                        type === "Person" && <label for="month_b">Mes de fallecimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="month_b">Mes de disolución:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="month_b">Mes:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="day_b">Día de fin:</label>
                                    }
                                    {
                                        type === "Person" && <label for="day_b">Día de fallecimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="day_b">Día de disolución:</label>
                                    }
                                    {
                                        type === "Literature" &&
                                        <label for="day_b">Día de publicación máximo</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" && type !== "Literature" &&
                                        <label for="day_b">Día:</label>
                                    }
                                </div>
                                <div class="column_data">
                                    <input name="year_b" type="number" min="1700" max="2025" defaultValue="2025"/>
                                    <br/>
                                    <select name="month_b">
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
                                    <input name="day_b" type="number" min="1" max="31" defaultValue="31"/>
                                </div>
                            </div>
                        </div>
                    }
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
                            page_back === "Festivities" &&
                            <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                        }
                        <button type="submit">Enviar</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}

export default DateForm;