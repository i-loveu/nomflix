
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: rgba(20,20,20,.8);
    color: white;
    z-index: 10;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    border-bottom: 5px solid ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
`;


const Header = ({location: {pathname}}) => (
    <HeaderStyle>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </HeaderStyle>
);

export default withRouter(Header);
