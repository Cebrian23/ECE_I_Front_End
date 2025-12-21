import { useState } from "preact/hooks";
import NameForm from "../Forms/NameForm.tsx";
import DateForm from "../Forms/DateForm.tsx";
import DoubleDateForm from "../Forms/DoubleDateForm.tsx";

const Organizations = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [exactDateFilter, showExactDateFilter] = useState<boolean>(false);
    const [exactCreationFilter, showExactCreationFilter] = useState<boolean>(false);
    const [exactDissolutionFilter, showExactDissolutionFilter] = useState<boolean>(false);
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
                    }}>Filtrar desde una fecha de creación</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showExactCreationFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de creación</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar hasta una fecha de disolución</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showExactDissolutionFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de disolución</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar entre una fecha de creación y una disolución</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => location.href="/organization/all/All_organizations"}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Organizations"/>
            }
            {
                exactDateFilter.valueOf() === true && exactCreationFilter.valueOf() === true &&
                <DateForm type="Organization" limit={false} start page_back="Organizations"/>
            }
            {
                exactDateFilter.valueOf() === true && exactDissolutionFilter.valueOf() === true &&
                <DateForm type="Organization" limit={false} start={false} page_back="Organizations"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Organization" limit start page_back="Organizations"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Organization" limit start={false} page_back="Organizations"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Organization" page_back="Organizations"/>
            }
        </div>
    );
}

export default Organizations;