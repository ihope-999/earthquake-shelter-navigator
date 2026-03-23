import { getEmergencyContact, saveEmergencyContact } from "@/src/emergencyContact";
import React, { useEffect, useState } from "react";
import { TextInput , StyleSheet, TouchableOpacity} from "react-native";
import { View,Text } from "react-native"
export default function Settings(){

    const [emergencyContact, setEmergencyContact] = useState("");
    useEffect(()=>{
        async function getContact() {
            const phoneNumber = await getEmergencyContact();
            setEmergencyContact(phoneNumber);
        }
        getContact();
     
    },[])

return (
    <View style={styles.container}>
      <Text style={styles.label}>Emergency Contact Number</Text>
      <TextInput
        style={styles.input}
        value={emergencyContact}
        onChangeText={(emergencyContact) =>{setEmergencyContact(emergencyContact)}}
        placeholder='**XXXXXXXXXX'
        placeholderTextColor='#2a3a60'
        keyboardType='phone-pad'
      />
       <TouchableOpacity style={styles.button} onPress={async ()=>{await saveEmergencyContact(`+${emergencyContact}`)}}>
        <Text style={styles.buttonText}>Change emergency number
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1120',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#141d30',
  },
  label: {
    color: '#4f8ef7',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginBottom: 14,
  },
  input: {
    backgroundColor: '#080b12',
    borderWidth: 1,
    borderColor: '#162040',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: '#eef0f8',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.5,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#4f8ef7',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#080b12',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 2,
  },
});