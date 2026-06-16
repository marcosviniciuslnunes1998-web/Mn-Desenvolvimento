let endereco = "https://api.groq.com/openai/v1/chat/completions"
 async function gerarCodigo()
 {let textarea =document.querySelector(".texto-1").value

 let resposta = await fetch(endereco, {
  method : "POST",
  headers : {"Content-Type": "application/json",
            "Authorization": "Bearer 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"
          },
          body : JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages" :[{
              "role": "user",
              "content": textarea
            },{ "role": "system",
               "content": "Você é um barmen e mixologista e vai explicar , sobre a historia do drink , a nacionalidade , quem criou , onde é mais vendido ,informaçoes gerais" 
            }

          ]

          })

          

        

 }

 )

 let dados = await resposta.json()
    let resultado =dados.choices[0].message.content
    let espacoTexto= document.querySelector(".caixa-4")
    espacoTexto.textContent=resultado   

 }
