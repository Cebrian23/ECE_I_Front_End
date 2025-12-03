import { useState } from "preact/hooks";
import NameForm from "../Forms/NameForm.tsx";
import DateForm from "../Forms/DateForm.tsx";
import DoubleDateForm from "../Forms/DoubleDateForm.tsx";

const People = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [surnameFilter, showSurnameFilter] = useState<boolean>(false);
    const [nicknameFilter, showNicknameFilter] = useState<boolean>(false);
    const [exactDateFilter, showExactDateFilter] = useState<boolean>(false);
    const [exactBirthFilter, showExactBirthFilter] = useState<boolean>(false);
    const [exactDeathFilter, showExactDeathFilter] = useState<boolean>(false);
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
                        showSurnameFilter(true);
                    }}>Filtrar por nombre y apellido</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showNicknameFilter(true);
                    }}>Filtrar por apodo</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar desde una fecha de nacimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showExactBirthFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de nacimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar hasta una fecha de fallecimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showExactDeathFilter(true);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de fallecimiento</button>
                    <br/>
                    <button type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar entre una fecha de nacimiento y una de fallecimiento</button>
                    <br/>
                    <button type="button" onClick={() => location.href="/person/all/All_people"}>Mostrar todos los datos</button>
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
                nicknameFilter.valueOf() === true &&
                <NameForm surname={false} nickname page_back="People"/>
            }
            {
                exactDateFilter.valueOf() === true && exactBirthFilter.valueOf() === true &&
                <DateForm type="Person" limit={false} start page_back="People"/>
            }
            {
                exactDateFilter.valueOf() === true && exactDeathFilter.valueOf() === true &&
                <DateForm type="Person" limit={false} start={false} page_back="People"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Person" limit start page_back="People"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Person" limit start={false} page_back="People"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Person" page_back="People"/>
            }
        </div>
    );
}

export default People;