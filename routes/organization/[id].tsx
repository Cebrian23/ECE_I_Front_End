import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { OrganizationDB } from "../../types/history/Organization.ts";

type Data = {
    organization?: OrganizationDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const organization = props.data.organization;

    return (
        <div>
            {
                organization !== undefined &&
                <div>
                    <div>
                        <h1>Página de {organization.name}</h1>
                        <img src={organization.logo}/>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{organization.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;