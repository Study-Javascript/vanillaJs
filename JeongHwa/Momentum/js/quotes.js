const quotes = [
    {
        quote:"내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
        author:"박명수",
    },
    {
        quote:"어려운 길은 길이 아니다",
        author:"박명수",
    },
    {
        quote:"즐길 수 없으면 피하라",
        author:"박명수",
    },
    {
        quote:"성공은 1% 재능과 99%의 빽",
        author:"박명수",
    },
    {
        quote:"고생 끝에 골병 난다",
        author:"박명수",
    },
    {
        quote:"참을 인 세 번이면 호구 ",
        author:"박명수",
    },
    {
        quote:"티끌 모아 티끌",
        author:"박명수",
    },
    {
        quote:"헌신하면 헌신 짝 된다",
        author:"박명수",
    },
    {
        quote:"대문으로 가난이 찾아오면 사랑은 창문으로 도망간다",
        author:"박명수",
    },
    {
        quote:"늦었다고 생각할 때가 늦었다",
        author:"박명수",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math module :수학적 함수
//math.random : 임의의 변수 / float형 / 0.xx - 9.xx 
//math.round : 반올림 / math.ceil : 올림 / floor : 버림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;