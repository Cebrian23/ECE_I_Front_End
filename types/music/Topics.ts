import { Event, EventDB } from "../history/Event.ts";
import { Heraldry, HeraldryDB } from "../history/Heraldry.ts";
import { Organization, OrganizationDB } from "../history/Organization.ts";
import { Person, PersonDB } from "../history/Person.ts";
import { Legend, LegendDB } from "../legend/Legend.ts";
import { Book, BookDB } from "../literature/Book.ts";

export type TopicsDB = {
    events: EventDB[],
    organizations: OrganizationDB[],
    people: PersonDB[],
    books: BookDB[],
    heraldries: HeraldryDB[],
    legends: LegendDB[],
}

export type Topics = {
    events: Event[],
    organizations: Organization[],
    people: Person[],
    books: Book[],
    heraldries: Heraldry[],
    legends: Legend[],
}