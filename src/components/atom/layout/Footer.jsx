import styled from "styled-components"; 

export const Footer =()=>{
    return(
        <SFooter>
            &copy; 2024 Tomoko Inc.
        </SFooter>
    )
}

const SFooter = styled.footer`
    color: #fff;
    background-color: #11999e;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export default Footer;