import React from 'react';
class ClassPerson extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props=props;
    }
    render()
    {
        return(
            <> 
            <h1>My Name Is {this.props.name} and my age is {this.props.age}</h1>
            </>
        )
    }
}
export default ClassPerson