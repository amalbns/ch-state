import React, { Component } from 'react'

export default class Personal extends Component {
    constructor(props){
        super(props)
        this.Personal={
            fullName:"Amal Ben Salah",
            bio:" I went to business school , i work now in polish company as a part time job and start studying in GoMycode full stuck pack because I want to have more opportunities if the futur I have a lot of hobbies such as sports , cooking , drawing , outdoors activies I m very outgoing person friendly I love pets and I have good sence of humor" ,
            profession:" Full-stack JavaScript Developer student ",
            imgSrc:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        

        }
        this.state= {count: 0}
        
    }
    componentDidMount() {
        setInterval ( () => {
            this.setState ( prevState => ({
                count: prevState.count +1 
            }))
        },1000)
    }
    componentWillUnmount () {
        clearInterval(this.state)
    }
    
    render() {
    return (
    <div>
        <h2>{this.Personal.fullName}</h2>
        <h2>{this.Personal.bio}</h2>
        <h2>{this.Personal.profession}</h2>
        <div>counter: {this.state.count}</div>
        <img src={this.Personal.imgSrc} alt='pic'/>

    </div>
    )
    }
    }
