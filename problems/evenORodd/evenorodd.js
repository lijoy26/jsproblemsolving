function checknumber() {
    let evenorodd = ['Even', 'Odd'];
    let number = document.querySelector('#js-number-input').value;
    document.querySelector('#js-result').innerHTML = evenorodd[number % 2];
}