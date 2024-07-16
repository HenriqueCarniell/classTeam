import { Container } from "./styles";
import { ActivityIndicator } from "react-native";

function Loading() {
    return ( 
        <Container>
            <ActivityIndicator color="white"/>
        </Container>
     );
}

export default Loading;