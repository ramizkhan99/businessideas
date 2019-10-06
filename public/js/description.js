const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
if(myParam=="ola"){
    document.getElementById('description').innerHTML="this is ola's text"
    document.getElementById('company').innerHTML=myParam

}
if(myParam=="indianoil"){
    document.getElementById('description').innerHTML="this is ind text"
    document.getElementById('company').innerHTML=myParam

}
if(myParam=="dlf"){
    document.getElementById('description').innerHTML="this is dlf text"
    document.getElementById('company').innerHTML=myParam

}
if(myParam=="mahindra"){
    document.getElementById('description').innerHTML="this is mahin text"
    document.getElementById('company').innerHTML=myParam

}
if(myParam=="samsung"){
    document.getElementById('description').innerHTML="this is samsung text"
    document.getElementById('company').innerHTML=myParam

}








const next = ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log('submitted')
    location.href='/question?id='+myParam
}