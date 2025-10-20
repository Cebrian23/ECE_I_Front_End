import { Organization_Short } from "../types/history/Organization.ts";

type Data = {
    organization: Organization_Short,
}

const Short_Organization = (prop: Data) => {
    const organization = prop.organization;

    return(
        <div class="card_block">
            <br/>
            <p><a href={organization.id}>{organization.name}</a></p>
        </div>
    );
}

export default Short_Organization;