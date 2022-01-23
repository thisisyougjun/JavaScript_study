const quotes = [
    {
        quote : '어제와 똑같이 살면서, 다른 미래를 기대하는것은 정신병 초기증세"'
    },
    {
        quote: '"인생은 자기싫은 밤과 더 자고싶은 아침의 연속이다"'
    },
    {
        quote: '"돈이 전부는 아니지만 그만한게 없다"'
    },
    {
        quote: '"인생은 실전이다"'
    },
    {
        quote: '"고민은 배송만 늦출뿐"'
    }
]

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;


