import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";

type Data = {
    organizations: OrganizationGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("+", " ");
        const ac_dc = url.searchParams.get("ac_dc")?.replace("+", " ");
        const type = url.searchParams.get("type")?.replace("+", " ");
        const year_a = url.searchParams.get("year_a")?.replace("+", " ");
        const ac_dc_1 = url.searchParams.get("ac_dc_1")?.replace("+", " ");
        const year_b = url.searchParams.get("year_b")?.replace("+", " ");
        const ac_dc_2 = url.searchParams.get("ac_dc_2")?.replace("+", " ");
    
        if((!year && !ac_dc && !type) || (!year_a && !ac_dc_1 && !year_b && !ac_dc_2)){
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
                    return(
                        <div>
                            <div>
                                <h1>{organization.name}</h1>
                            </div>
                            <div>
                                {
                                    organization.talked_about_in_song !== undefined &&organization.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Canciones que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                organization.talked_about_in_song.map((song) => {
                                                    return(
                                                        <div>
                                                            <image src={song.cover}/>
                                                            <p><a href={song.id}>{song.name}</a></p>
                                                            <i><a href={song.album_in.id}>{song.album_in.name + " (" + song.album_in.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    organization.talked_about_in_album !== undefined && organization.talked_about_in_album.length !== 0 &&
                                    <>
                                        <h3>Albumes que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                organization.talked_about_in_album.map((album) => {
                                                    return(
                                                        <div>
                                                            <image src={album.cover}/>
                                                            <i><a href={album.id}>{album.name + " (" + album.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;