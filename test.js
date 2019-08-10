import {
    Navbar,
    Container,
    Button,
    Box,
    Row,
    Column,
    Footer
} from "./index.js"
import React from "react"
import ReactDom from "react-dom"

const root = (
    <>
        <Navbar logo={<h3>Logo</h3>} logoLink="/">
            <a href="#!">About</a>
            &nbsp;
            &nbsp;
            <a href="#!">Help</a>
        </Navbar>
        <Container>
            <Row>
                <Column>
                    <h1>Left Column</h1>
                    <p>
                        These columns are layed out in a Row tag and will collapse
                        on mobile devices automatically.
                    </p>
                </Column>
                <Column width={2/3}>
                    <Box container>
                        This is a Box
                        <br />
                        <Button primary>
                            This is a primary button
                        </Button>
                        <Button dark>
                            And a dark button
                        </Button>
                        <Button>
                            And a default button
                        </Button>
                    </Box>
                </Column>
            </Row>
        </Container>

        <Footer>
            <Container>
                <h3>This is the footer</h3>
            </Container>
        </Footer>
    </>
)

ReactDom.render(root, document.querySelector("#app"))
