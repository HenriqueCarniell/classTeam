import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}

function GroupsCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon name="user-group"/>
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export default GroupsCard;