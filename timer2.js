const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const timer = () => {
  stdin.on("data", (key) => {
    if (key === "b") {
      process.stdout.write("\x07");
    }
    for (const num of numberArray) {
      if (num == key) {
        console.log(`setting timer for ${key} second...`);
        setTimeout(() => {
          process.stdout.write("\x07");
        }, key * 1000);
      }
    }
    if (key === "\u0003") {
      console.log(`Thanks for using me, ciao!`);
      process.exit();
    }
  });
};
timer();
