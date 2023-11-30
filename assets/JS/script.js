let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumero(n) {
  if (Number(n) >= 1) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function addIn() {
  if (isNumero(num.value) && !inLista(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement(`option`)
    item.text = `${num.value} added`
    list.appendChild(item)
    res.innerHTML = ``
  } else {
    window.alert('invalid value/ already added')
  }
}

function finishing() {
  if (values.length == 0) {
    window.alert(`add value please!!`)
  } else {
    let tot = values.length
    let highest = values[0]
    let lower = values[0]
    let add = 0
    let average = 0
    for (let pos in values) {
      add += values[pos]
      if (values[pos] > highest)
        highest = values[pos]
      if (values[pos] < lower)
        lower = values[pos]
    }

    average = add / tot
    res.innerHTML = ``
    res.innerHTML += `<p> We have <strong> ${tot}</strong> bills registered in total </P> `
    res.innerHTML += `<p>Lowest value <strong> £${lower}</strong> </P> `
    res.innerHTML += `<p>Highest value <strong>£${highest}</strong> </p> `
    res.innerHTML += `<p> Total value <strong>£${add}</strong> </P>`
    res.innerHTML += `<p>the average of all bills <strong>£${average}</strong> </P>`
  }
}