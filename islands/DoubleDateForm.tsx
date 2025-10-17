import { useState } from "preact/hooks";

type Props = {
    type: string;
    page_back: string;
}

const DoubleDateForm = (props: Props) => {
    const type: string = props.type;
    const page_back: string = props.page_back;

    const [year_1, setYear_1] = useState<number>(1700);
    const [year_2, setYear_2] = useState<number>(2000);
    const [ac_dc_1, setAc_dc_1] = useState<string>("d.C");
    const [ac_dc_2, setAc_dc_2] = useState<string>("d.C");

    return(
        <div>
            <form>
                <h1>Filtro por fecha</h1>
                <div class="colum_data">
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
                                    type === "Festivity" &&
                                    <>
                                        <label for="month_a">Mes:</label>
                                        <br/>
                                        <label for="day_a">Día:</label>
                                    </>
                                }
                                <br/>
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
                                    type === "Literature" &&
                                    <label for="year_a">Año de publicación máximo</label>
                                }
                                {
                                    type === "Festivity" &&
                                    <>
                                        <label for="month_b">Mes:</label>
                                        <br/>
                                        <label for="day_b">Día:</label>
                                    </>
                                }
                                <br/>
                            </div>
                        <div class="column_data">
                                {
                                    type !== "Festivity" &&
                                    <>
                                        <div class="row_data">
                                            {
                                                ac_dc_1.valueOf() === "a.C" && ac_dc_2.valueOf() === "a.C" &&
                                                <>
                                                    <input name="year_a" type="number" min={year_2.valueOf()} max="600"
                                                    defaultValue="400" onChange={(e) => {
                                                        setYear_1(Number(e.currentTarget.value));
                                                    }} required/>
                                                </>
                                            }
                                            {
                                                ac_dc_1.valueOf() === "a.C" && ac_dc_2.valueOf() === "d.C" &&
                                                <>
                                                    <input name="year_a" type="number" min="0" max="600"
                                                    defaultValue="400" onChange={(e) => {
                                                        setYear_1(Number(e.currentTarget.value));
                                                    }} required/>
                                                </>
                                            }
                                            {
                                                ac_dc_1.valueOf() === "d.C" && ac_dc_2.valueOf() === "d.C" &&
                                                <>
                                                    <input name="year_a" type="number" min="0" max={year_2.valueOf()}
                                                    defaultValue="1700" onChange={(e) => {
                                                        setYear_1(Number(e.currentTarget.value));
                                                    }} required/>
                                                </>
                                            }
                                            {
                                                page_back !== "Literature" &&
                                                <select name="ac_dc_1" onChange={(e) => {
                                                        if(e.currentTarget.value === "a.C"){
                                                            setYear_1(400);
                                                        }
                                                        else if(e.currentTarget.value === "d.C"){
                                                            setYear_1(1700);

                                                            if(ac_dc_2.valueOf() === "a.C"){
                                                                setYear_2(2000);
                                                                setAc_dc_2("d.C");
                                                            }
                                                        }

                                                        setAc_dc_1(e.currentTarget.value);
                                                    }
                                                } required>
                                                    <option value="a.C">a.C</option>
                                                    <option value="d.C" selected>d.C</option>
                                                </select>
                                            }
                                        </div>
                                        <div>
                                            <div class="row_data">
                                                {
                                                    ac_dc_1.valueOf() === "a.C" && ac_dc_2.valueOf() === "a.C" &&
                                                    <>
                                                        <input name="year_b" type="number" min="0" max={year_1.valueOf()}
                                                        defaultValue="40" onChange={(e) => {
                                                            setYear_2(Number(e.currentTarget.value));
                                                        }} required/>
                                                    </>
                                                }
                                                {
                                                    ac_dc_1.valueOf() === "a.C" && ac_dc_2.valueOf() === "d.C" &&
                                                    <>
                                                        <input name="year_b" type="number" min="0" max="2026"
                                                        defaultValue="2000" onChange={(e) => {
                                                            setYear_2(Number(e.currentTarget.value));
                                                        }} required/>
                                                    </>
                                                }
                                                {
                                                    ac_dc_1.valueOf() === "d.C" && ac_dc_2.valueOf() === "d.C" &&
                                                    <>
                                                        <input name="year_b" type="number" min={year_1.valueOf()} max="2026"
                                                        defaultValue="2000" onChange={(e) => {
                                                            setYear_2(Number(e.currentTarget.value));
                                                        }} required/>
                                                    </>
                                                }
                                                {
                                                    page_back !== "Literature" &&
                                                    <select name="ac_dc_2" onChange={(e) => {
                                                            if(e.currentTarget.value === "a.C"){
                                                                setYear_2(40);
                                                            }
                                                            else if(e.currentTarget.value === "d.C"){
                                                                setYear_2(200);
                                                            }

                                                            setAc_dc_2(e.currentTarget.value);
                                                        }
                                                        } required>
                                                        {
                                                            ac_dc_1.valueOf() === "a.C" &&
                                                            <option value="a.C">a.C</option>
                                                        }
                                                        <option value="d.C" selected>d.C</option>
                                                    </select>
                                                }
                                            </div>
                                        </div>
                                    </>
                                }
                                <br/>
                            </div>
                    </div>
                    <div class="column_data">
                        <div class="row_buttons">
                            {
                                page_back === "Events" &&
                                <>
                                    <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                                    <button type="button" onClick={() => location.href="/event/date/Events_date"}>Enviar</button>
                                </>
                            }
                            {
                                page_back === "People" &&
                                <>
                                    <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                    <button type="button" onClick={() => location.href="/person/date/People_date"}>Enviar</button>
                                </>
                            }
                            {
                                page_back === "Organizations" &&
                                <>
                                    <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                    <button type="button" onClick={() => location.href="/organization/date/Organizations_date"}>Enviar</button>
                                </>
                            }
                            {
                                page_back === "Literature" &&
                                <>
                                    <button type="button" onClick={() => location.href="/book/literature"}>Volver</button>
                                    <button type="button" onClick={() => location.href="/book/date/Books_date"}>Enviar</button>
                                </>
                            }
                            {
                                page_back === "Festivities" &&
                                <>
                                    <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                                    <button type="button" onClick={() => location.href="/festivity/date/Festivities_date"}>Enviar</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DoubleDateForm;