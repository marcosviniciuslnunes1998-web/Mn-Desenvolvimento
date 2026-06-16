
let endereco = "https://api.groq.com/openai/v1/chat/completions"
  async function gerarTexto() {

    let textarea = document.querySelector(".texto-1").value


    let resposta = await fetch (endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [{
                    "role": "user",
                    "content": textarea
                },{
                "role": "system",
                    "content": `Você é uma mixologista e Barmen Profissional,
                    - Você vai analisar a mensagem e vai dar dicas de como fazer o drinks ,
                    -Explicando passo a passo de como deve ser Feito ,
                    -Do corte das frutas , ate ser colocado na taça ou copo 
                    -Informe a quantidade dos liquidos em ml,
                    - não coloque asteristicos no texto ,
                    - ordene de paragrafo em parafrago em formato de lista e pesquise bem as receitas para nao ter erros
                    -Nunca invente itens , use as regras da IBA,
                    -Se não tem certeza, diga que não tem certeza
                    -Use sempre as receitas conhecidas internacionalmente
                    -Tudo em portugues do brasil `
          
                
                    
                }
            ],
        })
    })
 
    let dados = await resposta.json()
    let resultado =dados.choices[0].message.content
    let espacoTexto= document.querySelector(".caixa-resposta")
    espacoTexto.textContent=resultado   
    }