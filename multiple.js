var Multiples = {
	mul3: function(val) {
		return val % 3 == 0;
	},

	mul5: function(val){
		return val % 5 == 0;
	}, 

	lowerThanZero : function (val) {
		return val;
	},

	isInteger: function(val){
		if (!isNaN(val)){
			if (val.toString().indexOf(".") > 0) return false;
			return true;
		}
		return false;
	},
	
	doList: function(val){
		var result = new Array();
		for (var i = 1; i < val; i++) {
			if(this.mul3(i) || this.mul5(i)) {
				result.push(i);
			}
		}

		return result;
	},

	doSum: function(arr){
		var sum = 0;
		for(var i=0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum;
	},

	doListSum: function(num){
		var multiples = this.doList(num);
		var sum = this.doSum(multiples);
		multiples.push(sum);
		return multiples;
	}

};