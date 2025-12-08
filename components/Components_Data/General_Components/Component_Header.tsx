type Data = {
    name: string,
    surname?: string,
    nation_people?: string,
    type: string,
    image?: string,
}

const Component_Header = (props: Data) => {
    const name = props.name;
    const surname = props.surname;
    const nation_people = props.nation_people;
    const type = props.type;
    const image = props.image;

    return(
        <div class="card_head">
            {
                type === "album" &&
                <h1>Página del album "{name}"</h1>
            }
            {
                type === "band" &&
                <h1>Página de la banda "{name}"</h1>
            }
            {
                type === "book" &&
                <h1>Página del libro "{name}"</h1>
            }
            {
                type === "event" &&
                <h1>Página del evento "{name}"</h1>
            }
            {
                type === "festivity" &&
                <h1>Página de la festividad "{name}"</h1>
            }
            {
                type === "heraldry" &&
                <h1>Página de la heráldica "{name}"</h1>
            }
            {
                type === "legend" &&
                <h1>Página de la leyenda "{name}"</h1>
            }
            {
                type === "mith" &&
                <h1>Página del mito "{name}"</h1>
            }
            {
                type === "monument" &&
                <h1>Página del monumento "{name}"</h1>
            }
            {
                type === "organization" &&
                <h1>Página de la organización "{name}"</h1>
            }
            {
                type === "person" &&
                <h1>Página de la persona "
                {
                    (nation_people !== "China" && nation_people !== "Imperio chino") &&
                    <>
                        {
                            surname !== null &&
                            <>{name + " " + surname}</>
                        }
                        {
                            surname === null &&
                            <>{name}</>
                        }
                    </>
                }
                {
                    (nation_people === "China" || nation_people === "Imperio chino") &&
                    <>{surname + " " + name}</>
                }
                "</h1>
            }
            {
                type === "song" &&
                <h1>Página de la canción "{name}"</h1>
            }
            {
                type === "writer" &&
                <h1>Página del escritor "
                    {
                        surname !== null &&
                        <>{name + " " + surname}</>
                    }
                    {
                        surname === null &&
                        <>{name}</>
                    }
                "</h1>
            }
            {
                image !== null && image !== undefined && image !== "" &&
                <img src={image} width={300} height={350}/>
            }
        </div>
    );
}

export default Component_Header;