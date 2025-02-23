//@ts-nocheck
export function setupCounter(button: HTMLButtonElement) {
  const counter = {
    count: 0,
    add() {
      this.count++;
    },
  };

  const clickHandler = {
    __proto__: counter,
    click() {
      console.log("click", this, "<--", counter);

      this.add();
      button.innerHTML = `count is ${this.count}`;
    },
  };

  button.addEventListener("click", clickHandler.click.bind(clickHandler));
  button.innerHTML = `count is 0`;
}
