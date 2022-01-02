'use strict'

class Circut {
  constructor(radius) {
    this.radius = radius
  }

  get radiusCircut() {
    return `${this.radius}`
  }

  set addRadius(el) {
    this.radius = el
  }

  get diameter() {
    return this.radius * 2
  }

  getLongCircle() {
    this.long = this.radius * 2 * 3.14
    alert('Long your circut ' + this.long)
  }

  getArea() {
    this.degree = Math.pow(this.radius, 2)
    this.area = 3.14 * this.degree
    alert('Area your circut ' + this.area)
  }
}

let newRadius = +prompt('Enter the number radius your circut')

let circut = new Circut(newRadius)
alert(circut.radiusCircut)

circut.addRadius = +prompt('Enter the new number radius your circut')
alert(circut.radiusCircut)

alert('Diametr your circut ' + circut.diameter)

circut.getLongCircle()

circut.getArea()
