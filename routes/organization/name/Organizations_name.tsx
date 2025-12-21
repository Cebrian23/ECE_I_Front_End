import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    name: string,
    organizations: OrganizationGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const name = url.searchParams.get("name")?.replace("%20", " ")?.replace("%20", " ");

        if(!name){
            return ctx.render();
        }

        const data = await Axios.get<OrganizationGQL[]>(`https://ece-i-back-end-ii.deno.dev/organizations/name?name=${name}`);
        
        return ctx.render({organizations: data.data, name: name});
    }
}

const Page = (props: PageProps<Data>) => {
    const name = props.data.name;
    const organizations = props.data.organizations;

    console.log(organizations);

    return(
        <div>
            {
                organizations.length === 0 &&
                <h1>No se ha encontrado ninguna organización cuyo nombre sea "{name}"</h1>
            }
            {
                organizations.map((organization) => {
                    const songs = organization.talked_about_in_song;
                    const albums = organization.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/organization/id/${organization.id}`} class="a1">{organization.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta organización</h3>
                                    <div class={Class_Selector(songs)}>
                                        {
                                            songs.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta organización</h3>
                                    <div class={Class_Selector(albums)}>
                                        {
                                            albums.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                organizations.length > 1 &&
                                <hr width={500}/>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;