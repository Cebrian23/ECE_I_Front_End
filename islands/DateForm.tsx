import { useEffect, useState } from "preact/hooks";

type Props = {
    type: string;
    start?: boolean;
    page_back: string;
}

const DateForm = (props: Props) => {
    const type: string = props.type;
    const start: boolean | undefined = props.start;
    const page_back: string = props.page_back;

    const [day, setDay] = useState<string>("1");
    const [month, setMonth] = useState<string>("");

    useEffect(() => {
        if((month.valueOf() === "Abril" || month.valueOf() === "Junio" ||
            month.valueOf() === "Septiembre" || month.valueOf() === "Noviembre")
            && (Number(day.valueOf()) >= 30)){
            setDay("30");
        }
        else if((month.valueOf() === "Febrero") && (Number(day.valueOf()) >= 28)){
            setDay("28");
        }
    }, [month, day]);

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
                                <div class="row_data">
                                    <input name="year" type="number" min="1700" max="2025" defaultValue="1700" required/>
                                    {
                                        type !== "Literature" &&
                                        <select name="ac_dc" required>
                                            <option value="d.C" selected>d.C</option>
                                            <option value="a.C">a.C</option>
                                        </select>
                                    }
                                    <input name="type" type="text" defaultValue="Inicio" hidden required/>
                                </div>
                            }
                            {
                                start === false && type !== "Festivity" &&
                                <div class="row_data">
                                    <input name="year" type="number" min="1700" max="2025" defaultValue="2025" required/>
                                    {
                                        type !== "Literature" &&
                                        <select name="ac_dc" required>
                                            <option value="d.C" selected>d.C</option>
                                            <option value="a.C">a.C</option>
                                        </select>
                                    }
                                    <input name="type" type="text" defaultValue="Fin" hidden required/>
                                </div>
                            }
                            {
                                type === "Festivity" &&
                                <>
                                    <select name="month" required onChange={(e) => setMonth(e.currentTarget.value)}>
                                        <option value="" selected>...Seleccione un mes...</option>
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
                                    {
                                        (month.valueOf() === "Enero" || month.valueOf() === "Marzo" ||
                                        month.valueOf() === "Mayo" || month.valueOf() === "Julio" ||
                                        month.valueOf() === "Agosto" || month.valueOf() === "Octubre" ||
                                        month.valueOf() === "Diciembre") && 
                                        <input name="day" type="number" min="1" max="31"
                                        onChange={(e) => setDay(e.currentTarget.value)}
                                        defaultValue={day.valueOf()} required/>
                                    }
                                    {
                                        (month.valueOf() === "Abril" || month.valueOf() === "Junio" ||
                                        month.valueOf() === "Septiembre" || month.valueOf() === "Noviembre" ||
                                        month.valueOf() === "") &&
                                        <input name="day" type="number" min="1" max="30"
                                        onChange={(e) => setDay(e.currentTarget.value)}
                                        defaultValue={day.valueOf()} required/>
                                    }
                                    {
                                        month.valueOf() === "Febrero" &&
                                        <input name="day" type="number" min="1" max="28"
                                        onChange={(e) => setDay(e.currentTarget.value)}
                                        defaultValue={day.valueOf()} required/>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        {
                            page_back === "Events" &&
                            <>
                                <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/event/date/Events_date"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/person/date/People_date"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/organization/date/Organizations_date"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Literature" &&
                            <>
                                <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/book/date/Books_date"}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Festivities" &&
                            <>
                                <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                                <button type="submit" onClick={() => location.href="/festivity/date/Festivities_date"}>Enviar</button>
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DateForm;