import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";

const People = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [surnameFilter, showSurameFilter] = useState<boolean>(false);
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
                        showNameFilter(true);
                        showSurameFilter(true);
                    }}></button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar por fecha de nacimiento</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar por fecha de fallecimiento</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar por fecha de nacimiento y fallecimiento</button>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                </form>
            }
            {
                nameFilter.valueOf() === true && surnameFilter.valueOf() === false &&
                <NameForm surname={false}/>
            }
            {
                nameFilter.valueOf() === true && surnameFilter.valueOf() === true &&
                <NameForm surname/>
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

export default People;