import { Outlet, Link, useLocation } from "react-router-dom";
import {
    Container,
    Center
} from './assets/styles/styled'
import { useTheme } from '@mui/styles';
import { Theme, createTheme } from "@mui/material";
import { PropsWithChildren } from "react";
const MenuItem = ({ children, path }: PropsWithChildren<{ path: string }>) => {
    const theme = useTheme();
    const location = useLocation()
    const active = location.pathname.indexOf(path) > -1
    return <Link to={path} style={{
        margin: '1em 3.5em',
        background: active ? "#185963" : '',
        border: !active ? '1px solid #EF906E' : '',
        color: 'white',
        padding: '0 0.5em', cursor: 'pointer', borderRadius: 3
    }}>
        {children}
    </Link>
}
const menu = [
    {
        path: '/landing',
        name: 'Landing Page'
    },
    {
        path: '/form',
        name: 'Form'
    },
    {
        path: '/list',
        name: 'GET server-data '
    },
    {
        path: '/chart',
        name: 'Chart'
    },
    {
        path: '/Map',
        name: 'Global-Map'
    },
]
export default function Layout() {
    return <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', height: '100%' }}>
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em',
            background: "#258998",color: 'white'
        }}>
            {menu.map((item, index) => {
                return <MenuItem key={index} path={item.path}>{item.name}</MenuItem>
            })}
        </div>
        <Center style={{ height: '100%' }}>
            <Container style={{ height: '100%', padding: '0 2em' }}>
                <Outlet />
            </Container>
        </Center>
    </div >
}