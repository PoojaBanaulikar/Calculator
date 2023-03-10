import React, {Component} from 'react';
import {

  StyleSheet,
  Text,
  View,
 Button,
 TouchableOpacity,
} from 'react-native';


export default class App extends Component{
  constructor(){
   super()
    this.state = {
      resultText:"",
      calculationText:""
    }
    this.operations = ['D','+','-','*','/']
 
  }

    calculateResult(){
      const text =this.state.resultText
      console.log(text,eval(text))
      this.setState({
        calculationText:eval(text)
      })
      //BODMAS  brackets->of -> division ->mul->add->sub
      
    }


    validate(){
      const text = this.state.resultText
      switch(text.slice(-1)){
          case '+':
          case'-':
          case'*':
          case'/':
          return false
      }
      return true
    }

    buttonPressed(text){
      // console.log(text)
      if(text == '='){
        return this.validate() && this.calculateResult()
      }
      this.setState({
        resultText: this.state.resultText+text
      })
    }

    operate(operation){
      switch(operation){
        case 'D':
          console.log(this.state.resultText)
          let text =this.state.resultText.split('')
          text.pop()
          this.setState({
            resultText: text.join('')
          })
          break
        case'+':
        case'-':
        case'*':
        case'/':

            const lastChar =this.state.resultText.split('').pop()
            if(this.operations.indexOf(lastChar) >0) return


        //this is for the users so that they dont press + - * operators first 
            if(this.state.text=="") return
            this.setState({
              resultText: this.state.resultText + operation
            })
      }
    }

    render(){
      let rows =[]
      let nums=[[1,2,3], [4,5,6],[7,8,9],['.',0,'=']]
      for(let i=0; i<4; i++){
        let row=[]
          for(let j=0; j<3; j++){
              row.push(
              <TouchableOpacity key={nums[i][j]} onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
                <Text style={styles.btntext}>{nums[i][j]}</Text>
                </TouchableOpacity> 
                )
          }  
           rows.push(<View  key={i}  style={styles.row}>{row}</View>)
        }

        this.operations = ['D','+','-','*','/']
        let ops=[]
        for(let i=0; i<5; i++){
          ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={()=>this.operate(this.operations[i])}>
            <Text style={[styles.btntext, styles.operator]}>{this.operations[i]}</Text>
            </TouchableOpacity> )
        }


      return (
        <View style={styles.container}>
        <Text style={[styles.heading]}>CALCULATOR</Text>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
             {rows}
          </View>    
        <View style={styles.operations}>
          {ops}
        </View>
        </View>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    container:{
      flex:1
    },
    heading:{
      textAlign:'center'
    },
    calculationText:{ 
      fontSize:50,
      fontWeight:'600',
      color:'white'
    },
    resultText:{
      fontSize:35,
      color:'#a4a4a4'
    },
    btntext:{
      fontSize:40,
      color:'black'
    },
    operator:{
      color:'black',
      fontSize:45,
      fontWeight:'600',
    },
    btn:{
      flex:1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent:'center',
 
    },
    row:{
      flexDirection: 'row',
      flex:1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    result:{
      flex:2,
      backgroundColor: '#f2efef',
      justifyContent:'center',
      alignItems: 'flex-end'
    },
    calculation:{
      flex:1,
      backgroundColor:'#808080',
      justifyContent:'center',
      alignItems: 'flex-end'
    },
    buttons:{
      flex:7,
      flexDirection: 'row'
    },
    numbers:{
      flex:3,
      backgroundColor:'white'
    },
    operations:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch',
      backgroundColor:'#ffa500'
    }
})

