(()=>{let t=[];class e{constructor(t,e,n){this.title=t,this.description=e,this.dueDate=n}}!function(){const n=new e("titre","descriptif","19.09.22");t.push(n),function(){const e=document.querySelector(".container");t.forEach((n=>{const c=document.createElement("div");c.classList.add("card"),e.appendChild(c);const i=document.createElement("input");i.setAttribute("type","checkbox"),c.appendChild(i),i.addEventListener("change",(function(){this.checked&&(t.splice(this.parentElement.getAttribute("data-index"),1),this.parentElement.remove())}));for(let t in n){const e=document.createElement("p");e.textContent=`${n[t]}`,c.appendChild(e)}}))}()}(),console.log(t[0])})();