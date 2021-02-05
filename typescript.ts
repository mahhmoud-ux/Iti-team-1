var func=[
    ["0","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["1","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["2","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["3","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["4","prescription1","Dr.Mohamed","4/5/2020","covid"],
    ["5","prescription1","Dr.Mohamed","4/5/2020","covid"],

]
/*-----------btn------------*/

var closebtn:HTMLElement=document.querySelector("#myModal > div > div > fieldset > div > div:nth-child(3) > div.col-md-12.text-center > button")
var View_Profiledash :HTMLElement=document.querySelector("#headingOne") as HTMLElement;
var editprofilebtn :HTMLElement=document.querySelector("#collapseTwo > div > button") as HTMLElement;
var MyDoctorsbtn :HTMLElement=document.querySelector("#collapseThree > div > button")

var View_Profile :HTMLElement=document.querySelector(".viewprofile") as HTMLElement;
var editprofile :HTMLElement=document.querySelector(".editprofile") as HTMLElement;
var mydoctors :HTMLElement =document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.Mydoctors.bg-light") as HTMLElement;
var tbody:HTMLElement=document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.viewprofile > fieldset:nth-child(2) > div > div:nth-child(3) > table > tbody") as HTMLElement;

class patient {
PName :string;
DName :string;
age :number;
phone :string;
}




function dahsboredbuttons (){
    View_Profiledash.onclick=function(){
        View_Profile.style.display="block";
        editprofile.style.display="none";
        mydoctors.style.display="none" ;
        Patient_personal_Data()
     }
      editprofilebtn.onclick=function(){
        editprofile.style.display="block"
        mydoctors.style.display="none"  
        View_Profile.style.display="none" 
     }
    
      MyDoctorsbtn.onclick=function(){
          console.log("lllllll")
        mydoctors.style.display="flex"  
        View_Profile.style.display="none"  
        editprofile.style.display="none"  
      }

      closebtn.onclick  =function(){
        console.log("test")
      //  document.querySelector("#myModal").style.display="none"

      }
}

function appendData()
{
        for(let i=0;i<func.length;i++)
        {
            tbody.innerHTML +=`
            <tr>
            <th scope="row">`+ func[i][0]+`</th>
            <td >`+ func[i][1]+`</td>
            <td>`+ func[i][2]+`</td>
            <td>`+ func[i][3]+`</td>
            <td>`+ func[i][4]+`</td>
            <td>`+ func[i][0]+`</td>
            <td>`+ `<button data-toggle="modal" data-target="#myModal" class="w3-btn w3-blue-grey idbtn"  onclick="test(event)" value=`+func[i][0] + `>Details</button></td>
            </tr>`
             
        }    
}
function test(ee)
{var record =parseInt(ee.target.value)
  console.log(ee.target.value)
var detailsdata1 :HTMLInputElement  = document.querySelector("#Doctor_Name")
var detailsdata2 :HTMLInputElement = document.querySelector("#Department")
var detailsdata3 :HTMLInputElement = document.querySelector("#Date")
var detailsdata4 :HTMLInputElement = document.querySelector("#Disease")
var detailsdata5:HTMLElement  = document.querySelector("#Medicines_List")
var detailsdata6 :HTMLElement = document.querySelector("#Diagnose")

detailsdata1.value=func[0][2]   //doctor name
detailsdata2.value=func[0][1]         //department
detailsdata3.value=func[0][2]         //date
detailsdata4.value=func[0][2]         //disease
var medcinelist =func[0][2].toString().split(",")
for(let i=0;i<medcinelist.length;i++)
{
    detailsdata5.innerHTML+="<b>"+medcinelist[i]+"</b>"+"<br>"         //medinilist

}
var dia=func[0][2].toString().split(",")
for(let i=0;i<medcinelist.length;i++)
{
    detailsdata6.innerHTML+="<b>"+medcinelist[i]+"</b>"+"<br>"         //medinilist

}
}
function Patient_personal_Data()
{
    var PPD1:HTMLInputElement =  document.querySelector("#National_Id")
    var PPD2:HTMLInputElement =  document.querySelector("#Name")
    var PPD3:HTMLInputElement =  document.querySelector("#Birth_Date")
    var PPD4:HTMLInputElement =  document.querySelector("#Address")
    var PPD5:HTMLInputElement =  document.querySelector("#Phone")
    var PPD6:HTMLInputElement =  document.querySelector("#Blood_Type")
    var PPD7:HTMLInputElement =  document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.viewprofile > fieldset:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label > input")
    var PPD8:HTMLInputElement =  document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.viewprofile > fieldset:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label > input")

    PPD1.value ="125"  
    PPD2.value ="125"  
    PPD3.value ="125"  
    PPD4.value ="125"  
    PPD5.value ="125"  
    PPD6.value ="125"  
    PPD8.checked =true 
    //PPD8.value ="125"  
}
var editedPersonalData=new Array()
var updatebtn:HTMLElement=document.querySelector(".donere")
updatebtn
.onclick=function Edit_Patient()
{

    var E_P1:HTMLInputElement = document.querySelector("#National_IDedite").value
    var E_P2:HTMLInputElement = document.querySelector("#Birthe").value
    var E_P3:HTMLInputElement = document.querySelector("#Bloode").value
    var E_P4:HTMLInputElement = document.querySelector("#Namee").value
    var E_P5:HTMLInputElement = document.querySelector("#Phoneee").value
    var E_P6:HTMLInputElement = document.querySelector("#Addressede").value
    var E_P7:HTMLInputElement = document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.editprofile > fieldset > div > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > label > input").value
    var E_P8:HTMLInputElement = document.querySelector("body > div > div > div.col-md-10.bor > div.container-fluid.editprofile > fieldset > div > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > label > input").value

    editedPersonalData[0]=E_P1
    editedPersonalData[1]=E_P2
    editedPersonalData[2]=E_P3
    editedPersonalData[3]=E_P4
    editedPersonalData[4]=E_P5
    editedPersonalData[5]=E_P6
    editedPersonalData[6]=E_P7
    editedPersonalData[7]=E_P8
   
console.log(editedPersonalData)

alert("You have been Updated")
    

}

appendData()

/* ------------invoking functions-------------*/ 
dahsboredbuttons()