// Your code here
const dodger =document.getElementById("dodger");
const moveDodgerLeft = () => {
    const leftNumbers =dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left>0){
        dodger.style.left = `${left -1}px`;
    }
}
const moveDodgerRight = () => {
    const rightNUmbers = dodger.style.left.replace ("px", "");
    const right = parseInt(rightNUmbers, 10);
    if(right<360){
        dodger.style.left = `${right + 1}px`;
    }
}