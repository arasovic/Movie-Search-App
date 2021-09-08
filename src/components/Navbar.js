import React from 'react';
import {Button, Container, Icon, Input, Menu} from "semantic-ui-react";
import NextImg from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import _ from 'lodash'
import {onChangeSearch} from "../actions";


const Navbar = ({visibility}) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleChange = ({target}) => {
        const {value} = target
        if (value) {
            dispatch(onChangeSearch(value))
        }
    }

    return (
        <Menu fixed='top' inverted stackable>
            <Container>
                <Link href={'/'}><Menu.Item header>
                    <NextImg src='/IMDb-icon.png' width={35} height={35}/>
                    <span style={{marginLeft: '1.1em'}}> Movie Searcher </span>
                </Menu.Item></Link>
                <Menu.Item position='right'>
                    {visibility ?
                        <>
                            <Input icon='search'
                                   placeholder='Search'
                                   onChange={_.debounce(handleChange, 300)}
                            />
                        </>
                        :
                        <>
                            <Button onClick={() => router.push('/')}>
                                <Icon name='arrow alternate circle left outline'/>
                                Back
                            </Button>
                        </>
                    }
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Navbar;