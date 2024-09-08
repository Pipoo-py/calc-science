# Calculadora científica en JavaScript
Este es que se divide en 4 archivos: un index.html, style.css, script.mjs y functions,mjs.

## Errores por resolver
La aplicación se puede usar sin muchas complicaciones, excepto un par de detalles que hay que tener en cuenta:
1. Si se clickea sobre el fondo blanco de la calculadora como tal, al input se le agregaran los textContent de TODOS los botones.
-------- Para evitarlo:
Simplemente tenga cuidado al momento de clickear, si clickea el fondo blanco, presione AC y se limpiará el input.
2. Incompatibilidad con operaciones combinadas, si se intenta sumar, restar, multiplicar, dividir y demás operaciones al mismo tiempo es probable que de como resultado errores como: "undefined" o "NaN";