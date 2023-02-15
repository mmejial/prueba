(function(){
[...document.querySelectorAll('.control')].forEach(e=>{
    e.addEventListener('click',function(){
        document.querySelector('.active-btn').classList.remove('active-btn');
        this.classList.add('active-btn');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(e.dataset.id).classList.add('active');
        
    })
})
})();