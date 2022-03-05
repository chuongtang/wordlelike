const c5: string[] = ["one", "two", "three", "four", "five", "six", "seven"]
const c6: string[] = ["1one", "2two", "3three", "4four", "5five", "6six", "7seven"]
const c7: string[] = ["1on1e", "2tw2o", "3thre3e", "4fou4r", "5fiv5e", "6si6x", "7seve7n"]

const words  = (char: number) => {

  if (char === 5) {
    return c5
  } else if (char == 6) {
    return c6
  } else {
    return c7
  }
}

export default words;