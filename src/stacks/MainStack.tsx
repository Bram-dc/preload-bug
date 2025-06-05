import type { StaticParamList } from '@react-navigation/native'
import { type NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../screens/DashboardScreen'
import UserScreen from '../screens/UserScreen'

export const MainStack = createNativeStackNavigator({
	initialRouteName: 'Dashboard',
	screens: {
		Dashboard: {
			screen: DashboardScreen,
			options: {
				title: 'Dashboard',
			},
			linking: {
				path: '/',
			},
		},
		User: {
			screen: UserScreen,
			options: {
				title: 'User',
			},
			linking: {
				path: '/users',
			},
		},
	},
})

export type MainStackParamList = StaticParamList<typeof MainStack>

export type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>
