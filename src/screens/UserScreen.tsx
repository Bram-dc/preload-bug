import type { StaticScreenProps } from '@react-navigation/native'
import { Text } from 'react-native'
import Link from '../Link'

type UserScreenProps = StaticScreenProps<undefined>

const UserScreen = (_: UserScreenProps) => {
	return (
		<>
			<p>Hello from UserScreen</p>

			<Link href="/">
				<Text>Naar dashboard</Text>
			</Link>
		</>
	)
}

export default UserScreen
