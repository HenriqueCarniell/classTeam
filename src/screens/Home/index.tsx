import Header from "@/src/components/header";
import { Container } from "./styles";
import React from "react";

function Home() {
    return (
        <Container>
            <Header showBackButton={true}/>
        </Container>
    );
}

export default Home;