import ButtonIcon from "../ButtonIcon";
import { Container, Icon, Name } from "./style";

type Props = {
    name: string;
    onRemove: () => void;
}

function PlayerCard({ name, onRemove }: Props) {
    return (
        <Container>
            <Icon name="person" />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon="close"
                type="SECONDARY"
                onPress={ onRemove}
            />
        </Container>
    );
}

export default PlayerCard;