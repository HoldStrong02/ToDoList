import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

export default function ButtonGroup() {

  return (
    <section className="button-group">
      {
        secondaryButtons.map(secondaryBtnText => {
          return <Button key={secondaryBtnText} type="secondary">{secondaryBtnText}</Button>;
        })
      }
    </section>
  )
}
