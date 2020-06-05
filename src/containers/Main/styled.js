import styled from 'styled-components'
import { View, TextInput, Button } from 'react-native'

export const Container = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  color: white;
  background: #16a085;
  padding: 0px 16px;
`

export const SearchInput = styled(TextInput)`
  color: white;
  text-decoration: underline;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddButton = styled.div`
  width: 70px;
  border-radius: 50%;
`
