import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    organizations: OrganizationGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("%20", " ");
        const ac_dc = url.searchParams.get("ac_dc")?.replace("%20", " ");
        const type = url.searchParams.get("type")?.replace("%20", " ");
        const year_a = url.searchParams.get("year_a")?.replace("%20", " ");
        const ac_dc_1 = url.searchParams.get("ac_dc_1")?.replace("%20", " ");
        const year_b = url.searchParams.get("year_b")?.replace("%20", " ");
        const ac_dc_2 = url.searchParams.get("ac_dc_2")?.replace("%20", " ");
    
        if((!year && !ac_dc && !type) && (!year_a && !ac_dc_1 && !year_b && !ac_dc_2)){
            return ctx.render();
        }

        if(year){
            if(type!.valueOf() === "Inicio"){
                const data = await Axios.get<OrganizationGQL[]>(`https://ece-i-back-end-ii.deno.dev/organizations/creation_date?year=${year}&ac_dc=${ac_dc}`);
        
                return ctx.render({organizations: data.data});
            }
            else if(type!.valueOf() === "Fin"){
                const data = await Axios.get<OrganizationGQL[]>(`https://ece-i-back-end-ii.deno.dev/organizations/dissolution_date?year=${year}&ac_dc=${ac_dc}`);
        
                return ctx.render({organizations: data.data});
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<OrganizationGQL[]>(`https://ece-i-back-end-ii.deno.dev/organizations/double_date?year_a=${year_a}&ac_dc_1=${ac_dc_1}&year_b=${year_b}&ac_dc_2=${ac_dc_2}`);
        
            return ctx.render({organizations: data.data});
        }

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
                            <hr width={500}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;