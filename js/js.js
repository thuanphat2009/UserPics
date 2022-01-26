const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabBtn = $$('.tab-pane')
console.log(tabBtn)
tabBtn.forEach(function(value,index){
    value.onclick = function(){
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
    }
})