import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";

type Data = {
    organization: OrganizationGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<OrganizationGQL>(`https://ece-i-back-end-ii.deno.dev/organization/id?id=${id}`);
        
        return ctx.render({organization: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const organization = props.data.organization;

    console.log(organization);

    return (
        <div>
            <h1>Página de la organization "{organization.name}"</h1>
        </div>
    );
}

export default Page;