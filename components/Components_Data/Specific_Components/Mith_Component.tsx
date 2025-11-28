type Data = {
    name: string,
}

const Mith_Component = (props: Data) => {
    const name = props.name;

    return(
        <div>
            <p><b>Nombre: </b>{name}</p>
            <p><b>Canciones y álbumes que abordan este mito:</b></p>
        </div>
    );
}

export default Mith_Component;