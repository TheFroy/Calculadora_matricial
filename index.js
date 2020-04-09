var eq1 = new Array(3);
var eq2=[];
var eq3=[];
var x,y,z;
const boton = document.getElementById('boton');
var r1,r2,r3;

function set_eqs() {

    for (let i = 0; i < 3; i++) {
        eq1[i] = parseInt(document.getElementById("0"+i).value);
        eq2[i] = parseInt(document.getElementById("1"+i).value);
        eq3[i] = parseInt(document.getElementById("2"+i).value);
        
    }
    r1 = parseInt(document.getElementById('r1').value);
    r2 = parseInt(document.getElementById('r2').value);
    r3 = parseInt(document.getElementById('r3').value);
    
}

function jacobi(){
     n = A.length;
     l = A[0].length;
     var i,j;
    if(n!=l){
        System.out.println("A no es una matriz cuadrada.");
        return new double[0];
    }else{
        x = new double[n];
        aux;
        cont=0;
        E= t+1;
        while(E>t && cont<=iter){
            E=0;
            for(i=0;i<n;i++){
                suma=0;
                for ( j=0;j<n; j++){
                    if (i!=j){
                        suma=suma+A[i][j]*x0[j];
                    }
                }
                x[i] = (b[i] - suma)/A[i][i];
                aux = x[i]-x0[i];
                E = E + Math.pow(aux,2);
            }
            E=Math.pow(E,0.5);
            for (i=0;i<n;i++){
                x0[i] = x[i];
            }
            cont=cont++;
        }
        if(E<t){
            return x;
        }
        else{
            System.out.println("no se llegó a la solución en "+iter+" iteraciones");
            return new double[0];
        }
    }
}

function gauss_sindel(){
    //Valida si la diagonal es dominante
    if ((Math.abs(eq1[0]) > Math.abs(eq1[1])) && (Math.abs(eq1[0]) > Math.abs(eq1[2])) && (Math.abs(eq2[1]) > Math.abs(eq2[0])) && (Math.abs(eq2[1]) > Math.abs(eq2[2])) && (Math.abs(eq3[2]) > Math.abs(eq3[1])) && (Math.abs(eq3[2]) > Math.abs(eq3[0]))){

        x = r1/eq1[0],4;
        y = ((eq2[0]*x)+r2)/eq2[1],4;
        z = ((eq3[0]*x)+(eq3[1]*y)+r3)/eq3[2],4
        
    }
    else{

        alert('La diagonal de la matriz debe contener numeros dominante a partir de su valor absoluto')
    }
}


boton.addEventListener('click',() => {
    set_eqs();

    if (select.value == 1){
    }
    else if (select.value == 2){
        jacobi();
    }
    else{
        gauss_sindel();
    }


    if ((x != undefined) && (y != undefined) && (z != undefined)){
        document.getElementById('sect').innerHTML = `<div class="container justify-content-center text-center p-3" style="margin-top: 20px;">
            <div class="container  p-3 m-2 shadow">
                <header>
                    <h3 class="display-3 font-weight-normal" style="font-size: calc(20px + 3vw)">Resultado</h3>
                </header>
                <div class="container bg-dark p-3 mt-4 text-white">
                    <h1 class="text-uppercase">x = ${x.toFixed(3)} <h1>
                    <h1 class="text-uppercase">y = ${y.toFixed(3)} </h1>
                    <h1 class="text-uppercase">z = ${z.toFixed(3)} </h1>
                </div>
            </div>`
    }
    
})