import React, { useState } from 'react'
import { Button } from 'react-native'
import List from './List'
import { 
  Container,
  Header,
  Content,
  SearchInput,
  AddButton
} from './styled'

const Main = () => {
  const [searchValue, setSearchValue] = useState('')
  const [toDoList, setToDoList] = useState([{ key: 'A' }, { key: 'B' }])
  
  const handleAddItem = () => {
    if (searchValue) {
      const item = { key: searchValue }
      setToDoList((previousState) => ([...previousState, item]))
      setSearchValue('')
    }
  }
  
  const handleRemoveItem = (item) => {
    const newArray = [...toDoList]
    const index = newArray.indexOf(item)
    newArray.splice(index, 1)
    setToDoList(newArray)
  }

  return (
    <Container>
      <Header>
        <SearchInput
          placeholder="Insira uma nova tarefa"
          placeholderTextColor="white"
          onChangeText={text => setSearchValue(text)}
          underlineColorAndroid='white'
          clearTextOnFocus
        />
        <AddButton>
          <Button
            title='+'
            onPress={() => handleAddItem()}
            color='#1abc9c'
            disabled={!searchValue}
        />
        </AddButton>
      </Header>
      <Content>
        <List
          list={toDoList}
          handleRemoveItem={handleRemoveItem}
        />
      </Content>
    </Container>
  )
}
export default Main
