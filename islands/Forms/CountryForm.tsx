import { useState } from "preact/hooks";

const CountryForm = () => {
    const [country, setCountry] = useState<string>("");

    return(
        <div>
            <form>
                <h1>Filtro por país</h1>
                <div class="row_data">
                    <div class="column_data">
                        <label for="name">País:</label>
                    </div>
                    <div class="column_data">
                        <input type="text" name="name" onChange={(e) => setCountry(e.currentTarget.value)} required/>
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        <button type="button" onClick={() => location.href="/monument/monuments"}>Volver</button>
                        <button type="button" onClick={() => location.href=`/monument/country_in/Monuments_country?country=${country}`}>Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CountryForm;