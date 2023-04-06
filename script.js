/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

//________________
let r1 = null;
let r2 = null;
let r3 = null;
//__________________

function changeCheck(scelta, spunta){
    
    scelta.removeChild(scelta.lastElementChild); 
    const img = document.createElement("img"); 
    const srcAttr = document.createAttribute("src");
    if(spunta)
        srcAttr.value = "images/checked.png";
    else
        srcAttr.value = "images/unchecked.png";
    img.setAttributeNode(srcAttr);
    img.classList.add("checkbox");
    scelta.appendChild(img);
    
}

function risultato(d_1, d_2, d_3){
    
    let ris = null;
    if(d_1 === d_2 || d_2 === d_3)
        ris = d_2;
    else
        if(d_1 === d_3)
            ris = d_1;
        else
            ris = d_1;
   
    const articolo= document.querySelector("article");
    const div= document.createElement("div");
    div.classList.add("azione");
    const h1=document.createElement("h1");
    h1.textContent = RESULTS_MAP[ris]['title'];
    const p=document.createElement("p");
    p.textContent = RESULTS_MAP[ris]['contents'];
    const a= document.createElement("a");
    a.textContent="Ricomincia il quiz";
    const id=document.createAttribute("id");
    id.value = "bottone";
    a.setAttributeNode(id);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(a);
    articolo.appendChild(div);
   
    const rs = document.querySelectorAll(".choice-grid div");
    for (const r of rs) {
        r.removeEventListener('click', azione);  
    }
    
    const b = document.querySelector("#bottone");
    b.addEventListener('click', ricarica);
    
}


function azione(event){   
    const scelta = event.currentTarget; 
    const indice = scelta.dataset.questionId;

    switch(indice){
        case "one":
            r1=scelta.dataset.choiceId;
            break;
        case "two":
            r2=scelta.dataset.choiceId;
            break;
        case "three":
            r3=scelta.dataset.choiceId;
            break;        
    }

    const os = document.querySelectorAll('[data-question-id='+indice+']');
    for (const o of os) {
        changeCheck(o, false);
        o.classList.remove("sel");
        o.classList.add("no_sel");
    }
    changeCheck(scelta, true);
    scelta.classList.remove("no_sel");
    scelta.classList.add("sel");
    

    if(r1!=null && r2!=null && r3!=null){
        risultato(r1, r2, r3);
    }
}

function ricarica(event){
    const articolo= document.querySelector("article");
    articolo.removeChild(articolo.lastChild);
    const rs = document.querySelectorAll(".choice-grid div");
    for (const r of rs) {
        r.classList.remove("sel");
        r.classList.remove("no_sel");
        changeCheck(r, false);
        r.addEventListener('click', azione);
    }
    r1 = null;
    r2 = null;
    r3 = null;
}

//___________________________________
const blocchi = document.querySelectorAll(".choice-grid div");
for (const blocco of blocchi) {
    blocco.addEventListener('click', azione);
}
//___________________________________


