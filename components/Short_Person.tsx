import { Person_Short } from "../types/history/Person.ts";

type Data = {
    person: Person_Short,
}

const Short_Person = (prop: Data) => {
    const person = prop.person;

    return(
        <div class="card_block">
            <br/>
            <p>
                <a>
                {
                    person.country_from !== "China" &&
                    <>
                        {
                            person.surname !== null &&
                            <>{person.name + " " + person.surname}</>
                        }
                        {
                            person.surname === null &&
                            <>{person.name + " " + person.surname}</>
                        }
                    </>
                }
                {
                    person.country_from !== "China" &&
                    <>{person.surname + " " + person.name}</>
                }
                </a>
            </p>
        </div>
    );
}

export default Short_Person;