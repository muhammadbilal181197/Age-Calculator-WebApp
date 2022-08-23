let screenValue=" ";
const ageCalculator=()=>{
    let date=document.getElementById("date_section").value;
    let month=document.getElementById("month_section").value;
    let year=document.getElementById("year_section").value;


    let dob=new Date(`${date} ${month} ${year}`);
    let nowDate=new Date();

    let agedifference=nowDate - dob;
    let day=Math.floor((agedifference)/(1000*60*60*24));
    

    if(date == "" || month == "" || year == ""){
        alert("Input fields are empty! Please Enter Your DOB.")
    }
    else
    {
   
        let screen=document.getElementById("screen");
        screen.value=(`You are ${day} Days old.`);
    }
    
}
