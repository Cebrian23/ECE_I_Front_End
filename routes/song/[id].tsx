import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { SongDB } from "../../types/music/Song.ts";

type Data = {
    song?: SongDB,
}

const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    return (
        <div>
        </div>
    );
}

export default Page;