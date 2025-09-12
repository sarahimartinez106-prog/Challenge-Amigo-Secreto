# Amigo Secreto

Este proyecto es una aplicación web sencilla que permite a los usuarios organizar un **sorteo de amigo secreto**.  
El usuario puede ingresar nombres en un campo de texto, visualizarlos en una lista y, finalmente, seleccionar un nombre al azar como ganador.

---

##  Propósito

El propósito de este proyecto es:
- Facilitar la organización de juegos de **Amigo Secreto**.
- Practicar la manipulación del **DOM en JavaScript**.
- Implementar validaciones básicas de entrada.
- Manejar listas dinámicas y generar selecciones aleatorias.

---


##  Estructura del Proyecto


---

## ⚙️ Funcionamiento del Código

### 1. **Agregar nombres**
- El usuario escribe un nombre en el campo de texto.
- Al presionar el botón **"Añadir"**, el nombre se valida:
  - Si está vacío, aparece una alerta pidiendo un nombre válido.
  - Si es correcto, se agrega a una lista interna (`amigos[]`) y se muestra en la interfaz.

### 2. **Visualizar lista**
- Cada nombre agregado aparece en una lista (`<ul id="listaAmigos">`) debajo del campo de entrada.
- La lista se actualiza dinámicamente cada vez que se añade un nuevo nombre.

### 3. **Sortear un amigo**
- Al hacer clic en el botón **"Sortear amigo"**, el programa selecciona un nombre al azar de la lista.
- El nombre sorteado se muestra en un segundo listado (`<ul id="resultado">`).
- Si no hay nombres en la lista, se muestra una alerta indicando que no se puede realizar el sorteo.

---

## 🖥️ Uso

1. Abre el archivo `index.html` en tu navegador.
2. Escribe el nombre de un amigo en el campo de texto y pulsa **"Añadir"**.
3. Repite el paso anterior tantas veces como sea necesario.
4. Pulsa **"Sortear amigo"** para seleccionar un nombre aleatorio de la lista.
5. El nombre sorteado aparecerá debajo del botón.

---

## 🚀 Tecnologías Utilizadas

- **HTML5** → estructura del proyecto.  
- **CSS3** → estilos visuales (tipografía, colores, diseño).  
- **JavaScript (DOM)** → manejo de la lógica de interacción (agregar, mostrar y sortear nombres).  

---

##  Ejemplo visual (flujo esperado)

1. El usuario agrega varios nombres:Daniela, Juan, María
2. Se muestra en la lista 2:
-Daniela
- Juan  
- María  
3. Al presionar "Sortear amigo", se muestra:
El amigo secreto es (ejemplo Maria).




