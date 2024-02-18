import styled from "styled-components";

import PrimaryButton from "../atom/button/PrimaryButton";
import Input from "../atom/input/Input";
import BaseButton from "../atom/button/BaseButton";

export const SearchInput = ()=>{
    return(
        <SContainer>
            <Input placeholder="Search" />
            <SButtonWrapper>
                <PrimaryButton>Search</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
};

const SContainer = styled.div`
    display: flex;
    align-items: center;
`
const SButtonWrapper = styled.div`
    padding-left: 8px;
`

export default SearchInput;