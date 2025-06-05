import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import type { StaticParamList } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStack } from './MainStack'

export const RootStack = createNativeStackNavigator({
	screenOptions: {
		headerShown: false,
	},
	screens: {
		MainStack: {
			screen: MainStack,
			linking: {
				initialRouteName: MainStack.config.initialRouteName,
			},
		},
	},
})

export type RootStackParamList = StaticParamList<typeof RootStack>

export type RootStackNavigationProp = BottomTabNavigationProp<RootStackParamList>
