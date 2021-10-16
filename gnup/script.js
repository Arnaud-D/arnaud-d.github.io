var words = [
  "Paris",
  "Sorbonne",
  "V",
  "XXIII",
  "MMXII",
  "nouvelle",
  "Jussieu",
  "Orsay",
  "France",
  "Nanterre",
  "Versailles",
  "Montigny-le-Bretonneux",
  "Saclay",
  "Sud",
  "Nord",
  "Est",
  "Ouest",
  "Louvre",
  "Pierre-Marie",
  "Curie",
  "Panthéon",
  "Tahiti",
];

var future_words = [
  "numérique",
  "digitale",
  "connectée",
  "cloud",
  "4.0",
];

Array.prototype.sample_remove = function() {
  var idx = Math.floor(Math.random() * this.length)
  var sample = this[idx]
  this.splice(idx, 1)
  return sample
}

function generate() {
  var future_checked = document.querySelector("#type").value == "future"
  var length = document.querySelector("#length").value
  var name = generate_name([...words], length, future_checked);
  document.querySelector("#name").innerText = name
}

function generate_name(words, length, future) {
  var name = "Université"

  if (future) {
    name += " " + [...future_words].sample_remove()
  }

  for (let i = 0; i < length - 1; i++) {
    var new_word = words.sample_remove()
    name += " " + new_word
  }

  return name
}

window.addEventListener('load', generate)
