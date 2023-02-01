const rentierAmountCalculation = () => { 
    const baseAmount = 10000;
    const inflationMultiplier = 1.05;
    const amountList = [Math.floor(baseAmount*12)]; // initial array value

    const showFormatedNumber = (number) => {
        const reverseNumber = number.toString().split('').reverse();
        const result = [];
        let count = 1;
  
        reverseNumber.forEach((item, index) => {
            result.push(item);
            if (count === 3 && index !== reverseNumber.length - 1) result.push(' ');
            count === 3 ? (count = 1) : count++;
            
        });
  
        return result.reverse().join('');
    };

    const showResult = () => {
        const amountSum = amountList.reduce((total, value) => {
            return total += value;
        }, 0);

        amountList.forEach((value, index) => {
            console.log(`${new Date().getFullYear() + index}r. : ${showFormatedNumber(value)}zł rocznie, ${showFormatedNumber(Math.floor(value/12))}zł miesięczie`);
        })
        console.log(`Łączna kwota: ${showFormatedNumber(amountSum)}zł`);
    };

    while (amountList.length < 60) {
        amountList.push(Math.floor((amountList[(amountList.length - 1)] * inflationMultiplier)));
    };

    showResult();
};

rentierAmountCalculation();

