// analytics.js

// Замініть YOUR_MEASUREMENT_ID на свій Google Analytics ID (наприклад, G-XXXXXXXXXX)
(function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments);
    },i[r].l=1*new Date();
    a=s.createElement(o), m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m);
})(window,document,'script','https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID','ga');

// Ініціалізація Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'YOUR_MEASUREMENT_ID');
