document.getElementById("form").addEventListener("submit", function (event) {  
    event.preventDefault(); // Отмена отправки формы по умолчанию  

    const formData = new FormData(this); // Получение данных формы  
    const xhr = new XMLHttpRequest();  
    const progress = document.getElementById('progress');  

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);  

    xhr.upload.addEventListener("progress", function (event) {  
        if (event.lengthComputable) {  
            const percentComplete = event.loaded / event.total;  
            progress.value = percentComplete; // Обновление индикатора прогресса  
        }  
    });  

    // Обработка ответа сервера  
    xhr.onload = function () {  
        switch (xhr.status) {  
            case 200:  
                alert("Файл успешно загружен!");  
                break;  
            case 201:  
                alert("Файл успешно создан!");  
                break;  
            case 400:  
                alert("Ошибка загрузки файла: неверные данные запроса.");  
                break; 
            case 404:  
                alert("Ошибка загрузки файла: страница не найдена");  
                break;  
            case 500:  
                alert("Ошибка сервера: что-то пошло не так. Попробуйте позже.");  
                break;  
            default:  
                alert("Неизвестный ответ сервера: " + xhr.status);  
                break;  
        }  
    };  

    // Отправка формы  
    xhr.send(formData);  
});