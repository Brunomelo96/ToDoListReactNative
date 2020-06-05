import styled from 'styled-components'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
`

export const Item = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2c3e50;
  padding: 16px;
`

export const ItemLabel = styled(Text)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
