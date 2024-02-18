import styled from "styled-components";
import HeaderOnly from "../templates/HeaderOnly";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organisms/user/UserCard";

const users =[...Array(10).keys()].map((val)=>{
    return{
        id: val,
        name: `Tomoko ${val}`,
        image : "https://source.unsplash.com/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4",
        mail: 'tomoko@mail.com',
        phone: '012-345-6789',
        company:{
            name: 'test companey'
        },
        web: 'www.google.com'
    }
})

    const user = {
    name: 'Tomoko',
    image : "https://source.unsplash.com/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4",
    mail: 'tomoko@mail.com',
    phone: '012-345-6789',
    company:{
      name: 'test companey'
    },
    web: 'www.google.com'
  };
  

export const Users =()=>{
    return(
        <SContainer>
        <SUserArea>
            <h2>Users</h2>
            <SearchInput />
            {users.map((user)=>(
                <UserCard key={user.id} user={user} />
            ))}
        </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: colmn;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top:40px;
    width: 100%;
    display: grid;
    grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`

export default Users;