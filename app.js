new Vue({
    el: '#vue-app',
    data:{
        activity:'',
        toDoItems:[]
    },
    methods:{
        addItem: function(){
            if (this.activity !='') {
                this.toDoItems.push(this.activity);
                this.activity ='';
            }
        },
        removeItem: function(index){
            this.toDoItems.splice(index,1);
        }
    }
})