import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";
import DoubleDateForm from "./DoubleDateForm.tsx";

const Literature = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [initDateFilter, showInitDateFilter] = useState<boolean>(false);
    const [endDateFilter, showEndDateFilter] = useState<boolean>(false);
    const [doubleDateFilter, showDoubleDateFilter] = useState<boolean>(false);
    
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
                    }}>Filtrar por fecha de publicación mínima</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar por fecha de publicación máxima</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar por fecha de publicación mínima y máxima</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Literature"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Literature" start page_back="Literature"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Literature" start={false} page_back="Literature"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Literature" page_back="Literature"/>
            }
        </div>
    );
}

export default Literature;