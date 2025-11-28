type Data = {
    name: string,
    still_exists: boolean,
    country_in?: string
}

const Monument_Component = (props: Data) => {
    const name = props.name;
    const still_exists = props.still_exists;
    const country_in = props.country_in;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                <p><b>¿Sigue existiendo? </b>
                    {
                        still_exists === true &&
                        <>Si</>
                    }
                    {
                        still_exists === false &&
                        <>No</>
                    }
                </p>
                {
                    country_in !== null &&
                    <p><b>Localizado en: </b>{country_in}</p>
                }
                <p><b>Canciones y álbumes que hablan de este monumento:</b></p>
            </div>
        </div>
    );
}

export default Monument_Component;