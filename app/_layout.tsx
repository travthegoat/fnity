import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack 
            screenOptions={{ headerShown: false }}
            initialRouteName="index"
        >
            
        </Stack>
    )
}

export default RootLayout;