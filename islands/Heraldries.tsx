import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";

const Heraldries = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);

    return(
        <div>
            {
                initialForm.valueOf() === true &&
                <form>
                    <h1>Selecciona la acción con la que desea obtener los datos:</h1>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                    }}>Filtrar por nombre</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false}/>
            }
        </div>
    );
}

export default Heraldries;