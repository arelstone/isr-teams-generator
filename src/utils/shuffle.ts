
export const  shuffle = (array: Array<any>, num = 0): any => {
    const max = 5
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  console.log(num);
  
    return num === max
      ? array
      : shuffle(array, ++num)
  }