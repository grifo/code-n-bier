/*
  2012-07-20 22:35 GMT
  _coffee/main.coffee > scripts/main.js
  
  created by Grifo
*/
(function(){var a,b;a=function(a){return[].slice.call(document.querySelectorAll(a))},b=function(a){return document.querySelector(a)},a("a[rel=external]").forEach(function(a){return a.addEventListener("click",function(a){return a.preventDefault(),window.open(a.target.href||a.target.parentNode.href)})})}).call(this);