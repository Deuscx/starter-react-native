import { SafeAreaView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
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
        className='mb-2'
        placeholder='please enter your username'
        onChangeText={setUserName}
        value={userData?.name}
      />
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('Profile', { name: userData?.name })
        }
      >Go to  profile</Button>
    </SafeAreaView>

  )
}

export default HomeScreen
