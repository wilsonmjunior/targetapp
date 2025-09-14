import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}> 
            <View 
                style={{ 
                    marginHorizontal: 24,
                    backgroundColor: "green",
                    height: 100
                }}
            >
                <TouchableOpacity onPress={() => router.push("./teste")} style={{ backgroundColor: "yellow" }}>
                    <Text>Teste</Text>
                </TouchableOpacity>
            </View>
       </SafeAreaView>
    );
}
