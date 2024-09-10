function buscar() {
   let section = document.getElementById("resultados-pesquisa")
console.log(section);
let resultados =""
for (let dado of dados){
resultados += `
<div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
         </h2>
            <p class="descricao-meta">${dado.descricao}
                    Um dos personagens mais icônicos dos videogames, Mario é conhecido por suas aventuras no Reino Cogumelo."
             </p>
        <a href=${dado.link}"https://pt.wikipedia.org/wiki/Mario_(personagem)" target="_blank ">Mais informaçōes
         </a> 
 </div>
`
}
section.innerHTML = resultados
 
}

