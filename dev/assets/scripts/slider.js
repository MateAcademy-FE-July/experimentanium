"use strict";
var newsIncrement = 0;
var newsStartIndex = 2;
var newsIndex = newsIncrement + newsStartIndex;
var news = document.getElementsByClassName('news__item');
var newsLength = news.length;

var prevNews = document.getElementById('arrow-left');
prevNews.addEventListener('click', function () {
    newsIncrement > 0 ? newsIncrement -= 2 : newsIncrement;
    newsIndex = newsIncrement + newsStartIndex;
    hideNews(newsIndex);
    showNews(newsIndex);
});

var nextNews = document.getElementById('arrow-right');
nextNews.addEventListener('click', function () {
    newsIncrement < newsLength-3 ? newsIncrement += 2 : newsIncrement;
    newsIndex < newsLength-1 ? newsIndex = newsIncrement + newsStartIndex : newsIndex;
    hideNews(newsIndex);
    showNews(newsIndex);
});

function hideNews(n) {
    var news = document.getElementsByClassName('news__item');
    var newsLength = news.length;
    for (let i = 0; i < newsLength; i++) {
        news[i].classList.add('news__hide');
    }
}

function showNews(n) {
    if (n < newsStartIndex) n = newsStartIndex;
    if (n >= newsLength) n = newsLength - 1;
    for (let j = n; j >= n - newsStartIndex && j <= n; j--) {
        news[j].classList.remove('news__hide');
    }
}

hideNews(newsIndex);
showNews(newsIndex);