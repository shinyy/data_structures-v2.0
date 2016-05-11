$(function(){
	function list(){
			this.listSize=0;
			this. pos = 0;
			this. dataStore = [] ; // 初始化一个空数组来保存列表元素
			this. clear = function(){
				delete this.dataStore;
				this.dataStore=[];
				this.listSize=this.pos=0;
			};
			this. find = function(element){
				for(var i=0;i<this.dataStore.length;i++){
					if(this.dataStore[i]==element){
						return i
					}
				}
				return -1;
			};
			this. toString = function(){
				return this.dataStore;
			};
			this. insert = function(element,after){
				var inserPos=this.find(after);
				if(inserPos>-1){
					this.dataStore.splice(inserPos+1,0,element);
					++this.listSize;
					return true;
				}
				return false;
			};
			this. append = function(element){
				this.dataStore[this.listSize++]=element;
			};
			this. remove = function(element){
				if(this.find(element)>-1){
					this.dataStore.splice(this.find(element),1);
					--this.listSize;
					return true;
				}
				return false;
			};
			this. front = function(){
				this.pos=0;
			};
			this. end = function(){
				this.pos=this.listSize-1;
			};
			this. prev = function(){
		//		if(this.pos>0){
		//		 this.pos--;	
		//		}
				--this.pos;
			};
			this. next = function(){
				if(this.pos<this.listSize){
					++this.pos;
				}
			};
			this. hasNext=function(){
				return this.pos<this.listSize;
			};
			this.hasPrev=function(){
				return this.pos>=0;
			};
			this. length = function(){
				return this.listSize;
			};
			this. currPos = function(){
				return this.pos;
			};
			this. moveTo = function(position){
				this.pos=position;
			};
			this. getElement = function(){
				return this.dataStore[this.pos];
			};
			this. contains = function(element){
				for(var i=0;i<this.dataStore.length;i++){
					if(this.dataStore[i]==element){
						return true;
					}
				};
				return false;
			};
		}
	
	var films="(1) The Shawshank Redemption（《肖 申克的救赎》）;(2) The Godfather（《教父》）;(3) The Godfather: Part II（《教父 2》）;(4) Pulp Fiction（《低俗小说》）;(5) The Good, the Bad and the Ugly（《黄金三镖客》）;(6) 12 Angry Men（《十二怒汉》 ）;(7) Schindler’s List（《辛德勒名单》）;(8) The Dark Knight（《黑暗骑士》）;(9) The Lord of the Rings: The Return of the King（《指环王： 王者归来》）;(10) Fight Club（《搏击俱乐部》）;(11) Star Wars: Episode V - The Empire Strikes Back（《星球大战 5： 帝国反击战》）;(12) One Flew Over the Cuckoo’s Nest（《飞越疯人院》）;(13) The Lord of the Rings: The Fellowship of the Ring（《指环王： 护戒使者》）;(14) Inception（《盗梦空间》）;(15) Goodfellas（《好家伙》）;(16) Star Wars（《星球大战》）;(17) Seven Samurai（《七武士》）;(18) The Matrix（《黑客帝国》）;(19) Forrest Gump（《阿甘正传》）;(20) City of God（《上帝之城》）"
	
	//直接分割
	//var movies=films.split(";");
	//删除数组元素后面的空格
	function creatArr(str){
		var arr=str.split(";")
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].trim();	
		}
		return arr;
	};
	var movies=creatArr(films);
	
	var movieList=new list();
	for(var i=0;i<movies.length;i++){
		movieList.append(movies[i]);
	};
	
	
	function displayList(list){
		for(list.front();list.hasNext();list.next()){
			if(list.getElement() instanceof Customer){
				console.log(list.getElement()["name"]+","+list.getElement()["movie"]);
			}else{
				console.log(list.getElement());
			}
		}
	};
	
	displayList(movieList);
	
	var customers=new list();
	
	function Customer(name,movie){
		this.name=name;
		this.movie=movie;
	};
	
	function checkOut(name,movie,movieList,customerList){
		if(movieList.contains(movie)){
			var c=new Customer(name,movie);
			customerList.append(c);
			movieList.remove(movie);
		}else{
			console.log(movie+"不存在")
		};
	};
	checkOut("shin","(16) Star Wars（《星球大战》）",movieList,customers);
	checkOut("ruoyu","(20) City of God（《上帝之城》）",movieList,customers);
	console.log(movieList.toString());
	console.log(customers.toString());
	
	displayList(customers)
	
	
	//练习扩展
//	var arr1=[1,2,3,4,5];
//	var list1=new list();
//	for(var i=0;i<arr1.length;i++){
//		list1.append(arr1[i]);
//	};
//	function bigest(element,list){
//		var largNum=0;
//		for(list.front();list.hasNext();list.next()){
//			if(list.getElement()>largNum) largNum=list.getElement();
//		};
//		if(element>largNum){
//			list1.append(element)
//		};
//	};
//	function littlest(element,list){
//		var smallest;
//		for(list.front();list.hasNext();list.next()){
//			if(list.getELement())
//		}
//	}
})
