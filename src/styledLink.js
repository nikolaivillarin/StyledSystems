import styled from 'styled-components'
import { system } from 'styled-system'

const textDecoration = system({
    prop: 'textDecoration',
    cssProperty: 'textDecoration'
})

const Link = styled.a`
    ${system({
        textDecoration: true,
        fontWeight: {
            property: 'fontWeight',
            scale: 'fontWeights'
        }
    })}
`

export default Link