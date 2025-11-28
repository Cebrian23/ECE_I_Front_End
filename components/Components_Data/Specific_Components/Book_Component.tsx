import { Writer_Short } from "../../../types/literature/Writer.ts";

type Data = {
    title: string,
    author: Writer_Short,
    year_of_publish?: number,
}

const Book_Component = (props: Data) => {
    const title = props.title;
    const author = props.author;
    const year_of_publish = props.year_of_publish;

    return(
        <div class="card_head">
            <div>
                <p><b>Título del libro: </b>{title}</p>
                <p><b>Autor: </b>
                    {
                        author.surname === null &&
                        <a href={`/writer/${author.id}`} class="a1">{author.name}</a>
                    }
                    {
                        author.surname !== null &&
                        <a href={`/writer/${author.id}`} class="a1">{author.name + " " + author.surname}</a>
                    }
                </p>
                {
                    year_of_publish !== null &&
                    <p><b>Fecha de publicación: </b>{year_of_publish}</p>
                }
            </div>
        </div>
    );
}

export default Book_Component;