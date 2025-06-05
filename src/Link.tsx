import { CommonActions, useLinkBuilder, useLinkProps } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { Pressable } from 'react-native'

type LinkProps = {
	href: string
	children?: React.ReactNode
}

const Link = ({ href, children }: LinkProps) => {
	const navigation = useNavigation()
	const { buildAction } = useLinkBuilder()

	const action = buildAction(href)

	const linkProps = useLinkProps({ href, action })

	const prefetchRoute = useCallback(() => {
		if (action.type !== 'NAVIGATE') {
			return
		}

		const preloadAction = CommonActions.preload(action.payload.name, action.payload.params)

		navigation.dispatch(preloadAction)
	}, [navigation, action])

	return (
		<Pressable {...linkProps} onHoverIn={prefetchRoute}>
			{children}
		</Pressable>
	)
}

export default Link
