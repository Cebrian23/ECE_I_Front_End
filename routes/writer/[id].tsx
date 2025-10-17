import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { WriterGQL } from "../../types/literature/Writer.ts";

type Data = {
    writer: WriterGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<WriterGQL>(`https://ece-i-back-end-ii.deno.dev/writer/id?id=${id}`);
        
        return ctx.render({writer: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const writer = props.data.writer;

    console.log(writer);

    return (
        <div>
            <h1>Página del escritor "{writer.name + " " + writer.surname}"</h1>
        </div>
    );
}

export default Page;