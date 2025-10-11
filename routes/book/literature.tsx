import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Literature from "../../islands/Literature.tsx";
import { BookDB } from "../../types/literature/Book.ts";

type Data = {
    literature?: BookDB[];
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const literature = props.data.literature;

    return(
        <div>
            {
                literature === undefined &&
                <Literature/>
            }
            {
                literature !== undefined &&
                literature.map((book) => {
                    <div>
                        <img src={book.cover}/>
                        <p>{book.title}</p>
                        <p><i>{book.year_of_publish}</i></p>
                    </div>
                })
            }
        </div>
    );
}

export default Page;