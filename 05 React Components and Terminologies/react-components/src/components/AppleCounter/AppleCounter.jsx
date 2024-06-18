import LeftArrow from "../../assets/images/left-arrow.png";
import RightArrow from "../../assets/images/right-arrow.png";
import AppleBasket from "../AppleBasket/AppleBasket";
import Button from "../Button/Button";
import "./AppleCounter.module.css";
import { useState } from "react";

function AppleCounter() {
  const [leftCount, setLeftCount] = useState(10);
  const [rightCount, setRightCount] = useState(0);

  const leftClickHandler = () => {
    if (rightCount > 0) {
      setLeftCount(leftCount + 1);
      setRightCount(rightCount - 1);
    }
  };

  const rightClickHandler = () => {
    if (leftCount > 0) {
      setRightCount(rightCount + 1);
      setLeftCount(leftCount - 1);
    }
  };

  return (
    <section>
      <AppleBasket count={leftCount} basketNum={1} />
      <Button
        event={leftClickHandler}
        imageURL={LeftArrow}
        title={"Left Arrow"}
      />
      <Button
        event={rightClickHandler}
        imageURL={RightArrow}
        title={"Right Arrow"}
      />
      <AppleBasket count={rightCount} basketNum={2} />
    </section>
  );
}

export default AppleCounter;

/*
const totalAppleCount = 10;

let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

function AppleCounter({ mainRoot }) {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
      console.log(leftAppleCount);
      console.log(rightAppleCount);
      mainRoot.render(<AppleCounter mainRoot={mainRoot} />);
    }
  };

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      rightAppleCount++;
      leftAppleCount--;
      console.log(leftAppleCount);
      console.log(rightAppleCount);
      mainRoot.render(<AppleCounter mainRoot={mainRoot} />);
    }
  };

  return (
    <section>
      <AppleBasket count={leftAppleCount} basket={1} />
      <Button
        event={leftClickHandler}
        imageURL={LeftArrow}
        title={"Left Arrow"}
      />
      <Button
        event={rightClickHandler}
        imageURL={RightArrow}
        title={"Right Arrow"}
      />
      <AppleBasket count={rightAppleCount} basket={2} />
    </section>
  );
}

export default AppleCounter;
*/
