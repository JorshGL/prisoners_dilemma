# Dilema Cuántico de los Prisioneros 🎮⚛️

## Descripción General

**Diseño e Implementación Digital de una Página Web Lúdica que Explique el Dilema Cuántico de los Prisioneros**

Este proyecto desarrolla una página web interactiva para simular de manera lúdica el dilema del prisionero cuántico, fusionando conceptos de mecánica cuántica y teoría de juegos. La plataforma permite a usuarios de todas las edades y especialidades explorar y comprender las estrategias cuánticas en situaciones de toma de decisiones estratégicas.

### ¿Qué es el Dilema del Prisionero Cuántico?

El dilema del prisionero es un problema clásico en la teoría de juegos que plantea la disyuntiva entre dos prisioneros que deben decidir si cooperar o traicionar, sin conocer las acciones del otro. En su versión cuántica, las estrategias se ven influenciadas por fenómenos como el entrelazamiento y la superposición, abriendo nuevas posibilidades de solución.

## 🎯 Objetivos

### Objetivo General
Desarrollar una página web lúdica que permita a las personas de todas las edades y especialidades conocer acerca del dilema del prisionero cuántico.

### Objetivos Específicos
- Investigar sobre el dilema del prisionero y sus aplicaciones en contextos cuánticos e informáticos
- Diseñar una página web interactiva con herramientas visuales y ejemplos ilustrativos
- Facilitar la visualización y uso de la página web en servidores universitarios

## 🚀 Características

- **Interfaz Lúdica**: Diseño atractivo con personajes y elementos gráficos que hacen el aprendizaje más entretenido
- **Simulación Interactiva**: Permite experimentar con diferentes estrategias cuánticas
- **Diseño Responsivo**: Adaptado para funcionar en dispositivos móviles, tablets y escritorio
- **Tutorial Integrado**: Guía paso a paso para comprender los conceptos cuánticos
- **Visualización de Resultados**: Gráficos y matrices que muestran los resultados de las decisiones

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue.js 3**: Framework principal para la interfaz de usuario
- **Vue Router**: Navegación entre páginas
- **Vuex**: Manejo del estado global de la aplicación
- **Tailwind CSS**: Framework de estilos para diseño responsivo
- **Chart.js**: Visualización de datos y gráficos

### Backend
- **Python**: Servidor backend
- **Flask**: Framework web para APIs
- **Qiskit**: Librería para computación cuántica

### Herramientas de Desarrollo
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Compatibilidad con navegadores

## 🏗️ Estructura del Proyecto

```
prisoners_dilemma/
├── public/                 # Archivos públicos
├── src/
│   ├── components/         # Componentes Vue reutilizables
│   │   ├── Home/          # Componentes de la página principal
│   │   └── About/         # Componentes de información
│   ├── views/             # Vistas principales
│   ├── router/            # Configuración de rutas
│   ├── store/             # Estado global (Vuex)
│   └── assets/            # Recursos estáticos
├── server/                # Servidor backend Python
│   └── app/               # Aplicación Flask
└── docs/                  # Documentación
```

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- Python 3.8 o superior
- npm o yarn

## 🚀 Instalación y Configuración

### Frontend (Vue.js)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run serve
   ```

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

### Backend (Python)

1. **Navegar al directorio del servidor:**
   ```bash
   cd server
   ```

2. **Crear entorno virtual:**
   ```bash
   python -m venv venv
   ```

3. **Activar entorno virtual:**
   ```bash
   # Windows
   venv\Scripts\activate
   # Linux/Mac
   source venv/bin/activate
   ```

4. **Instalar dependencias:**
   ```bash
   pip install -r app/dependencies.txt
   ```

5. **Ejecutar servidor:**
   ```bash
   python app/qis.py
   ```

## 🎮 Uso

1. **Acceder a la aplicación** en `http://localhost:8080` (frontend)
2. **Explorar el tutorial** para comprender los conceptos básicos
3. **Experimentar con las simulaciones** seleccionando diferentes estrategias
4. **Visualizar los resultados** en tiempo real
5. **Aprender sobre teoría cuántica** a través de las explicaciones interactivas

## 🎨 Características Visuales

- **Personajes temáticos**: Kirby y Knight como representación de los prisioneros
- **Matrices cuánticas**: Visualización de las diferentes estrategias posibles
- **Gráficos interactivos**: Resultados mostrados de forma clara y comprensible
- **Animaciones**: Transiciones suaves para mejorar la experiencia de usuario

## 🏫 Contexto Académico

Este proyecto fue desarrollado como parte de una actividad complementaria en el 4to semestre, con la colaboración entre la **Universidad Autónoma de Occidente (UAO)** y la **Universidad del Valle (Univalle)**. 

### Justificación Académica
- Exploración de estrategias cuánticas en toma de decisiones
- Divulgación científica de conceptos de mecánica cuántica
- Desarrollo de herramientas educativas accesibles
- Fomento del interés en computación cuántica

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

Desarrollado por estudiantes de Ingeniería en colaboración entre UAO y Univalle.

## 📞 Contacto

Para más información sobre el proyecto, contactar a través de los canales oficiales de las universidades participantes.

---

*"Explorando el fascinante mundo donde la mecánica cuántica se encuentra con la teoría de juegos"* ⚛️🎮
