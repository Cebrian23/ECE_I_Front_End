import { Festivity_date } from "../../../types/festivity/Festivity_date.ts";

type Data = {
    name: string,
    date: Festivity_date,
}

const Festivity_Component = (props: Data) => {
    const name = props.name;
    const date = props.date

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                <p><b>Fecha: </b>{date.day + " de " + date.month}</p>
                <p><b>Canciones y álbumes que abordan esta festividad:</b></p>
            </div>
        </div>
    );
}

export default Festivity_Component;