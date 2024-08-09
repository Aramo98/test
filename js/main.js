$(document).ready(function(){
    let countNum = 0;

$(".navBtn").click(()=>{
    $(".items_list").toggleClass("active")
    $(".navBtn").toggleClass("active")
})


    $(".createBtn").click(function(){
        $(".modalBlock").addClass("active")
    })

    $(".cancelBtn").click(function(){
        $(".modalBlock").removeClass("active")
    })

    $(".FinalyCreateBtn").click(function(evt){
     
        countNum+=1
      evt.preventDefault();
     const name = $(".Name").val()
     const qr = $(".QrCode").val();
     const rfid = $(".Rfid").val();
     const Nesting = $(".Nesting").val()
     if (!name || !qr || !rfid || !Nesting) {
        alert("please write all boxes")
        return false
     }else{
        $(".Name").val("")
        $(".QrCode").val("")
        $(".Rfid").val("")
        $(".Nesting").val("")
       const locationLists = document.querySelector(".locationLists");
       locationLists.innerHTML += `<div class="locationB">
            <div class="locationHeader">
            <div class="icon"><i class="fa-solid fa-plus"></i></div>
             <div class="elipsisIcon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            <span class="locationName">${name || locationName}</span> ${countNum}
                          <div class="editandDeletBtnBlock">
                <span class = "editBtn"><i class="fa-solid fa-pen"></i> Редактировать</span>
                <span class ="deleteBtn"><i class="fa-solid fa-xmark"></i> Удалить</span>
            </div>
            </div>
            <div class="locationList">
             <p class="Qr_CodeChange">Qr_Code : ${qr || Qr_CodeChange}</p>
              <p class="RfidChange">Rfid : ${rfid || RfidChange}</p>
              <p class="NestingChange">Nesting : ${Nesting || NestingChange}</p>
              
            </div>
            </div>`
            $(".modalBlock").removeClass("active")  
            let iconBtn = document.querySelectorAll(".icon");
            let locationList = document.querySelectorAll(".locationList");
    
            iconBtn.forEach((itemBtn,index)=>{
            itemBtn.addEventListener("click",()=>{
                itemBtn.classList.toggle("active")
                locationList[index].classList.toggle("active")
               
            })
            })
     }
   
      const editBtn = document.querySelectorAll(".editBtn");
      editBtn.forEach((edit,index)=>{
        edit.addEventListener("click",()=>{
            $(".modalBlockTwo").addClass("active")
            $(".SaveBtn").click(()=>{
                const changingName = $(".changingName").val()
                const changingQrCode = $(".changingQrCode").val();
                const changingRfid = $(".changingRfid").val();
                const changingNesting = $(".changingNesting").val();
                if (!changingName || !changingQrCode || !changingRfid || !changingNesting) {
                    alert("please write all boxes")
                    return false
                 }else{

                    var locationName = document.querySelectorAll(".locationName");
                    var Qr_CodeChange = document.querySelectorAll(".Qr_CodeChange");
                    var RfidChange = document.querySelectorAll(".RfidChange");
                    var NestingChange = document.querySelectorAll(".NestingChange");
                    locationName[index].innerHTML =  changingName;
                    Qr_CodeChange[index].innerHTML = "Qr_Code :" + changingQrCode;
                    RfidChange[index].innerHTML = "Rfid :" +  changingRfid
                    NestingChange[index].innerHTML = "Nesting :" +changingNesting
                    $(".modalBlockTwo").removeClass("active")
                 }
            })
        })
      })
  
      $(".cancelBtnTwo").click(function(){
        $(".modalBlockTwo").removeClass("active")
    })

      const deleteBtn = document.querySelectorAll(".deleteBtn");
      deleteBtn.forEach((itemDel,index)=>{
        itemDel.addEventListener("click",()=>{
            const locationB = document.querySelector(".locationB");
            locationB.remove()
        })
      })
    })

 
$(".settingBtn").click(()=>{
    $(".slider").css({
        "transform": "translateX(-50.2%)",
        "transition":"all 0.5s ease"
    })
})
$(".locationBtn").click(()=>{
    $(".slider").css({
        "transform": "translateX(0)",
    })
})


$(".AddTabble").click(()=>{
  $("table").html(``)
})
})