import { useState } from "preact/hooks";
import NameForm from "../Forms/NameForm.tsx";
import CountryForm from "../Forms/CountryForm.tsx";

const Monuments = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [countryFilter, showCountryFilter] = useState<boolean>(false);
    
    return(
        <div>
            {
                initialForm.valueOf() === true &&
                <form>
                    <h1>Selecciona la acción con la que desea obtener los datos:</h1>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                    }}>Filtrar por nombre</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showCountryFilter(true);
                    }}>Filtrar por país de localización</button>
                    <br/>
                    <button type="button" onClick={() => location.href="/monument/all/All_monuments"}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Monuments"/>
            }
            {
                countryFilter.valueOf() === true &&
                <CountryForm/>
            }
        </div>
    );
}

export default Monuments;