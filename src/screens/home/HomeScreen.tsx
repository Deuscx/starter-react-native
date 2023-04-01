import { Button, SafeAreaView, TextInput } from 'react-native'
import { useMainStore } from '~/store'
const HomeScreen = ({ navigation }) => {
  const userData = useMainStore(state => state.userData)
  const setUserData = useMainStore(state => state.setUserData)

  function setUserName(name: string) {
    setUserData({ name, email: 'XXX' })
  }

  return (
    <SafeAreaView>
      <TextInput
        placeholder='please enter your username'
        onChangeText={setUserName}
        value={userData?.name}
      />
      <Button
        title="Go to  profile"
        onPress={() =>
          navigation.navigate('Profile', { name: userData?.name })
        }
      />
    </SafeAreaView>

  )
}

export default HomeScreen
