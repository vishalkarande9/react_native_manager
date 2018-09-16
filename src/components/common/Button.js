import React from 'react';
import {Text, TouchableOpacity} from 'react-native';




// create a new component
const Button = ({ children, onButtonPress }) => { 
    
    const {buttonStyle, textStyle} = styles;
    console.log("abjsdkjaskldklsadknl");
    
  return(
    <TouchableOpacity  style={buttonStyle} onPress={onButtonPress}>
        <Text  style={textStyle}> 
            {children}
        </Text>     
    </TouchableOpacity>
  )    
}; 

const styles={ 
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
  };

//render that component to our device
export { Button };