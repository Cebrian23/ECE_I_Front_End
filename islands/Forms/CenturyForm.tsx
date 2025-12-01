import { useState } from "preact/hooks";

type Props = {
    type: string;
    start?: boolean;
    limit?: boolean;
    page_back: string;
}

const CenturyForm = (props: Props) => {
    const type: string = props.type;
    const start: boolean | undefined = props.start;
    const limit: boolean | undefined = props.limit;
    const page_back: string = props.page_back;

    const [century, setCentury] = useState<string>("");
    const [ac_dc, setAc_dc] = useState<string>("d.C");
    const [type_date, setType] = useState<string>("");

    if(start === true){
        setType("Inicio");
    }
    else{
        setType("Fin");
    }

    return (
        <div>
            <form>
                {
                    type === "Event" && start === true &&
                    <h1>Filtro por fecha de inicio de un evento</h1>
                }
                {
                    type === "Event" && start === false &&
                    <h1>Filtro por fecha de fin de un evento</h1>
                }
                {
                    type === "Person" && start === true &&
                    <h1>Filtro por fecha de nacimiento de una persona</h1>
                }
                {
                    type === "Person" && start === false &&
                    <h1>Filtro por fecha de fallecimiento de una persona</h1>
                }
                {
                    type === "Organization" && start === true &&
                    <h1>Filtro por fecha de creación de una organización</h1>
                }
                {
                    type === "Organization" && start === false &&
                    <h1>Filtro por fecha de disolución de una organización</h1>
                }
                {
                    type === "Literature" && start === true &&
                    <h1>Filtro por fecha de publicación de un libro</h1>
                }
                {
                    type === "Literature" && start === false &&
                    <h1>Filtro por fecha de publicación de un libro</h1>
                }
                <div class="row_data">
                    <div class="row_data">
                        <div class="column_data">
                            <br/>
                            {
                                type === "Event" &&
                                <label for="century">
                                    {
                                        start === true && 
                                        <>Siglo de inicio:</>
                                    }
                                    {
                                        start === false && 
                                        <>Siglo de fin:</>
                                    }
                                </label>
                            }
                            {
                                type === "Person" &&
                                <label for="century">
                                    {
                                        start === true &&
                                        <>Siglo de nacimiento:</>
                                    }
                                    {
                                        start === false && 
                                        <>Siglo de fallecimiento:</>
                                    }
                                </label>
                            }
                            {
                                type === "Organization" &&
                                <label for="century">
                                    {
                                        start === true &&
                                        <>Siglo de creación:</>
                                    }
                                    {
                                        start === false &&
                                        <>Siglo de disolución:</>
                                    }
                                </label>
                            }
                            {
                                type === "Literature" &&
                                <label for="century">
                                    {
                                        start === true &&
                                        <>Siglo de publicación mínimo:</>
                                    }
                                    {
                                        start === false &&
                                        <>Siglo de publicación máximo:</>
                                    }
                                </label>
                            }
                        </div>
                        <div class="column_data">
                            <div class="row_data">
                                <select name="century" onChange={(e) => setCentury(e.currentTarget.value)} required>
                                    <option value="Siglo I">Siglo I</option>
                                    <option value="Siglo II">Siglo II</option>
                                    <option value="Siglo III">Siglo III</option>
                                    <option value="Siglo IV">Siglo IV</option>
                                    <option value="Siglo V">Siglo V</option>
                                    <option value="Siglo VI">Siglo VI</option>
                                    <option value="Siglo VII">Siglo VII</option>
                                    <option value="Siglo VIII">Siglo VIII</option>
                                    <option value="Siglo IX">Siglo IX</option>
                                    <option value="Siglo X">Siglo X</option>
                                    <option value="Siglo XI">Siglo XI</option>
                                    <option value="Siglo XII">Siglo XII</option>
                                    <option value="Siglo XIII">Siglo XIII</option>
                                    <option value="Siglo XIV">Siglo XIV</option>
                                    <option value="Siglo XV">Siglo XV</option>
                                    <option value="Siglo XVI">Siglo XVI</option>
                                    <option value="Siglo XVII">Siglo XVII</option>
                                    <option value="Siglo XVIII">Siglo XVIII</option>
                                    <option value="Siglo XIX">Siglo XIX</option>
                                    <option value="Siglo XX" selected>Siglo XX</option>
                                    <option value="Siglo XXI">Siglo XXI</option>
                                </select>
                                <select name="ac_dc" onChange={(e) => setAc_dc(e.currentTarget.value)} required>
                                    <option value="d.C" selected>d.C</option>
                                    <option value="a.C">a.C</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_data">
                    <div class="row_buttons">
                        {
                            page_back === "Events" &&
                            <>
                                <button type="button" onClick={() => location.href="/event/events"}>Volver</button>
                                {
                                    limit !== undefined && limit === true &&
                                    <button type="button" onClick={() => location.href=`/event/date/Events_date?century=${century}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                                }
                                {
                                    limit !== undefined && limit === false &&
                                    <button type="button" onClick={() => location.href=`/event/date/Events_date?century=${century}&ac_dc=${ac_dc}`}>Enviar</button>
                                }
                            </>
                        }
                        {
                            page_back === "People" &&
                            <>
                                <button type="button" onClick={() => location.href="/person/people"}>Volver</button>
                                {
                                    limit !== undefined && limit === true &&
                                    <button type="button" onClick={() => location.href=`/person/date/People_date?century=${century}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                                }
                                {
                                    limit !== undefined && limit === true &&
                                    <button type="button" onClick={() => location.href=`/person/date/People_date?century=${century}&ac_dc=${ac_dc}`}>Enviar</button>
                                }
                            </>
                        }
                        {
                            page_back === "Organizations" &&
                            <>
                                <button type="button" onClick={() => location.href="/organization/organizations"}>Volver</button>
                                {
                                    limit !== undefined && limit === true &&
                                    <button type="button" onClick={() => location.href=`/organization/date/Organizations_date?century=${century}&ac_dc=${ac_dc}&type=${type_date}`}>Enviar</button>
                                }
                                {
                                    limit !== undefined && limit === true &&
                                    <button type="button" onClick={() => location.href=`/organization/date/Organizations_date?century=${century}&ac_dc=${ac_dc}`}>Enviar</button>
                                }
                            </>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CenturyForm;