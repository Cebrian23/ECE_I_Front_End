import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";
import DoubleDateForm from "./DoubleDateForm.tsx";

const Events = () => {
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
                    }}>Filtrar por fecha de inicio</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar por fecha de fin</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar por fecha de inicio y fin</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Events"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Event" start page_back="Events"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Event" start={false} page_back="Events"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Event" page_back="Events"/>
            }
        </div>
    );
}

export default Events;