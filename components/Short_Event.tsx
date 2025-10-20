import { Event_Short } from "../types/history/Event.ts";

type Data = {
    event: Event_Short
}

const Short_Event = (prop: Data) => {
    const event = prop.event;

    return(
        <div class="card_block">
            <br/>
            <p><a href={`/event/id/${event.id}`}>{event.name}</a></p>
        </div>
    );
}

export default Short_Event;