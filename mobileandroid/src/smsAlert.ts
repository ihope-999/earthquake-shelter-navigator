import * as SMS from "expo-sms";

export async function sendEarthquakeAlertAsync(phoneNumber: string,
                                          magnitude:number,
                                          location:string
){
    const isAvailable = await SMS.isAvailableAsync();
    if(!isAvailable) {
        console.log("Device cannot send SMS");
        return;
    }
    await SMS.sendSMSAsync([phoneNumber],'Earthquake Alert');
}