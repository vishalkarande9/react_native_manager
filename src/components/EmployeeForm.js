import React , {Component } from 'react';
import {View,Picker,Text} from 'react-native';
import { CardSection, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';


class EmployeeForm extends Component {

    render(){
        return(
           <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop:'name',value:text})}
                    />    
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop:'phone',value:text})}
                    /> 
                </CardSection>

                <CardSection style={{ flexDirection: 'column'}}>
                    <Text style={StyleSheet.pickerTextStyle}>Shift</Text>
                    <Picker
                      
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop:'shift',value: value})}   
                    >
                        <Picker.Item label="Monaday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>    
                    
                </CardSection>
           </View>     
        );
    }
}

const StyleSheet={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20
    }
}

export default connect(null,{employeeUpdate}) (EmployeeForm);