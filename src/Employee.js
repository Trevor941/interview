import React, {Component} from "react";
import Table from 'react-bootstrap/Table';
import { Button, ButtonToolbar } from "react-bootstrap";
import { ViewEmployee } from "./ViewEmployee";

export class Employee extends Component{
    constructor (props){
        super(props);
        this.state={employees:[], addModalShow: false, employee:{}}
    }

    handleClick(id){
       console.log(id)
      const filteredEmployee = this.state.employees.filter(employee =>{
        return employee.id === id;
      }
      )
      if(filteredEmployee.length === 1){
        this.setState({employee: filteredEmployee[0]})
      }
     
    }
    refreshList(){
        fetch('https://gorest.co.in/public/v2/users')
        .then(response => response.json())
        .then(data => {
            this.setState({employees:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList()
    }
    viewEmployee(id){
        fetch('https://gorest.co.in/public/v2/users/' + id)
        .then(response => response.json())
        .then(data => {
            this.setState({employee:data});
           // console.log(data)
        });
        this.addModalShow =true;
    }
    render(){
        const {employees}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
                <Table className="mt-4 bordered hover" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>
                            Employee Number
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => 
                        <tr key={employee.id}>
                            <td>ECN{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.status}</td>
                            {/* <td><i class="fa fa-eye" aria-hidden="true" onClick={ () => this.handleClick(employee.id)}></i></td> */}
                            <td>
                                <ButtonToolbar>
                                    <Button variant='primary' onClick={()=>[this.setState({addModalShow:true}), this.viewEmployee(employee.id)]}>
                                          View Employee
                                    </Button>
                                    <ViewEmployee employee={this.state.employee} show={this.state.addModalShow} onHide={addModalClose}/>
                                </ButtonToolbar>
                            </td>
                        </tr>
                        )

                        }
                    </tbody>

                </Table>
            </div>
        )
    }
}