import styled from "styled-components";
import Card from "../../atom/card/Card";
import { UserIconWithName } from "./user/UserIconWithName";

export const UserCard = (props)=>{
    const { user } = props;
   return(
    <Card>
        <UserIconWithName image={user.image} name={user.name} />
        <SDL>
            <dt>Email</dt>
            <dd>{user.mail}</dd>
            <dt>Phone</dt>
            <dd>{user.phone}</dd>
            <dt>Companey Info</dt>
            <dd>{user.company.name}</dd>
            <dt>Homepage</dt>
            <dd>{user.web}</dd>
        </SDL>
    </Card>
   ) 
};

const SDL = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float:left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`

export default UserCard;