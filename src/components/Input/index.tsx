import { TextInput, TextInputProps } from "react-native";
import { Container } from "./style";
import theme from "@/src/theme/theme";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
}

function Input({ inputRef, ...rest }: Props) {

    return (
        <Container
            ref={inputRef}
            placeholderTextColor={theme.COLORS.GRAY_300}
            {...rest}
        />
    );
}

export default Input;