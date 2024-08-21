import Select from "react-select";
import EmptyView from "./EmptyView"
import { useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default"
  }, 
  {
    label: "Sort by packed",
    value: "packed"
  },
  {
    label: "Sort by unpacked",
    value: "unpacked"
  }
];

export default function ItemList({items, handleDeleteItem,handleToggleItem}) {

  const [sortBy, setSortBy] = useState("default");


  //to avoid mutation because of the sort method we create a new array ...items
  const sortedItems = [...items].sort((a, b) => {
    if(sortBy === 'packed') {
      return b.packed - a.packed;
    }
    if(sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    //if we want the default behaviour we just return nothing
    return;
  });

  return (
    <ul className="">

      {items.length === 0 ? <EmptyView/> : null}

      {
        items.length > 1 ? <section className="sorting">
          <Select onChange={(option) => setSortBy(option.value)} defaultValue={sortingOptions[0]} options={sortingOptions} />
        </section> : null
      }

      {sortedItems.map((item) => {
          return (
            <Item 
            key={item.id} 
            item={item} 
            onDeleteItem={handleDeleteItem} 
            onToggleItem={handleToggleItem}
            />
          );
        })}
    </ul>
  )
}

function Item({item, onDeleteItem,onToggleItem}) {
  return (
    <li className="item">
      <label>
        <input onChange={() => onToggleItem(item.id)} checked={item.packed} type="checkbox" />{item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}