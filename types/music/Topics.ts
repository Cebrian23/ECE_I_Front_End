
import { EventDB } from "../history/Event.ts";
import { HeraldryDB, Heraldry } from "../history/Heraldry.ts";
import { OrganizationDB, Organization } from "../history/Organization.ts";
import { PersonDB, Person } from "../history/Person.ts";
import { LegendDB, Legend } from "../legend/Legend.ts";
import { BookDB, Book } from "../literature/book.ts";

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