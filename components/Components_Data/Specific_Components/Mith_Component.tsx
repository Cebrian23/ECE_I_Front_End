type Data = {
    name: string,
}

const Mith_Component = (props: Data) => {
    const name = props.name;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                <p><b>Canciones y álbumes que abordan este mito:</b></p>
            </div>
        </div>
    );
}

export default Mith_Component;