import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";

const Page = () => {
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
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                    }}>Filtrar por nombre</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar por fecha de inicio</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar por fecha de fin</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar por fecha de inicio y fin</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false}/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm doubleFilter={false} type="Event" start/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm doubleFilter={false} type="Event" start={false}/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DateForm doubleFilter type="Event"/>
            }
        </div>
    );
}

export default Page;