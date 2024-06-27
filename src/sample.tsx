const generateRandomDOB = (): string => {
    const random = getRandomDate(new Date('2023-01-01T00:00:00Z'), new Date('2023-12-31T23:59:59Z'))
    const returnDate = random.toISOString();
    // const stringDate = returnDate.toString();
    // const trimmedDate = stringDate
    // return stringDate;
    return random.toISOString().split('.')[0]+"Z";
}

function getRandomDate(from: Date, to: Date) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

for(let i=0; i<100; i++){
const time = generateRandomDOB()
const timeString= '{ "timestamp" : "'
const middleString = '", "value": '
const value = Math.floor(Math.random() * 100);
const endingString = ' },'
const finalResult = timeString + time + middleString + value + endingString 
console.log(finalResult)
// console.log(typeof(finalResult))
}

export{}