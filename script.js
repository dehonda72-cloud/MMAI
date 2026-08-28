document.getElementById('mathBtn').addEventListener('click', function() {
    var input = document.getElementById('userInput').value.trim();
    var output = document.getElementById('output');

    if (!input) {
        output.innerText = "⚠️ Напиши математический пример!";
        return;
    }

    try {
        var expr = input.replace(/,/g, '.').replace(/×/g, '*').replace(/÷/g, '/');
        var res = Function('"use strict"; return (' + expr + ')')();
        
        if (typeof res === 'number' && !isNaN(res)) {
            var formatted = res.toLocaleString('ru-RU');
            output.innerText = "✅ Решение найдено:\n\n" + input + " =\n" + formatted;
        } else {
            output.innerText = "⚠️ Не удалось посчитать. Проверь пример!";
        }
    } catch (e) {
        output.innerText = "💡 Введи пример с числами (+, -, *, /).\nНапример: 1000 * 1000000";
    }
});