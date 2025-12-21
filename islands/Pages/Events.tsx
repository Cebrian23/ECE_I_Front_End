import { useState } from "preact/hooks";
import NameForm from "../Forms/NameForm.tsx";
import DateForm from "../Forms/DateForm.tsx";
import DoubleDateForm from "../Forms/DoubleDateForm.tsx";

const Events = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [exactDateFilter, showExactDateFilter] = useState<boolean>(false);
    const [exactStartFilter, showExactStartFilter] = useState<boolean>(false);
    const [exactEndFilter, showExactEndFilter] = useState<boolean>(false);
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
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showNameFilter(true);
                    }}>Filtrar por nombre</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar desde una fecha de inicio</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showExactStartFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de inicio</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar hasta una fecha de fin</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showExactEndFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de fin</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar entre una fecha de inicio y una de fin</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => location.href="/event/all/All_events"}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Events"/>
            }
            {
                exactDateFilter.valueOf() === true && exactStartFilter.valueOf() === true &&
                <DateForm type="Event" limit={false} start page_back="Events"/>
            }
            {
                exactDateFilter.valueOf() === true && exactEndFilter.valueOf() === true &&
                <DateForm type="Event" limit={false} start={false} page_back="Events"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Event" limit start page_back="Events"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Event" limit start={false} page_back="Events"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Event" page_back="Events"/>
            }
        </div>
    );
}

export default Events;