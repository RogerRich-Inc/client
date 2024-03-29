import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive"

import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const Container = styled.div`
 height: 60px;
 ${mobile({ height: "50px"})}
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 ${mobile({ padding: "10px 0px"})}
 `
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 `

const Language = styled.span`
 font-size: 14px;
 cursor:pointer;
 ${mobile({ display: "none"})}`

const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
 `
const Input = styled.input`
 border:none;
 text-align: center;
 ${mobile({ width: "50px"})}
`
const Center = styled.div`
 flex: 1;
 text-align: center;`
const Logo = styled.h1`
 font-weight: bold;
 ${mobile({ fontSize: "24px",flex:"1"})}`
const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 
 ${mobile({ flex:"1",justifyContent: "start"})}`

const MenuItem = styled.div`
 font-style: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft:"0px", paddingRight:"20px"})}`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        IO
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color= "primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
