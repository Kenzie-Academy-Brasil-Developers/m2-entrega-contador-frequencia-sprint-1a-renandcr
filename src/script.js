const button = document.getElementById("countButton")
button.addEventListener("click", function(){
    const divResultParent = document.querySelector(".div-result-parent")
    divResultParent.style.border = "solid black 1px"
    let typedText = document.getElementById("textInput").value
    typedText = typedText.toLowerCase()
    typedText = typedText.replace(/[^a-z'\s]+/g, "")
    
    const letterCounts = {}
    for(let i = 0; i < typedText.length; i++){
        let currentLetter = typedText[i]

        if(letterCounts[currentLetter] === undefined){
            letterCounts[currentLetter] = 1
        } else{
            letterCounts[currentLetter]++
        }
    }

    for(let letter in letterCounts){
        const letters = document.getElementById("lettersDiv")
        const pUm = document.querySelector(".p-um")

        const span = document.createElement("span")
        pUm.appendChild(span)
        const textContent = `"${letter}": ${letterCounts[letter]}, `
        span.innerText = textContent
    }
    
    words = typedText.split(/\s/)

    const wordsCounts = {}
    for(let i = 0; i < words.length; i++){
        let currentWord = words[i]

        if(wordsCounts[currentWord] === undefined){
            wordsCounts[currentWord] = 1
        } else{
            wordsCounts[currentWord]++
        }
    }
    
    for(let word in wordsCounts){
        const divWords = document.getElementById("wordsDiv")
        const pDois = document.querySelector(".p-dois")
        const span2 = document.createElement("span")
        pDois.appendChild(span2)
        const wordContent = `"${word}": ${wordsCounts[word]} `
        span2.innerText = wordContent
    }
    

})







