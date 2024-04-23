import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleAddItem, handleRemoveAllItems,handleResetToInitial,handleAllAsComplete,handleAllAsIncomplete}) {
  return (
    <div className="sidebar">
        <AddItemForm onAddItem={handleAddItem}/>
        <ButtonGroup 
          handleRemoveAllItems={handleRemoveAllItems} 
          handleAllAsIncomplete={handleAllAsIncomplete} 
          handleAllAsComplete={handleAllAsComplete} 
          handleResetToInitial={handleResetToInitial}/>
    </div>
  )
}
