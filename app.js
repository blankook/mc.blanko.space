(function() {
    // Твой секретный алфавит для идентификации (ключи)
    const _1 = "qwertyuiopasdfghjklzxcvbnm";
    const _0 = "mnbvcxzlkjhgfdsapoiuytrewq";

    // Сборка контента (BLANKO СКОРО) из Hex
    const _build = () => {
        const target = document.getElementById('app');
        // Декодируем надписи
        const h = document.createElement('h1');
        h.className = 'l_t';
        h.textContent = '\x42\x4C\x41\x4E\x4B\x4F'; // BLANKO
        
        const s = document.createElement('div');
        s.className = 's_t';
        s.textContent = '\u0441\u043A\u043E\u0440\u043E'; // скоро
        
        target.appendChild(h);
        target.appendChild(s);
    };

    // Генерация звезд
    const _sky = () => {
        const c = document.getElementById('stars-container');
        const clrs = ['#ffffff', '#e0f7ff', '#fff4e6'];
        for (let i = 0; i < 300; i++) {
            const s = document.createElement('div');
            s.className = 'star';
            const size = Math.random() * 2 + 0.5;
            Object.assign(s.style, {
                width: size + 'px', height: size + 'px',
                left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
                backgroundColor: clrs[Math.floor(Math.random() * clrs.length)],
                opacity: Math.random()
            });
            c.appendChild(s);
        }
    };

    // Запуск, если ключи алфавита верны
    if (_1.indexOf('q') === 0 && _0.indexOf('m') === 0) {
        _build();
        _sky();
    }
})();
