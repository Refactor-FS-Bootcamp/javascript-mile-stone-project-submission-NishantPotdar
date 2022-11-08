let collection =[]

function submit(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let seats = document.getElementById("seats")
    let date = document.getElementById("date")

    let obj={}

    obj.name = name.value;
    obj.email = email.value;
    obj.seats = seats.value;
    obj.date = date.value;

    collection.push(obj)
    update()
    console.log(collection)

}

function update(){
    localStorage.setItem("data",JSON.stringify(collection))
}

function cancel(){
    alert("Are you Sure")
}
let sub= document.getElementById('submit');
sub.addEventListener('click',submit)
let can = document.getElementById('cancel');
can.addEventListener('click',cancel)

