const args = process.argv.slice(2);

const timer = (times) => {
  if (!times) {
    return;
  }
  for (const time of times) {
    // An input is a negative number
    // An input is not a number
    if (time < 0 || !Number(time)) {
      return;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
  }
};
timer(args);
