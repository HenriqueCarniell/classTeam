import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonTypeStyleProps } from "./style";

type props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

function Button({ title, type = 'PRIMARY', ...rest }: props) {
    return (
        <Container type={type} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default Button;