import { useEffect, useState } from "preact/hooks";

type Data = {
    type: string;
    start?: boolean;
    limit?: boolean;
    page_back: string;
}

const DateForm = (props: Data) => {
    const type: string = props.type;
    const start: boolean | undefined = props.start;
    const limit: boolean | undefined = props.limit;
    const page_back: string = props.page_back;
    let contador = 0;

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
        if(contador === 0){
            if(type_date === "Inicio"){
                setYear(1700);
            }
            else{
                setYear(2000);
            }
            contador++;
        }
    }, [type_date]);

    return (
        <div>
            <form>
                {
                    type === "Event" && limit === true && start === true &&
                    <h1>Filtrar desde una fecha de inicio de un evento</h1>
                }
                {
                    type === "Event" && limit === true && start === false &&
                    <h1>Filtrar hasta una fecha de fin de un evento</h1>
                }
                {
                    type === "Event" && limit === false && start === true &&
                    <h1>Filtro por fecha de inicio de un evento</h1>
                }
                {
                    type === "Event" && limit === false && start === false &&
                    <h1>Filtro por fecha de fin de un evento</h1>
                }
                {
                    type === "Person" && limit === true && start === true &&
                    <h1>Filtrar desde una fecha de nacimiento de una persona</h1>
                }
                {
                    type === "Person" && limit === true && start === false &&
                    <h1>Filtrar hasta una fecha de fallecimiento de una persona</h1>
                }
                {
                    type === "Person" && limit === false && start === true &&
                    <h1>Filtro por fecha de nacimiento de una persona</h1>
                }
                {
                    type === "Person" && limit === false && start === false &&
                    <h1>Filtro por fecha de fallecimiento de una persona</h1>
                }
                {
                    type === "Organization" && limit === true && start === true &&
                    <h1>Filtrar desde una fecha de creación de una organización</h1>
                }
                {
                    type === "Organization" && limit === true && start === false &&
                    <h1>Filtrar hasta una fecha de disolución de una organización</h1>
                }
                {
                    type === "Organization" && limit === false && start === true &&
                    <h1>Filtro por fecha de creación de una organización</h1>
                }
                {
                    type === "Organization" && limit === false && start === false &&
                    <h1>Filtro por fecha de disolución de una organización</h1>
                }
                {
                    type === "Literature" && limit === false &&
                    <h1>Filtrar por fecha de publicación</h1>
                }
                {
                    type === "Literature" && limit === true && start === true &&
                    <h1>Filtro desde una fecha de publicación de un libro</h1>
                }
                {
                    type === "Literature" && limit === true && start === false &&
                    <h1>Filtro hasta una fecha de publicación de un libro</h1>
                }
                <div class="row_data">
                    <div class="row_data">
                        <div class="column_data">
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
                                        start === undefined &&
                                        <>Año de publicación:</>
                                    }
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
                        </div>
                        <div class="column_data">
                            <div class="row_data">
                                <br/>
                                {
                                    type === "Literature" && start === undefined &&
                                    <input name="year" type="number" min="0" max="2026" defaultValue="1700" onChange={(e) => {setYear(Number(e.currentTarget.value))}} required/>
                                }
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
                        </div>
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        {
                            page_back === "Events" &&
                            <>
                                <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/event/date/Events_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}&limit=${limit}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/person/date/People_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}&limit=${limit}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                <button type="button" onClick={() => location.href=`/organization/date/Organizations_date?year=${year}&ac_dc=${ac_dc}&type=${type_date}&limit=${limit}`}>Enviar</button>
                            </>
                        }
                        {
                            page_back === "Literature" &&
                            <>
                                <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                {
                                    limit === true &&
                                    <button type="button" onClick={() => location.href=`/book/date/Books_date?year=${year}&type=${type_date}&limit=${limit}`}>Enviar</button>
                                }
                                {
                                    limit === false &&
                                    <button type="button" onClick={() => location.href=`/book/date/Books_date?year=${year}&limit=${limit}`}>Enviar</button>
                                }
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DateForm;