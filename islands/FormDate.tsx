type DobleFiltro = {
    filter: boolean;
    type: string;
    start?: boolean;
}

const FormDate = (filtro: DobleFiltro) => {
    const filter: boolean = filtro.filter;
    const type: string = filtro.type;
    const start: boolean | undefined = filtro.start;

    return (
        <div>
            <form>
                <h1>Filtro por fecha</h1>
                <div class="row_data">
                    {
                        filter === false && 
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
                            </div>
                            <div class="column_data">
                                <input name="year_a" type="number" min="1700" max="2025"/>
                                <br/>
                                <select name="month_a">
                                    <option value="unkown" selected></option>
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
                    }
                    {
                        filter === true &&
                        <div class="row_data">
                            <div class="row_data">
                                <div class="column_data">
                                    {
                                        type === "Event" && <label for="year_b">Año de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="year_b">Año de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="year_b">Año de creación:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
                                        <label for="year_b">Año:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="month_b">Mes de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="month_b">Mes de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="month_b">Mes de creación:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
                                        <label for="month_b">Mes:</label>
                                    }
                                    <br/>
                                    {
                                        type === "Event" && <label for="day_b">Día de inicio:</label>
                                    }
                                    {
                                        type === "Person" && <label for="day_b">Día de nacimiento:</label>
                                    }
                                    {
                                        type === "Organization" && <label for="day_b">Día de creación:</label>
                                    }
                                    {
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
                                        <label for="day_b">Día:</label>
                                    }
                                </div>
                                <div class="column_data">
                                    <input name="year_a" type="number" min="1700" max="2025"/>
                                    <br/>
                                    <select name="month_a">
                                        <option value="unkown" selected></option>
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
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
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
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
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
                                        type !== "Event" && type !== "Person" && type !== "Organization" &&
                                        <label for="day_b">Día:</label>
                                    }
                                </div>
                                <div class="column_data">
                                    <input name="year_b" type="number" min="1700" max="2025"/>
                                    <br/>
                                    <select name="month_b">
                                        <option value="unkown" selected></option>
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
                                    <input name="day_b" type="number" min="1" max="31"/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div class="column_data">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default FormDate;