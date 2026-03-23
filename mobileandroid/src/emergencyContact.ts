import AsyncStorage from "@react-native-async-storage/async-storage";
export async function saveEmergencyContact(phoneNumber: string){
    await AsyncStorage.setItem("emergency-contact",phoneNumber);
    console.log(`Saved number is ${phoneNumber}`)
}
export async function getEmergencyContact() : Promise<string>{
    const phoneNumber = await AsyncStorage.getItem("emergency-contact");
    console.log(`Getting emergency contact ${phoneNumber}`);
    return phoneNumber;
}