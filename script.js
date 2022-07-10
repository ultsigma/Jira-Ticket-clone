let modalCont = document.querySelector(".modal-cont");
let addbtn = document.querySelector(".add-btn");
let text=document.querySelector("textarea");
addFlag=false;

addbtn.addEventListener('click', function(e){
    addFlag = !addFlag;

    if(addFlag){
        modalCont.style.display="flex";
    }
    else
    {
        modalCont.style.display="none";
    }
});

modalCont.addEventListener("keydown", function(e){
    let key = e.key;
    if(key=='Shift'){ createTicket();  modalCont.style.display="none"; text.value = "";           }
    }) 

function createTicket(){
    let ticketCont = document.createElement("div");
    let mainCont = document.querySelector(".main-cont")
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
    
            <div class="ticket-color"></div>
            <div class="ticket-id"># Sample ID</div>
            <div class="task-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum </div>
    
    
    `;
    mainCont.appendChild(ticketCont);
}
