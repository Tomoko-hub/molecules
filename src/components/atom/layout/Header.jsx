import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header =()=>{
    return(
        <SHeader>
            <SLink to="/">Home</SLink>
            <SLink to="/users">Users</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
    color: #fff;
    background-color: #11999e;
    text-align: center;
    padding: 8px 0;
`
const SLink = styled(Link)`
    margin: 0 8px;
` 

export default Header;