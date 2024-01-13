import {ItemButton, ImageItem} from '../../styleComponent'

const GameItem = props => {
  const {eachItem, itemClickOnClick} = props
  const {imageUrl, id} = eachItem

  const itemClicked = () => {
    itemClickOnClick(id)
  }

  return (
    <ItemButton data-testid={`${id.toLowerCase()}Button`} onClick={itemClicked}>
      <ImageItem src={imageUrl} alt={id} />
    </ItemButton>
  )
}
export default GameItem
