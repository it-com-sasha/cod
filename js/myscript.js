Vue.component('todo-item', {
	template: '<p>Это задача из списка</p>'
});


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

var app3 = new Vue ({
	el: "#app-3",
	data: {
		seen: true
	}
});

var app4 = new Vue ({
	el: "#app-4",
	data: {
		todos: [
			{ text: "Выучить JavaScript"},
			{ text: "Выучить Vue"},
			{ text: "Написать проект"}
		]
	}
	
});

var app5 = new Vue ({
	el: "#app-5",
	data: {
		message: "Привет это Vue"
	},
	methods: {
		reverseMessage : function() {
			this.message = this.message.split('').reverse().join('')
		}
	} 
	
});

var app6 = new Vue ({
	el: "#app-6",
	data: {
		message: "Введите текст"
	}
	
});



