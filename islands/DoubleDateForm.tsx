import { useState } from "preact/hooks";

type Props = {
    type: string;
    page_back: string;
}

const DoubleDateForm = (props: Props) => {
    const type: string = props.type;
    const page_back: string = props.page_back;

    const [year_1, setYear_1] = useState<number>(1700);
    const [year_2, setYear_2] = useState<number>(2025);
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
                                            <input name="year_a" type="number" min="0" max="2026"
                                            defaultValue="2020" onChange={(e) => {
                                                setYear_1(Number(e.currentTarget.value));
                                            }} required/>
                                            <select name="ac_dc_1" onChange={(e) => setAc_dc_1(e.currentTarget.value)} required>
                                                <option value="a.C">a.C</option>
                                                <option value="d.C" selected>d.C</option>
                                            </select>
                                        </div>
                                        <div>
                                            <div class="row_data">
                                                <input name="year_b" type="number" min="0" max="2026"
                                                defaultValue="2025" onChange={(e) => {
                                                    setYear_2(Number(e.currentTarget.value));
                                                }} required/>
                                                <select name="ac_dc_2" onChange={(e) => setAc_dc_2(e.currentTarget.value)} required>
                                                    {
                                                        ac_dc_1.valueOf() === "a.C" &&
                                                        <option value="a.C">a.C</option>
                                                    }
                                                    <option value="d.C" selected>d.C</option>
                                                </select>
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
                </div>
            </form>
        </div>
    );
}

export default DoubleDateForm;