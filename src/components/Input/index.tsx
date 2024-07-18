import { TextInputProps } from "react-native";
import { Container } from "./style";
import theme from "@/src/theme/theme";

function Input({ ...rest }: TextInputProps) {

    return (
        <Container
            placeholderTextColor={theme.COLORS.GRAY_300}
            {...rest}
        />
    );
}

export default Input;