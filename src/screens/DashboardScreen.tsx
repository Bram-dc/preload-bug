import type { StaticScreenProps } from '@react-navigation/native'
import { Text } from 'react-native'
import Link from '../Link'

export type DashboardScreenProps = StaticScreenProps<undefined>

const DashboardScreen = (_: DashboardScreenProps) => {
	return (
		<>
			<p>Hello from DashboardScreen</p>

			<Link href="/users">
				<Text>To users</Text>
			</Link>
		</>
	)
}

export default DashboardScreen
