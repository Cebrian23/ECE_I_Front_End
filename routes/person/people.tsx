import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import People from "../../islands/People.tsx";
import { PersonDB } from "../../types/history/Person.ts";

type Data = {
    people?: PersonDB[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            const surname = url.searchParams.get("surname");
            if(surname){
                //
            }
            else{
                //
            }
        }
        else{
            const year_a = url.searchParams.get("year_a");
            const month_a = url.searchParams.get("month_a");
            const day_a = url.searchParams.get("day_a");

            const year_b = url.searchParams.get("year_b");
            if(year_b){
                //
            }
            else{
                //
            }
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const people = props.data.people;

    return(
        <div>
            {
                people === undefined &&
                <People/>
            }
            {
                people !== undefined &&
                people.map((person) => {
                    <div>
                        <img src={person.image}/>
                        {
                            person.nickname !== undefined &&
                            <p>{person.name + ` "${person.nickname[0]}" ` + person.surname}</p>
                        }
                        {
                            person.nickname === undefined &&
                            <p>{person.name + " " + person.surname}</p>
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Page;