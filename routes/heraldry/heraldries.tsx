import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Heraldries from "../../islands/Heraldries.tsx";
import { HeraldryDB } from "../../types/history/Heraldry.ts";

type Data = {
    heraldries?: HeraldryDB[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }
        else{
            return ctx.render({});
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const heraldries = props.data.heraldries;

    return(
        <div>
            {
                heraldries === undefined &&
                <Heraldries/>
            }
            {
                heraldries !== undefined &&
                heraldries.map((heraldry) => {
                    <div>
                        <img src={heraldry.image}/>
                        <p>{heraldry.name}</p>
                    </div>
                })
            }
        </div>
        
    );
}

export default Page;