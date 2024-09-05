const rez = document.getElementById('rez')

  rez.addEventListener('click',()=>{
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solution = "x₁ = " + x1.toFixed(2) + ", x₂ = " + x2.toFixed(2);
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        solution = "x = " + x.toFixed(2);
    } else {
        solution = "Nu există soluții reale.";
    }

    document.getElementById("solution").innerHTML = solution;
  })  
