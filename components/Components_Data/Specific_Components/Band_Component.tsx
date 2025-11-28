type Data = {
    name: string,
}

const Band_Component = (props: Data) => {
    const name = props.name;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                <p><b>Albumes de la banda:</b></p>
            </div>
        </div>
    );
}

export default Band_Component;