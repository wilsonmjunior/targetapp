import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TesteScreen() {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => router.back()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <Text>Teste Screen</Text>
        </SafeAreaView>
    )
}