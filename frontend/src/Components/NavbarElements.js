import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 70px;
top:0;
position:sticky;
z-index:99;
background-color:#49426c;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconoEmpresa = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-itms: center;
font-family: "Oswald";
font-size: 1.6rem;
color:#fff;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MenuItem = styled.div`
    height: 0%;
    padding:0.5rem 1.5rem;
    diplay:flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    font-family:"Oswald";
    font-weight: 400;

`;

export const MenuLink=styled.a`
    text-decoration:none;
    color:#FFF;
    margin:10px;
    cursor:pointer;
    &:hover{
        height:0%;
        background-color:#343257;
        border-bottom: 0.3rem solid #fff;
    }
`;
