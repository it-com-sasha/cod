var app = new Vue ({
	el: "#app",
	data: {
		message: "Изучаем Vue"
	}

});

var app2 = new Vue ({
	el: "#app-2",
	data: {
		message: "Вы загрузили эту страницу:" + new Date().toLocaleString()
	}
});