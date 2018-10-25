const output=document.querySelector(".modal__value"),rangeSLider=document.querySelector(".adjust-bar.adjust-bar_theme_temp");rangeSLider.oninput=(()=>output.innerHTML=this.value>0?"+"+this.value:this.value);const arrowLeftDevs=document.querySelector(".devices__paginator .paginator__arrow_left"),arrowRightDevs=document.querySelector(".devices__paginator .paginator__arrow_right"),panelCountDevs=document.querySelectorAll(".devices__panel").length,devices=document.querySelector(".devices"),pagiantorDevs=document.querySelector(".devices__paginator");let currentPageDevs=1;pagiantorDevs.classList.toggle("paginator_hide",panelCountDevs<7);const scrolling=(e,t)=>e.scroll({top:0,left:t,behavior:"smooth"});let curValue,curRotate;arrowRightDevs.addEventListener("click",()=>{currentPageDevs+=1,arrowLeftDevs.classList.toggle("paginator__arrow_disabled",1===currentPageDevs),scrolling(devices,1366)}),arrowLeftDevs.addEventListener("click",()=>{currentPageDevs>1&&(currentPageDevs-=1,arrowLeftDevs.classList.toggle("paginator__arrow_disabled",1===currentPageDevs),scrolling(devices,-1366))});const rotateToValue=e=>Math.floor(Math.abs(360*e*1.73+265)/53+26),setRotate=e=>{e>.42?e=.42:e<-.42&&(e=-.42),curRotate=e,curValue=rotateToValue(e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+curValue,document.querySelector(".knob__value").innerHTML="+"+curValue,document.querySelector(".knob__indicator").style.strokeDasharray=360*curRotate*1.73+265+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*curRotate+"deg)"},getPosition=e=>{const t=e.getBoundingClientRect();return[t.left+(t.right-t.left)/2,t.top+(t.bottom-t.top)/2]},getMouseAngle=(e,t)=>{const o=getPosition(t);let r,a=[e.clientX,e.clientY];return e.targetTouches&&e.targetTouches[0]&&(a=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),r=Math.atan2(a[1]-o[1],a[0]-o[0]),r+=Math.PI/2};let knobDragged,prevAngleRad=null,prevRotate=null;const startDragging=e=>{e.preventDefault(),e.stopPropagation();const t=getMouseAngle(e,document.querySelector(".knob_center"));knobDragged=!0,prevAngleRad=t,prevRotate=curRotate},stopDragging=()=>knobDragged=!1,dragRotate=e=>{if(!knobDragged)return;const t=prevAngleRad;let o=getMouseAngle(e,document.querySelector(".knob_center")),r=o-t;prevAngleRad=o,r<0&&(r+=2*Math.PI),r>Math.PI&&(r-=2*Math.PI);const a=r/Math.PI/2,n=prevRotate+a;prevRotate=n,setRotate(n)},setEvtListeners=()=>{const e=document.querySelector(".knob-container");e.addEventListener("mousedown",startDragging),document.addEventListener("mouseup",stopDragging),document.addEventListener("mousemove",dragRotate),e.addEventListener("touchstart",startDragging),document.addEventListener("touchend",stopDragging),document.addEventListener("touchmove",dragRotate)};setEvtListeners(),setRotate(0),document.querySelectorAll(".modal_close").forEach(e=>{e.onclick=(()=>{document.querySelectorAll(".modal").forEach(e=>{e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})})});const TEMPS={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(e=>{e.onclick=(()=>{document.querySelector(".adjust-bar_theme_temp").value=TEMPS[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=TEMPS[this.id]>0?"+"+TEMPS[this.id]:TEMPS[this.id]})});const showModal=e=>{document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(e=>e.onclick=(()=>showModal(".modal_temp"))),document.querySelectorAll(".panel_lamp").forEach(e=>e.onclick=(()=>showModal(".modal_light"))),document.querySelectorAll(".panel_floor").forEach(e=>e.onclick=(()=>showModal(".modal_knob")));const arrowLeftScens=document.querySelector(".scenarios__paginator .paginator__arrow_left"),arrowRightScens=document.querySelector(".scenarios__paginator .paginator__arrow_right"),panelCountScens=document.querySelectorAll(".scenarios__panel").length,pageCountScens=document.querySelectorAll(".scenarios__page").length,scenarios=document.querySelector(".scenarios"),pagiantorScens=document.querySelector(".scenarios__paginator");let currentPage=1;pagiantorScens.classList.toggle("paginator_hide",panelCountScens<=9),arrowRightScens.addEventListener("click",()=>{currentPage<pageCountScens&&(currentPage+=1,arrowRightScens.classList.toggle("paginator__arrow_disabled",currentPage===pageCountScens),arrowLeftScens.classList.toggle("paginator__arrow_disabled",1===currentPage),scrolling(scenarios,645))}),arrowLeftScens.addEventListener("click",()=>{currentPage>1&&(currentPage-=1,arrowRightScens.classList.toggle("paginator__arrow_disabled",currentPage===pageCountScens),arrowLeftScens.classList.toggle("paginator__arrow_disabled",1===currentPage),scrolling(scenarios,-645))});const selectButton=document.querySelector(".filter__select-button"),selectButtonText=document.querySelector(".filter__select-button .button__text"),selectOptions=document.querySelectorAll(".filter__select-item"),popup=document.querySelector(".filter__select-popup");selectButton.addEventListener("click",()=>popup.classList.toggle("filter__select-popup_open")),selectOptions.forEach(e=>e.addEventListener("click",e=>{document.querySelector("#"+e.target.dataset.group).checked=!0,selectOptions.forEach(e=>e.classList.toggle("filter__select-item_checked",!1)),e.target.classList.toggle("filter__select-item_checked",!0),popup.classList.toggle("filter__select-popup_open",!1),selectButtonText.innerText=e.target.innerText}));