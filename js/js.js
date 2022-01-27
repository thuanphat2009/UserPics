const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabBtn = $$('.tab-pane')
const tabList = $('.tab-list')
const heightToTabList = $('.tab-list').offsetTop

tabBtn.forEach(function(value,index){
    value.onclick = function(){
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
    }
})

window.onscroll = function(){
    if (document.body.scrollTop >= 5300 && document.body.scrollTop < 5930 || document.documentElement.scrollTop >= 5300 && document.body.scrollTop < 5930) {
        tabList.classList.add('scroll-tab')
      }
    else{
        tabList.classList.remove('scroll-tab')

      }
}




