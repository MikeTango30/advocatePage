(function(){
    document.querySelector('.fp-down').addEventListener('click', handleClick);
})();

function handleClick(event){
    event.preventDefault();
    fullpage_api.moveSectionDown();
}