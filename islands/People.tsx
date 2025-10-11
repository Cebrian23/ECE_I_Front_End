import { useState } from "preact/hooks";
import NameForm from "./NameForm.tsx";
import DateForm from "./DateForm.tsx";
import DoubleDateForm from "./DoubleDateForm.tsx";

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
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                    }}>Filtrar por nombre</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                        showSurameFilter(true);
                    }}>Filtrar por nombre y apellido</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar por fecha de nacimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar por fecha de fallecimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar por fecha de nacimiento y fallecimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                    }}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true && surnameFilter.valueOf() === false &&
                <NameForm surname={false} page_back="People"/>
            }
            {
                nameFilter.valueOf() === true && surnameFilter.valueOf() === true &&
                <NameForm surname page_back="People"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Person" start page_back="People"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Person" start={false} page_back="People"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Person" page_back="People"/>
            }
        </div>
    );
}

export default People;