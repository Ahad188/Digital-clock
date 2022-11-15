setInterval(() => {
     const time = document.querySelector("#time");
let  data = new Date();
let hour = data.getHours();
let minit = data.getMinutes();
let sec = data.getSeconds();
let day_night = "AM";
if(hour > 12){
     day_night ="PM";
     hour = hour - 12;
};
if(hour < 10){
     hour = "0" + hour;
}
if(minit < 10){

     minit = "0"+ minit;
};
if(sec < 10 ){

     sec = "0"+ sec;
};
time.textContent = hour + ":"+ minit +":"+ sec +" "+ day_night;
});