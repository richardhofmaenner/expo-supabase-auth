import { useState } from "react"
import { View } from "react-native"
import { Text, TextInput } from "react-native-rapi-ui"
import PasswordInput from "@/components/inputs/PasswordInput"

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")

  return (
    <View>
      <View style={{
        marginBottom: 20
      }}>
        <Text>Change your password:</Text>
      </View>
      <View>
        <PasswordInput 
          value={currentPassword}
          onChange={(text) => setCurrentPassword(text)}
          placeholder="Current password"
        />
      </View>
      <View>
        <PasswordInput 
          value={newPassword}
          onChange={(text) => setNewPassword(text)}
          placeholder="New password"
        />
      </View>
    </View>
  )
}

export default ChangePassword