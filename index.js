var res = document.getElementById("view")


    
    
    /*setInterval(()=>{
        valores
       }, 10000)*/
   
      




   



function logistica(){
 

 res.innerHTML = `<iframe title="Postos Ale" width="60%" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiYTAzNTY2YTktM2E4Zi00OWU0LWFmMjktNjVjNzIxZWYzMDBjIiwidCI6ImRkNjg1YzRlLTY2NjQtNDllMy05YTA4LTRkYWFmZTU1Zjk1NSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
 
 <button onclick="apagar()" class="fechar">X Fechar</button>`
 
 

}

function enel(){
 

    res.innerHTML = `<iframe title="Enel" width="60%" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiYzM2NmM4MTMtNDdjYy00Yzc5LThlZTYtOWFhZGU1ZGIzZjE1IiwidCI6ImRkNjg1YzRlLTY2NjQtNDllMy05YTA4LTRkYWFmZTU1Zjk1NSJ9&pageName=ReportSection09f8c436fa96045848fe" frameborder="0" allowFullScreen="true"></iframe>
    
    <button onclick="apagar()" class="fechar">X Fechar</button>`
   
}


function cpfl(){
 

    res.innerHTML = `<iframe title="BI - CPFL" width="60%" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiMjc2MTlmNjktNzBlMi00M2I1LWIwNzYtZTAxOGQ3MWI5NGIzIiwidCI6ImRkNjg1YzRlLTY2NjQtNDllMy05YTA4LTRkYWFmZTU1Zjk1NSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    
    <button onclick="apagar()" class="fechar">X Fechar</button>`
   
}


function cpflCien(){
 

    res.innerHTML = `<iframe title="Projeto CPFL" width="60%" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiNmZiODUwZjAtYmUwZi00MTIxLTg0OWQtMjM2NjFlNzkwMmFjIiwidCI6ImRkNjg1YzRlLTY2NjQtNDllMy05YTA4LTRkYWFmZTU1Zjk1NSJ9&pageName=ReportSectionb8cf769062235a0a0d59" frameborder="0" allowFullScreen="true"></iframe>
    
    <button onclick="apagar()" class="fechar">X Fechar</button>`
   
}

function corinthians(){
 

    res.innerHTML = `
    
    <iframe title="Postos Ale" width="60%" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiYTAzNTY2YTktM2E4Zi00OWU0LWFmMjktNjVjNzIxZWYzMDBjIiwidCI6ImRkNjg1YzRlLTY2NjQtNDllMy05YTA4LTRkYWFmZTU1Zjk1NSJ9&pageName=ReportSection0c340ee86303c0958d52" frameborder="0" allowFullScreen="true"></iframe>
    <button onclick="apagar()" class="fechar">X Fechar</button> `
   
}





function apagar(){

    location.reload()
}