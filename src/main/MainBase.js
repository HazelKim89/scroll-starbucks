import React from 'react'
import {Container, Row, Col} from 'react-materialize'
import '../main/MainBase.css'
import coffee from '../images/coffee.png'
import tea from '../images/tea.png'
import dessert from '../images/dessert2.png'
import logo from '../images/logo.png'

class BaseCompos extends React.Component {
  coffeeWidth = 400
  teaWidth = 150
  dessertWidth = 50
  logoWidth = 40
  coffeeStyle ={
    opacity: 1,
    width: 400,
    transform: {translateX: 0}
  }
  render(){
    return(
      <Container>
        <Row>
          <Col s={6}><img src={logo} ref="logo" className="logo" width={this.logoWidth}></img></Col>
          <Col s={6}><img src={dessert} ref="dessert" className="dessert" width={this.dessertWidth}></img></Col>
        </Row>
        <Row>
          <Col s={6}><img src={tea} ref="tea" className="tea" width={this.teaWidth}></img></Col>
          <Col s={6}>
            <img src={coffee} ref="coffee" className="coffee" style={this.coffeeStyle}></img>
            <span ref="coffeeT" className="coffeeT">Coffee</span>  
          </Col>
        </Row>
        <footer className="footer"></footer>
      </Container>
    )
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      let calValue = window.scrollY
      this.coming(calValue)
    })
  }

  coming(scrollY){
    console.log(scrollY)
    // Coffee Item
    this.refs.coffee.style.width = (this.coffeeWidth+(scrollY/10))+'px'
    if(scrollY > 1000){
      this.refs.coffee.style.opacity = 1-((scrollY-1000) / 1000)
      this.refs.coffeeT.style.opacity = 1-((scrollY-1000) / 300)
    } else {
      this.refs.coffee.style.opacity = 1
      this.refs.coffeeT.style.opacity = 1
    }
    // Tea Item
    this.refs.tea.style.width = (this.teaWidth+(scrollY/25))+'px'
    if(scrollY > 3500){
      this.refs.tea.style.opacity = 1 - ((scrollY-3500) / 1000)
    } else {
      this.refs.tea.style.opacity = 1
    }
    // Dessert Item
    const dessert = this.refs.dessert
    dessert.setAttribute('style','width: '+(this.dessertWidth + (scrollY/40))+ 'px;'
      + 'transform: translate3d(-' +(scrollY/70)+'px,'+(scrollY/40)+'px,0px)')
    if(scrollY > 9000){
      this.refs.dessert.style.opacity = 1 - ((scrollY-9000)/1000)
    } else {
      this.refs.dessert.style.opacity = 1
    }
    // Logo Item
    const logo = this.refs.logo
    logo.setAttribute('style','width: '+(this.logoWidth + (scrollY/120))+ 'px;'
      + 'transform: translate3d(' +(scrollY/90)+'px,'+(scrollY/60)+'px,0px)')
  }
}
const components = {BaseCompos}

export default components
// item1.setAttribute('style', 'width: '+(this.coffeeWidth+scrollY)+'px;'
// + 'transform: translateX(-'+ (scrollY/20) +'px)')
// item2.setAttribute('style', 'width: '+(this.teaWidth + (scrollY/15))+'px')
// item3.setAttribute('style', 'width: '+(this.dessertWidth+ (scrollY/50))+'px;'
// + 'transform: translateY(' + (scrollY/20) +'px)')
// item4.setAttribute('style', 'width: '+(this.logoWidth+ (scrollY/80))+'px;'
// + 'transform: translateY(' + (scrollY/60) +'px)')