import { useState } from "preact/hooks";
import NameForm from "../Forms/NameForm.tsx";
import DateForm from "../Forms/DateForm.tsx";
import DoubleDateForm from "../Forms/DoubleDateForm.tsx";

const Literature = () => {
    const [initialForm, showInitialForm] = useState<boolean>(true);
    const [nameFilter, showNameFilter] = useState<boolean>(false);
    const [exactDateFilter, showExactDateFilter] = useState<boolean>(false);
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
                    }}>Filtrar por título</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showExactDateFilter(true);
                    }}>Filtrar por fecha de publicación</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showInitDateFilter(true);
                    }}>Filtrar desde una fecha de publicación</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showEndDateFilter(true);
                    }}>Filtrar hasta una fecha de publicación</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => {
                        showInitialForm(false);
                        showDoubleDateFilter(true);
                    }}>Filtrar entre una fecha de publicación mínima y una máxima</button>
                    <br/>
                    <button class="pageButtonForm" type="button" onClick={() => location.href="/book/all/All_books"}>Mostrar todos los datos</button>
                    <br/>
                </form>
            }
            {
                nameFilter.valueOf() === true &&
                <NameForm surname={false} page_back="Literature"/>
            }
            {
                exactDateFilter.valueOf() === true &&
                <DateForm type="Literature" limit={false} page_back="Literature"/>
            }
            {
                initDateFilter.valueOf() === true &&
                <DateForm type="Literature" limit start page_back="Literature"/>
            }
            {
                endDateFilter.valueOf() === true &&
                <DateForm type="Literature" limit start={false} page_back="Literature"/>
            }
            {
                doubleDateFilter.valueOf() === true &&
                <DoubleDateForm type="Literature" page_back="Literature"/>
            }
        </div>
    );
}

export default Literature;