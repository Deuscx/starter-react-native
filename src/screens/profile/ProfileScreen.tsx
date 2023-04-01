import { Text } from 'react-native'

const ProfileScreen = ({ _navigation, route }) => {
  return <Text className='text-2xl text-black dark:text-white'>This is {route.params.name}'s profile</Text>
}

export default ProfileScreen
