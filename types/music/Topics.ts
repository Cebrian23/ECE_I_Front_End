import { Event } from "../history/Event.ts";
import { Heraldry } from "../history/Heraldry.ts";
import { Organization } from "../history/Organization.ts";
import { Person } from "../history/Person.ts";
import { Legend } from "../legend/Legend.ts";
import { Book } from "../literature/Book.ts";
import { Festivity } from "../festivity/Festivity.ts";
import { Mith } from "../legend/Mith.ts";
import { Monument } from "../history/Monument.ts";

export type Topics = {
    events?: Event[],
    organizations?: Organization[],
    people?: Person[],
    books?: Book[],
    heraldries?: Heraldry[],
    legends?: Legend[],
    miths?: Mith[],
    festivities?: Festivity[],
    monuments?: Monument[],
}