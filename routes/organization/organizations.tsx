import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Organizations from "../../islands/Organizations.tsx";
import { organization } from "../../types/history/organization.ts";

type Data = {
    organizations?: organization[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }
        else{
            const year_a = url.searchParams.get("year_a");
            const month_a = url.searchParams.get("month_a");
            const day_a = url.searchParams.get("day_a");

            const year_b = url.searchParams.get("year_b");
            if(year_b){}
            else{}
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const organizations = props.data.organizations;

    return(
        <div>
            {
                organizations === undefined &&
                <Organizations/>
            }
            {
                organizations !== undefined &&
                organizations.map((organization) => {
                    <div>
                    </div>
                })
            }
        </div>
    );
}

export default Page;