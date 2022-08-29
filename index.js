document.querySelector(".task").addEventListener("click",function(){
    document.querySelector(".main-main").classList.add("main-main-remove")
    document.querySelector(".main-main").classList.remove("remove-icon")
    document.querySelector(".main").classList.remove("main-remove");
    document.querySelector(".main").classList.remove("start-remove");
    
});
document.querySelector(".add").addEventListener("click",function(){
    document.querySelector(".main-main").classList.remove("main-main-remove");
    document.querySelector(".main-main").classList.add("remove-icon");
    document.querySelector(".main").classList.add("main-remove");
    
});

document.querySelector(".adding").addEventListener("click",function(){
    document.querySelector(".main-main").classList.add("main-main-remove")
    document.querySelector(".main-main").classList.remove("remove-icon")
    document.querySelector(".main").classList.remove("main-remove");
    document.querySelector(".main").classList.remove("start-remove");
    
});

// ------------------------------------------------- FOOTER -------------------------------------------------
var today = new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML=`<em>${today}</em>`;
document.querySelector(".dev-by").innerHTML="<em>Muhammad Nasir</em>"