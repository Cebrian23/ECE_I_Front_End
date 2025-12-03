import { useState, useEffect } from "preact/hooks";

const FestivityForm = () => {
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
                <h1>Filtrar por fecha de la festividad</h1>
                <div class="row_data">
                    <div class="row_data">
                        <div class="column_data">
                            <label for="month">Mes:</label>
                            <br/>
                            <label for="day">Día:</label>
                        </div>
                        <div class="column_data">
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
                        </div>
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        <button type="button" onClick={() => location.href="/festivity/festivities"}>Volver</button>
                        <button type="button" onClick={() => location.href=`/festivity/date/Festivities_date?month=${month}&day=${day}`}>Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FestivityForm;