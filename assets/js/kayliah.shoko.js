$(document).ready(function(){
    var classCycle = ['kay-bgDay','kay-bgMiddle','kay-bgNight'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    $('body').addClass(classToAdd);
});