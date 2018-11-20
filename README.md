Оптимизируйте страницу, выложите на GitHub Pages. Зайдите на https://shri-performance.ru и отправьте урл своей страницы.


### Что сделано:

- минус react
- минус лишний js-код
- минус лишняя огромная svg в стилях
- минус лишние шрифты, оставлены только woff + добавлены woff2, + проанализировав для чего эти на сайте, оставила в них только нужные символы (для одного только цифры и "+" "-", для второго только русский алфавит, "," "!" " " тем самым сократив размер до 26КБ в сумме за два шрифта, font-display:swap, поиграться)
- минифицированы картинки ОЧЕНЬ СИЛЬНО, даже фавиконку:D
- htmlmin (collapseWhitespace ломал что-то, поэтому без этой настройки), purgecss для удаления лишних стилей, uglify-es для минификации js
- блоки root, stats - разметка, стили для них и js удалены
- link preload для управления приоритетами загрузок
- inline стили и скрипт, разделила css по блокам, где они используются примерно, чтобы постепенная загрузка была
- inline svg для иконок сделала, но link preload как-то быстрее отрабатывает (видимо html парсится быстрее?)
