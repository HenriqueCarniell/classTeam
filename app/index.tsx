import Groups from "@/src/screens/Groups";
import { ThemeProvider } from 'styled-components'
import theme from "@/src/theme/theme";

export default function HomeScreen() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Groups />
      </ThemeProvider>
    </>
  );
}