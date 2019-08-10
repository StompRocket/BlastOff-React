import "@stomprocket/blastoff"
import React, { useState } from "react"

export const Container = props => (
    <div className="container">
        {props.children}
    </div>
)

export const Row = ({ children, className }) => (
    <div className={"row " + className || ""}>
        {children}
    </div>
)

export const Column = ({children, className, width}) => (
    <div
        className={"column " + (className || "")}
        width={width && width * 100 + "%"}
    >
        {children}
    </div>
)

export const Footer = ({children}) => (
    <footer className="footer">
        {children}
    </footer>
)

export const Button = props => (
        <button
            className={"button" + (props.dark ? " dark" : props.primary ? " primary" : "")}
            onClick={props.onClick}
            style={{
                margin: `2px`
            }}
        >
            {props.children}
        </button>
)

export const Box = props => (
    <div className={"box " + (props.material ? "material " : "") + (props.container ? "container" : "")}>
        {props.children}
    </div>
)

export const Navbar = props => {
    const [open, setOpen] = useState(0)

    const toggleOpen = () =>
        setOpen(open ? false : true)

    return (
        <>
            <nav className="navbar material white">
                <Container>
                    <div className="nav-logo">
                        <a href={props.logoLink}>{props.logo}</a>
                    </div>
                    <a className="nav-burger" onClick={toggleOpen}>Borger</a>
                    <div className="nav-menu">
                        {props.children}
                    </div>
                </Container>
            </nav>
            <div className={"nav-mobile " + (open ? "open" : "")}>
                <div className="modal-background" onClick={toggleOpen}></div>
                <div className="nav-body">
                    <a className="nav-close" onClick={toggleOpen}>Borger</a>

                    {props.children}
                </div>
            </div>
            <br />
            <br />
        </>
    )
}
