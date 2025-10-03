import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";

const Festivities = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [dateFilter, showInitDateFilter] = useState<boolean>(false);

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
                        showInitDateFilter(true);
                    }}>Filtrar por fecha</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Festivities"/>
            }
            {
                dateFilter.valueOf() === true &&
                <DateForm doubleFilter={false} type="Festivity" page_back="Festivities"/>
            }
        </div>
    );
}

export default Festivities;