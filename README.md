# 📚 Guía de Desafíos: Estructuras de Datos y React

Una colección completa de desafíos prácticos diseñados para dominar las estructuras de datos fundamentales y React, organizados por branches para un aprendizaje autodidacta progresivo. En esta rama se encuentra la descripción de todos los retos y las ramas siguientes contienen un ejemplo de solución de cada uno de ellos.

## 🎯 Objetivo General

Esta guía te permitirá:
- Dominar las estructuras de datos fundamentales en JavaScript
- Aplicar conceptos de React en proyectos prácticos
- Desarrollar habilidades de programación a través de desafíos progresivos

## 🗂️ Estructura del Repositorio

Cada desafío está organizado en una rama (branch) específica para mantener el código organizado y permitir un seguimiento claro del progreso.

### 📋 Lista de Desafíos

| Branch | Tema | Descripción |
|--------|------|-------------|
| `00_arrays` | Arrays | Investigar e implementar todas las funciones para arrays |
| `01_functions` | Funciones | Diferencias entre arrow functions y regular functions |
| `02_first_component` | Componentes React | Crear FirstApp.jsx con elementos básicos |
| `03_counter` | Hooks useState | Contador con botones y hook useState |
| `04_categories` | Estado dinámico | Lista de categorías con input para agregar nuevas |
| `05_optimization` | Optimización React | React.memo, useCallback y useMemo |
| `06_private_routes` | Context y rutas | PrivateRoute con validación de contexto |
| `07_linked_list` | Lista enlazada | Lista doblemente enlazada de canciones |
| `08_stack` | Estructura Pila | Gestión de libros con estructura LIFO |
| `09_queue` | Estructura Cola | Simulación de fila de cajero con estructura FIFO |
| `10_redux_stack` | Redux + Pila | Contador con Redux y pila de valores |
| `11_auth_firebase` | Autenticación | Sistema completo con Firebase y Redux |
| `12_crud_firestore` | CRUD Firebase | Operaciones CRUD con Firestore |
| `13_realtime_chat` | Chat tiempo real | Chat con Firebase Realtime Database |
| `14_binary_tree` | Árbol binario | BST con visualización y recorridos |
| `15_n_tree_sidebar` | Árbol n-ario | Sidebar con submenús jerárquicos |
| `16_graph_3d` | Grafos 3D | Visualización de relaciones personas-ciudades |
| `17_sass_modules` | Estilos avanzados | SASS y CSS Modules aplicados |

## 📖 Desafío 00: Arrays
Investigar e implementar todas las funciones para arrays en JavaScript, creando ejemplos prácticos que demuestren su uso y funcionalidad.


## 📖 Desafío 01: Functions
Investigar la diferencia entre las arrow functions y regular functions. Crear un ejemplo de cada una, demostrando sus características y casos de uso específicos.

### 📋 Objetivos
- Comparar sintaxis y comportamiento
- Entender diferencias en el contexto `this`
- Analizar casos de uso apropiados para cada tipo
- Demostrar con ejemplos prácticos las ventajas y limitaciones

## 📖 Desafío 02: First Component
Crear el componente `FirstApp.jsx` en un proyecto de Vite y retornar un título dentro de la etiqueta `<h1>` y el texto "10" dentro de una etiqueta `<span>`.

### 📋 Objetivos
- Configurar proyecto con Vite
- Crear componente funcional básico
- Implementar JSX correctamente
- Renderizar elementos HTML en React

## 📖 Desafío 03: Counter
Crear un contador con los botones: restar, aumentar y reset. Implementar el Hook `useState` para el manejo de estado local.

### 📋 Objetivos
- Dominar el hook `useState`
- Manejar eventos de click
- Actualizar estado de manera inmutable
- Crear interfaz interactiva básica

## 📖 Desafío 04: Categories
Mostrar una lista de categorías y agregar un input y botón guardar para agregar y mostrar nuevas categorías dinámicamente.

### 📋 Objetivos
- Manejar arrays en el estado
- Capturar datos de formularios
- Renderizar listas dinámicamente
- Controlar inputs controlados

## 📖 Desafío 05: Optimization
Demostrar las técnicas de optimización de rendimiento utilizando `React.memo`, `useCallback` y `useMemo`. El proyecto debe incluir un componente padre que maneje estado y renderice múltiples componentes hijos.

### 📋 Objetivos
- Implementar React.memo para evitar re-renderizados innecesarios
- Usar useCallback para memorizar funciones
- Aplicar useMemo para cálculos costosos
- Medir y comparar rendimiento

## 📖 Desafío 06: Private Routes
Crear un componente `PrivateRoute.jsx` que valide a partir de un contexto creado previamente la información del usuario autenticado y permita acceder a las rutas privadas.

### 📋 Objetivos
- Implementar React Context
- Crear sistema de autenticación básico
- Proteger rutas según estado de autenticación
- Manejar redirecciones condicionales

## 📖 Desafío 07: Linked List
Crear un ejemplo de lista de canciones doblemente enlazadas e imprimirla en consola, demostrando la navegación bidireccional entre nodos.

### 📋 Objetivos
- Implementar estructura de lista doblemente enlazada
- Crear métodos de inserción y eliminación
- Demostrar navegación hacia adelante y atrás
- Mostrar estructura en consola

## 📖 Desafío 08: Stack
Implementar una estructura de datos tipo pila (LIFO) para gestionar libros, incluyendo un componente de formulario para capturar información de nuevos libros y un componente de visualización que muestre la colección siguiendo el principio Last In, First Out.

### 📋 Objetivos
- Implementar estructura de datos Stack
- Crear operaciones push y pop
- Desarrollar formulario para captura de datos
- Visualizar principio LIFO en la interfaz

## 📖 Desafío 09: Queue
Implementar una estructura de datos tipo cola para simular la fila de personas en un cajero. Crear un formulario para agregar una persona a la fila con su nombre y el monto a retirar.

### 📋 Objetivos
- Implementar estructura de datos Queue
- Crear operaciones enqueue y dequeue
- Simular sistema de atención FIFO
- Desarrollar interfaz para gestión de cola

## 📖 Desafío 10: Redux Stack
Integrar Redux para el manejo de estado global de un contador con operaciones básicas (incremento/decremento unitario) y personalizadas (incremento/decremento por valor definido por el usuario). Implementar una estructura de datos tipo pila para almacenar valores numéricos mediante un botón "Add" que permite agregar el valor actual del input a la pila.

### 📋 Objetivos
- Configurar Redux store
- Crear reducers para contador y pila
- Implementar actions síncronas
- Combinar Redux con estructura de datos Stack

## 📖 Desafío 11: Auth Firebase
Implementar un sistema de autenticación completo utilizando Redux Toolkit para el manejo de estado global y Firebase Authentication para la gestión de usuarios. Incluir funcionalidades de registro e inicio de sesión con email y contraseña, autenticación con Google, logout, rutas protegidas mediante un componente `PrivateRoute`, y persistencia del estado de autenticación a través del store de Redux configurado en Store con el slice `authSlice` que maneja los estados de autenticación (checking, authenticated, not-authenticated) y las acciones asíncronas definidas en `thunks.js`.

### 📋 Objetivos
- Configurar Firebase Authentication
- Implementar Redux Toolkit
- Crear sistema de login/registro
- Desarrollar autenticación con Google
- Proteger rutas privadas

## 📖 Desafío 12: CRUD Firestore
Implementar un CRUD completo (Create, Read, Update, Delete) utilizando Firestore de Firebase como base de datos NoSQL, permitiendo crear, leer, actualizar y eliminar documentos de manera eficiente con operaciones en tiempo real y sincronización automática de datos entre el cliente y la base de datos en la nube.

### 📋 Objetivos
- Configurar Firestore
- Implementar operaciones CRUD
- Manejar datos en tiempo real
- Crear interfaz para gestión de documentos

## 📖 Desafío 13: Realtime Chat
Implementar una aplicación de chat en tiempo real utilizando Firebase Realtime Database o Firestore, permitiendo el envío y recepción instantánea de mensajes entre múltiples usuarios conectados, con sincronización automática de conversaciones y actualizaciones en vivo sin necesidad de recargar la página.

### 📋 Objetivos
- Configurar Firebase Realtime Database
- Implementar envío y recepción de mensajes
- Crear sistema de usuarios múltiples
- Desarrollar interfaz de chat en tiempo real

## 📖 Desafío 14: Binary Tree
Implementar un árbol binario de búsqueda en React donde los usuarios pueden insertar una serie de números y visualizar tanto los recorridos del árbol (inorden, preorden y postorden) impresos en consola como una representación gráfica interactiva del árbol utilizando la librería `react-d3-tree` para mostrar la estructura de datos de manera visual y dinámica.

### 📋 Objetivos
- Implementar árbol binario de búsqueda
- Crear algoritmos de recorrido
- Integrar react-d3-tree para visualización
- Desarrollar interfaz interactiva

## 📖 Desafío 15: N-Tree Sidebar
Implementar un sidebar de navegación con submenús utilizando una estructura de datos de árbol n-ario, donde cada nodo puede tener múltiples hijos representando diferentes niveles de menús y submenús, permitiendo una navegación jerárquica intuitiva con capacidad de expandir y contraer categorías de manera dinámica.

### 📋 Objetivos
- Implementar estructura de árbol n-ario
- Crear navegación jerárquica
- Desarrollar funcionalidad expandir/contraer
- Diseñar interfaz de sidebar dinámica

## 📖 Desafío 16: Graph 3D
Implementar un grafo interactivo en 3D utilizando `react-3d-graph` para visualizar las relaciones entre personas y las ciudades donde residen, creando nodos que representan tanto individuos como ubicaciones geográficas, conectados mediante aristas que muestran las relaciones de residencia en un entorno tridimensional navegable y dinámico.

### 📋 Objetivos
- Implementar estructura de grafo
- Configurar react-3d-graph
- Crear relaciones personas-ciudades
- Desarrollar visualización 3D interactiva

## 📖 Desafío 17: SASS Modules
Tomar uno de los desarrollos anteriores y aplicar estilos avanzados utilizando SASS para aprovechar variables, mixins, anidamiento y funciones, combinado con CSS Modules para encapsular estilos y evitar conflictos de nombres de clases, creando una arquitectura de estilos modular, mantenible y escalable.

### 📋 Objetivos
- Configurar SASS en el proyecto
- Implementar CSS Modules
- Crear variables y mixins
- Aplicar arquitectura de estilos modular

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [MDN - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

### Recursos Adicionales
- [JavaScript.info - Arrays](https://javascript.info/array)
- [FreeCodeCamp - Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Visualgo - Algorithm Visualizations](https://visualgo.net/en)

## 📝 Notas para Estudiantes

### Consejos para el Éxito
- **Practica regularmente:** Dedica al menos 30 minutos diarios
- **Entiende antes de memorizar:** Comprende el "por qué" antes del "cómo"
- **Comenta tu código:** Explica tu lógica para futura referencia
- **Experimenta:** Prueba diferentes enfoques para el mismo problema
- **Documenta tu progreso:** Mantén notas de lo que aprendes