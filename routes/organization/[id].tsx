import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { OrganizationDB } from "../../types/history/Organization.ts";

type Data = {
    organization?: OrganizationDB,
}

const Organization_id = `#graphql
    query Query ($id: String!) {
        getOrganization_id (id: $id) {
            id
            name
            logo
            creation {}
            dissolution {}
            distinguished_members {
                id
                name
                surname
            }
            involved_in {
                id
                name
            }
            talk_about_in_song {
                id
                name
                cover
                year_of_publish
                album_in {
                    id
                    name
                    creator {
                        id
                        name
                    }
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
                creator {
                    id
                    name
                }
            }
        }
    }
`

const Organization_name = `#graphql
    query Query ($name: String!) {
        getOrganization_id (name: $name) {
            id
            name
            logo
            creation {}
            dissolution {}
            distinguished_members {
                id
                name
                surname
            }
            involved_in {
                id
                name
            }
            talk_about_in_song {
                id
                name
                cover
                year_of_publish
                album_in {
                    id
                    name
                    creator {
                        id
                        name
                    }
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
                creator {
                    id
                    name
                }
            }
        }
    }
`

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