import styled from "styled-components";
import DefaultLayout from "../templates/DefaultLayout";

export const Top =()=>{
    return(
        <DefaultLayout>
        <Scontainer>
            <h2>Top page</h2>
        </Scontainer>
        </DefaultLayout>
    )
}

const Scontainer = styled.div`
    text-align: center;
`

export default Top;