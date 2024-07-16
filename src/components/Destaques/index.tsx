import { Container, Title, SubTitle } from "./style";

type Props = {
    title: string;
    subtitle: string
}

function Destaques({ title, subtitle }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    );
}

export default Destaques;