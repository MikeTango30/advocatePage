(function(){
    function handleClick(event){
        console.log('click')
        event.preventDefault();
        fullpage.moveSectionDown();
    }

    document.querySelector('.fp-down').addEventListener('click', handleClick);
})();