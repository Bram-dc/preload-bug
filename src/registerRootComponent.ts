import { AppRegistry } from 'react-native'

export const registerRootComponent = (component: React.ComponentType) => {
	AppRegistry.registerComponent('main', () => component)

	const rootTag = document.getElementById('root')
	if (process.env.NODE_ENV !== 'production') {
		if (!rootTag) {
			throw new Error('Required HTML element with id "root" was not found in the document HTML.')
		}
	}

	AppRegistry.runApplication('main', { rootTag })
}
