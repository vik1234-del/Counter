let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const styles = (event.currentTarget.classList);
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
            value.style.color="black";
        }
        if (styles.contains("increase")) {
            count++;
        }
        if (count>0){
            value.style.color="green";
        }
        if (count<0){
            value.style.color='red';
        }
    
        value.textContent = count;
    })
})