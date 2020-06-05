import React from 'react'
import { FlatList } from 'react-native'
import { Container, Item, ItemLabel } from './styled'
 
const List = ({ list, handleRemoveItem }) => {

  const renderList = ({ item }) => (
    <Item
      onPress={() => handleRemoveItem(item)}
    >
      <ItemLabel>
        {item.key}
      </ItemLabel>
    </Item>
  )

  return (
    <Container>
      <FlatList
        data={list}
        renderItem={renderList}
      />
    </Container>
  )
}

export default List