import { createStaticNavigation } from '@react-navigation/native'
import { RootStack } from './stacks/RootStack'

const Navigation = createStaticNavigation(RootStack)

const App = () => {
	return <Navigation linking={{ prefixes: [window.location.origin] }} />
}

export default App
