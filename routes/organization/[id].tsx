import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { OrganizationDB } from "../../types/history/Organization.ts";

type Data = {
    organization?: OrganizationDB,
}

const handler: Handlers<Data> = {
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
                        <p>
                            <b>Fecha de nacimiento: </b>
                            {
                                organization.creation.month !== undefined && organization.creation.day !== undefined &&
                                <>{organization.creation.day + " de " + organization.creation.month + " de " + organization.creation.year}</>
                            }
                            {
                                (organization.creation.month !== undefined || organization.creation.day !== undefined) &&
                                <>{organization.creation.year}</>
                            }
                        </p>
                        {
                            organization.dissolution?.year !== undefined &&
                            <p>
                                <b>Fecha de fallecimiento: </b>
                                {
                                    organization.dissolution.month !== undefined && organization.dissolution.day !== undefined &&
                                    <>{organization.dissolution.day + " de " + organization.dissolution.month + " de " + organization.dissolution.year}</>
                                }
                                {
                                    (organization.dissolution.month !== undefined || organization.dissolution.day !== undefined) &&
                                    <>{organization.dissolution.year}</>
                                }
                            </p>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;