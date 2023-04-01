import { Text } from 'react-native'

const ProfileScreen = ({ _navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>
}

export default ProfileScreen
