import os


# Python3 code here creating class 
class geeks:  
    def __init__(self, typ, name,placehold):  
        self.name = name  
        self.typ = typ 
        self.placehold = placehold
       
   
# creating list        
list = []  
  

btn = input('Button text: ')
  
clsname = input('Class Name: ')

count = input('How many input?')


str = ''' 
                    import React, { Component } from 'react'

export default class ''' + '''{}'''.format(clsname)  +'''extends Component {

    state = {

    }

    render() {
        return (
          <React.Fragment>
              <div className="container center signin-form">
                <form className=" ">
                    <h5 className='grey-text text-darken-3'> Sign In </h5>
      '''

for x in range(int(count)):
  
  list.append( geeks (input('Inpt type: ') ,input('Inpt Name: '),input('Inpt placeholder: ') ) )
for obj in list: 
    str = str+ ''' 
      
                  <div className='input-field'>
                    <label htmlFor='{0}'> Email </label>
                    <input type="{1}" name='{0}' '''.format(obj.name, obj.typ )

    str = str + "onChange={ (e)=> this.setState({"
    str = str + obj.name
    str = str + ''':e.target.value})} />
                    </div>
                    '''

str = str + ''' <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-3'> {} </button>
                    </div>
                </form>
                 </div>

                 </React.Fragment>
                )
             '''.format( btn )
str = str + '''} }'''
              
f = open( clsname+ '.js', 'w')
f.write(str)
f.close()
print( str ) 



