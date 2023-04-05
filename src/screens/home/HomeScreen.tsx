import { SafeAreaView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import * as NavigationService from 'react-navigation-helpers'
import { useMainStore } from '~/store'

const HomeScreen = () => {
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
          NavigationService.navigate('Profile', { name: userData?.name })
        }
      >Go to  profile</Button>
    </SafeAreaView>

  )
}

export default HomeScreen
