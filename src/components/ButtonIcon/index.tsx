import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";


type Props = TouchableOpacityProps & {

}

function ButtonIcon({ }: Props) {
    return (
        <Container>
            <Icon name="home" type="PRIMARY"/>
        </Container>
    );
}

export default ButtonIcon;