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
