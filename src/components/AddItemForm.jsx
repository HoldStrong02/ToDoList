import Button from "./Button";

export default function AddItemForm() {
  return (
    <form>
        <h2>Add an item</h2>
        <input type="text" placeholder="toothbrush..." />
        <Button>Add to list</Button>
    </form>
  )
}
