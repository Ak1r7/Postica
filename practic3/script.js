const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const max = document.getElementById('max')
const det = document.getElementById('determina')
const st = document.getElementById('sterge')



det.addEventListener('click',()=>{
    const a = parseInt(num1.value);
    const b = parseInt(num2.value);
    const c = parseInt(num3.value);
    
    if (a >= b && a >= c) {
        max.textContent = a;
    } else if (b >= a && b >= c) {
        max.textContent = b;
    } else {
        max.textContent = c;
    }
})

st.addEventListener('click',()=>{
    num1.value = ''
    num2.value = ''
    num3.value = ''
})