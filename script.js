
        function mostrarSeccion(seccion) {
            // Скрыть все разделы
            var secciones = document.querySelectorAll('.quienes-somos, .a-que-nos-dedicamos, .nuestros-proyectos');
            for (var i = 0; i < secciones.length; i++) {
                secciones[i].classList.remove('visible');
            }

            // Показать выбранный раздел
            document.querySelector('.' + seccion).classList.add('visible');
        }