import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    organizations: OrganizationGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<OrganizationGQL[]>("https://ece-i-back-end-ii.deno.dev/organizations");
        
        return ctx.render({organizations: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const organizations = props.data.organizations;

    console.log(organizations);

    return(
        <div>
            {
                organizations.map((organization) => {
                    return(
                        <div class="block">
                            <h1><a href={`/organization/id/${organization.id}`} class="a1">{organization.name}</a></h1>
                            {
                                organization.talked_about_in_song !== undefined && organization.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta organización</h3>
                                    <div>
                                        {
                                            organization.talked_about_in_song.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                organization.talked_about_in_album !== undefined && organization.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta leyenda</h3>
                                    <div>
                                        {
                                            organization.talked_about_in_album.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            <hr width={500}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;