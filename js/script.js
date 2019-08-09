var add=document.getElementById("add");
var removeAll=document.getElementById("removeAll");
var list=document.getElementById("list");

removeAll.onclick=function(){
    list.innerHTML="";
};

add.onclick= function(){
    addlist(list);
    document.getElementById("userinput").value="";
    document.getElementById("userinput").focus();
}

function addlist(targetUL){
    var textInput= document.getElementById("userinput").value;
    
    var li=document.createElement("li");
    var textNode=document.createTextNode(textInput+" ");
    var removeButton=document.createElement("Button");

    if(textInput!=null){
        removeButton.className="btn btn-xs btn-danger";
        removeButton.setAttribute("onclick", "removeMe(this)");
        removeButton.innerHTML="X";

        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUL.appendChild(li);
    }
    else{
        alert("Enter todo");
    }
};

function removeMe(item){
    var p=item.parentElement;
    p.parentElement.removeChild(p);
}