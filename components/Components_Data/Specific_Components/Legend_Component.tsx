type Data = {
    name: string,
}

const Legend_Component = (props: Data) => {
    const name = props.name;

    return(
        <div class="card_head">
            <p><b>Nombre: </b>{name}</p>
            <p><b>Canciones y álbumes que abordan esta leyenda:</b></p>
        </div>
    );
}

export default Legend_Component;