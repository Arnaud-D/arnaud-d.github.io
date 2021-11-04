function isPrime(n) {
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (n % i < 1) {
      return false
    }
    i++
  }
  return n > 1
}

function nextPrime(npub) {
  var n = npub + 1
  while (!isPrime(n)) {
    n += 1
  }
  return n
}

function getSentencePrimeOrNot(isPrime) {
  if (isPrime) {
    return `et c'est un nombre premier !`
  } else {
    return `ce qui n'est pas un nombre premier…`
  }
}

function getSentenceNextPrime(npub) {
  const next = nextPrime(npub)
  return `Le nombre premier suivant est ${next}.`

}

function query() {
  fetch("https://zestedesavoir.com")
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const fetchedDocument = parser.parseFromString(text, "text/html");
      const sentence = fetchedDocument.querySelector(".write-tutorial-text>p").innerHTML
      const str_npub = sentence.match(/(\d+)/g)[0]
      const npub = Number(str_npub)
      const npubPrime = isPrime(npub)
      const elt_text = document.querySelector("#answer_text")
      const fragment = getSentencePrimeOrNot(npubPrime)
      const sentence1 = `Il y a ${npub} publications sur <a href="https://zestedesavoir.com">Zeste de Savoir</a>, ${fragment}`
      const sentence2 = getSentenceNextPrime(npub)
      elt_text.innerHTML = `<p>${sentence1}</p><p>${sentence2}</p>`
      const elt_side = document.querySelector("#answer_side")
      elt_side.innerHTML = npubPrime ? "🙂" : "🙁"
    })
}

window.addEventListener('load', query)
