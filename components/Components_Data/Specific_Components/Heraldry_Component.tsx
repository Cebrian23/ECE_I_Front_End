type Data = {
    name: string,
}

const Heraldry_Component = (props: Data) => {
    const name = props.name;

    return(
        <div class="card_head">
            <p><b>Nombre: </b>{name}</p>
            <p><b>Canciones y álbumes que hablan de esta heráldica:</b></p>
        </div>
    );
}

export default Heraldry_Component;