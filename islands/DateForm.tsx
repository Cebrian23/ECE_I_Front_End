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
    let contador = 0;

    const [day, setDay] = useState<string>("1");
    const [month, setMonth] = useState<string>("");
    const [year, setYear] = useState<number>();
    const [ac_dc, setAc_dc] = useState<string>("d.C");
    const [type_date, setType] = useState<string>("");

    if(start === true){
        setType("Inicio");
    }
    else{
        setType("Fin");
    }

    useEffect(() => {
        if((month.valueOf() === "Abril" || month.valueOf() === "Junio" ||
            month.valueOf() === "Septiembre" || month.valueOf() === "Noviembre")
            && (Number(day.valueOf()) >= 30)){
            setDay("30");
        }
        else if((month.valueOf() === "Febrero") && (Number(day.valueOf()) >= 28)){
            setDay("28");
        }

        if(contador === 0){
            if(type_date === "Inicio"){
                setYear(1700);
            }
            else{
                setYear(2000);
            }
            contador++;
        }
    }, [type_date, month, day]);

    return (
        <div>
            <form>
                {
                    type === "Event" && start === true &&
                    <h1>Filtro por fecha de inicio de un evento</h1>
                }
                {
                    type === "Event" && start === false &&
                    <h1>Filtro por fecha de fin de un evento</h1>
                }
                {
                    type === "Person" && start === true &&
                    <h1>Filtro por fecha de nacimiento de una persona</h1>
                }
                {
                    type === "Person" && start === false &&
                    <h1>Filtro por fecha de fallecimiento de una persona</h1>
                }
                {
                    type === "Organization" && start === true &&
                    <h1>Filtro por fecha de creación de una organización</h1>
                }
                {
                    type === "Organization" && start === false &&
                    <h1>Filtro por fecha de disolución de una organización</h1>
                }
                {
                    type === "Literature" && start === true &&
                    <h1>Filtro por fecha de publicación de un libro</h1>
                }
                {
                    type === "Literature" && start === false &&
                    <h1>Filtro por fecha de publicación de un libro</h1>
                }
                <div class="row_data">
                    <div class="row_data">
                        <div class="column_data">
                            <br/>
                            {
                                type === "Event" &&
                                <label for="year">
                                    {
                                        start === true && 
                                        <>Año de inicio:</>
                                    }
                                    {
                                        start === false && 
                                        <>Año de fin:</>
                                    }
                                </label>
                            }
                            {
                                type === "Person" &&
                                <label for="year">
                                    {
                                        start === true &&
                                        <>Año de nacimiento:</>
                                    }
                                    {
                                        start === false && 
                                        <>Año de fallecimiento:</>
                                    }
                                </label>
                            }
                            {
                                type === "Organization" &&
                                <label for="year">
                                    {
                                        start === true &&
                                        <>Año de creación:</>
                                    }
                                    {
                                        start === false &&
                                        <>Año de disolución:</>
                                    }
                                </label>
                            }
                            {
                                type === "Literature" &&
                                <label for="year">
                                    {
                                        start === true &&
                                        <>Año de publicación mínimo:</>
                                    }
                                    {
                                        start === false &&
                                        <>Año de publicación máximo:</>
                                    }
                                </label>
                            }
                            <br/>
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
                            <div class="row_data">
                            {
                                start === true && type !== "Festivity" && ac_dc === "d.C" &&
                                <input name="year" type="number" min="0" max="2026" defaultValue="1700" onChange={(e) => {setYear(Number(e.currentTarget.value))}} required/>
                            }
                            {
                                start === true && type !== "Festivity" && ac_dc === "a.C" &&
                                <input name="year" type="number" min="0" max="600" defaultValue="400" onChange={(e) => setYear(Number(e.currentTarget.value))} required/>
                            }
                            {
                                start === false && type !== "Festivity" && ac_dc === "d.C" &&
                                <input name="year" type="number" min="0" max="2026" defaultValue="2000" onChange={(e) => setYear(Number(e.currentTarget.value))} required/>
                            }
                            {
                                start === false && type !== "Festivity" && ac_dc === "a.C" &&
                                <input name="year" type="number" min="0" max="600" defaultValue="40" onChange={(e) => setYear(Number(e.currentTarget.value))} required/>
                            }
                            {
                                type !== "Literature" && type !== "Festivity" && 
                                    <select name="ac_dc" onChange={(e) => 
                                        {
                                            if(e.currentTarget.value === "a.C"){
                                                if(start === true){
                                                    setYear(400);
                                                }
                                                else{
                                                    setYear(40);
                                                }
                                            }
                                            else if(e.currentTarget.value === "d.C"){
                                                if(start === true){
                                                    setYear(1700);
                                                }
                                                else{
                                                    setYear(2000);
                                                }
                                            }

                                            setAc_dc(e.currentTarget.value);
                                        }
                                    } required>
                                        <option value="d.C" selected>d.C</option>
                                        <option value="a.C">a.C</option>
                                    </select>
                            }
                            </div>
                            {
                                type === "Festivity" &&
                                <>
                                    <select name="month" required onChange={(e) => setMonth(e.currentTarget.value)}>
                                        <option value="Enero" selected>Enero</option>
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
                                <button type="button" onClick={() => location.href=`/event/date/Events_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/person/date/People_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/organization/date/Organizations_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Literature" &&
                            <>
                                <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/book/date/Books_date?year=${year}&type=${type_date}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Festivities" &&
                            <>
                                <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/festivity/date/Festivities_date?month=${month}&day=${day}`}>Enviar</button>
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DateForm;