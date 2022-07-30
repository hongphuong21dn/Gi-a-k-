document.getElementById('random').onclick = () => {
    const A = ['Quyên','Thảo 25','Thảo','Phượng']
    const x = Math.round(Math.random()*3);
    document.getElementById("demo").innerHTML = A[x];
}