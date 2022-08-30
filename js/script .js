var bike={
    model:200,
    fueltype:100,
    fuelcapacity:13,
    mileage:30,
    vehiclecc:130,


    avg:function(){
        var avg=(this.model+this.fueltype+this.fuelcapacity+this.mileage+this.vehiclecc)/5;

        return avg;
    }
}
var a=bike.avg();
console.log(bike.avg());




var fruits={
  fruitname:"apple",
  protein:"0.3g",
  totalfat:"0.2g",
  fiber:"5 grams",



  avg:function(){
    var avg=(this.fruitname+this.protein+this.totalfat+this.fiber);

    return avg;
  }
}
var a=fruits.avg();
console.log(fruits.avg());



mobile={
    type:"honor 9 lite",
    battery:"5000mph",
    ram:"4gb",
    amount:"14000",
    storage:"64gb",

    
    avg:function(){
      var avg=(this.type+this.battery+this.ram+this.amount+this.storage);
  
      return avg;
    }
}
  var a=mobile.avg();
  console.log(mobile.avg());