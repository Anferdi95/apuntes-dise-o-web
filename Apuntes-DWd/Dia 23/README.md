
## Variables Referenciales vs Primitivas

Primitivas es la cubetadonde guardamos algun dato. `string ,numeros ,booleanos`, y otros...// estos pueden ser`let` o `const`
Referencial es la llave del camion (no el camión) donde guardamos muchos datos.` Objetos, Arrays, funciones `. //Estos son siempre `const`

```js
const  num=25;
nume=30 //ERROR!!! no se puede modificar una constante

const alumnos=["juan","Maria","Pedro"];
alumnos[0]="tomas"; //Ok!se puede modificar el contenido d eun array.
``` 

## comentarios em JS
- Comentario simple: se utiliza `//`para 1 sola linea
- Comentario simple o en linea:Pueden usarse`//`al fnal de la linea
- Comentario en bloque`/*....*/` para hacer comentarios en multiples lineas.
- Comentario de documentacion:`/**.  comentario..*/` para iniciar un bloque informatvio . se usa mucho en funciones

```js
// 1 sola linea
let nombre="juan"; //1 sola linea al final 


// https://patorjk.com/software/taag/#p=display&f=Big%20Money-nw&t=Hola%20CEI
// https://fsymbols.com/es/arte-de-texto/


/**
 * Esta es la funcion que suma 2 numeros
 * 
 * @param {number} num1 - el primer numero
 * @param {number} num2 - el segundo numero
 * @return {number} - la suma de numb1 y numb2
 * */
function sumar(num1, num2){
    return num1+num2;
}


/*-------------------------------*/
//             seccion 1          //
/*--------------------------------*/
```

# Operadores aritmeticos

Tenemos operadores de asignacion, comparacion, logicos.

Los aritmeticos mas comunes son :

- Suma "+": sumas 2 valores
- Resta "-": resta 2 valores
- Incrementar un valor "++": Incrementar el valor de una variable
- Decremetar un valor "--"": Decrementar el valor de una variable
- Multiplicacion "*".
- Division "/".
- Modulo "%": El resto de la division de 2 valores

```js
let a= 10;
let b= 5;

let suma = a+b;  //15
let resta = a-b; //5
let multi = a*b; //50
let divi = a/b;  //2
let moculo = a%b; //0
let incrementoParaA = a++;  //11
let decrementoParaB = b--;  //4
```

# comparativos
```js

=== /// si son iguales estrictamente ( el mismo valor  y el mismo tipo)
!== // si no son estrictamente iguales
== // para ver si son iguales
!= // Para ver si son distintos
<  // Para ver si es menor
>  // Para ver si es mayor
<=  // Para ver si es menor o igual que...
>= // Para ver si es mayor o igualque ...


if ( a == b ) {
    //se hace esto
} else {
        //se hace esto otro
}


```


s