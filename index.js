import{a as d}from"./assets/vendor-CNNbG8jS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.getElementById("quote"),u=document.getElementById("author"),l=document.querySelector(".new-quote-btn"),f=document.querySelector(".post-btn"),p="adtI3iEzrICUmeauFlmvag==C0c4O4zjLM82nYsK",m=d.create({baseURL:"https://api.api-ninjas.com/v1/quotes/"});async function a(){const s={headers:{"X-Api-Key":p}},n=await(await m.get("",s)).data;c.innerHTML=n[0].quote,u.innerHTML=n[0].author}a();function y(){a()}function h(){window.open("https://twitter.com/intent/tweet?text="+c.innerHTML+" by "+u.innerHTML,"X Window","width=600, height=300")}l.addEventListener("click",y);f.addEventListener("click",h);
//# sourceMappingURL=index.js.map