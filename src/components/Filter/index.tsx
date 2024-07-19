import { Container, FilterStyleProps, Title } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

function Filter({ title, isActivite = false, ...rest }: Props) {
    return (
        <Container
            isActivite={isActivite}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default Filter;