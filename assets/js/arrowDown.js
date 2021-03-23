(() => {
    let arrowsDown = document.querySelectorAll('.fp-down');

    arrowsDown.forEach(arrowDown => {
    arrowDown.addEventListener('click', handleClick);
   })
})();

function handleClick(event){
    event.preventDefault();
    fullpage_api.moveSectionDown();
}