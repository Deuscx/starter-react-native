import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { isReadyRef, navigationRef } from 'react-navigation-helpers'
import { useEffect } from 'react'
import HomeScreen from '~/screens/home/HomeScreen'
import ProfileScreen from '~/screens/profile/ProfileScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  useEffect((): any => {
    return () => (isReadyRef.current = false)
  }, [])
  return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true
            }}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation
