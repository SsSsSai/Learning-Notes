var app = new Vue({
    el: "#app",
    data: {
        message: "hello"
    }
})

var app_1 = new Vue({
    el: "#app_1",
    data: {
        message: "hello again"
    }
})

var app_2 = new Vue({
    el: "#app_2",
    data: {
        booltrue: true,
        boolfalse: false
    }
})

var app_3 = new Vue({
    el: "#app_3",
    data: {
        persion:[
            { name: "mike1" },
            { name: "mike2" },
            { name: "mike3" }
        ],
        people:["tom1","tom2","tom3"]
    }
})
