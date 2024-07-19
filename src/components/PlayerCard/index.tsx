import { Container, Icon, Name } from "./style";

type Props = {
    name: string;
}

function PlayerCard({name}: Props) {
    return ( 
        <Container>
            <Icon name="person" />

            <Name>
                {name}
            </Name>
        </Container>
     );
}

export default PlayerCard;