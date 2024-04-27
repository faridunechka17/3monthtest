// 1

const numWords = "bcdcb36637hxj"

numWords.replace(/\D/g,'1274234657987')
console.log(numWords)


// 2

function fibonacciWithDelay(a, b, limit) {
    setTimeout(() => {
        console.log(a);
        const next = a + b;
        if (next <= limit) {
            fibonacciWithDelay(b, next, limit);
        }
    }, 1000);
}

fibonacciWithDelay(0, 1, 144);


// 3 num

const asyncData = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const responseData = await response.json()
        console.log(responseData)
    }catch (error){
        console.error('error')
    }
}
asyncData()



// 4 num

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            document.body.style.backgroundColor = event.target.className;
        }
    });
});


// 5 num

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const oneButton = document.getElementById('one_Button');

    oneButton.addEventListener('click', function() {
        if (button1.style.display === 'none') {
            button1.style.display = 'button1';
        } else {
            button1.style.display = 'none';
        }
    });
});


// 6 num

let count = 0;
const nums1 = document.getElementById('counter');

function updateCounter() {
    if (count <= 100) {
        nums1.textContent = count;
        count++;
        setTimeout(updateCounter, 1);
    }
}
updateCounter();



// 7 num

const buttonProject = document.getElementById('getDataButton');
async function fetchData(url) {
    const response = await fetch(url);
    const event = await response.json();
    return event;
}

async function handleButtonClick() {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const data1 = await fetchData(url);
        console.log('Полученные данные:', data1);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

buttonProject.addEventListener('click', handleButtonClick);














