import React,{Component} from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import moment from "moment"
import Authentication from "./Authentication"
import TodoService from "../../api/todo/TodoService"

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format("YYYY-MM-DD")
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    validate(values){
        let error = {}
        if(!values.description){
            error = "Enter value for description"
        }else if(values.description.length<5){
            error.description = "Description must at least 5 characters"
        }

        if(!moment(values.targetDate).isValid()){
            error.targetDate= "Enter valid date"
        }
        return error
    }
    onSubmit(values){
        console.log(values.description)
    }
    componentDidMount(){
        let username = Authentication.getLoggedIn()
        let id = this.props.match.params.id
        TodoService.getTodoById(username,id)
        .then(response=>
            this.setState ({
                description: response.data.description,
                targetDate : moment(response.data.targetDate).format("YYYY-MM-DD")
            })
        )
    }
    render(){
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
        <div>
            <h3>Todo Component for ID: {this.props.match.params.id}</h3>
            <div className="container">
            <Formik 
                initialValues={{
                    description,
                    targetDate
                }}
                validateOnChange = {false}
                validateOnBlur = {false}
                onSubmit = {this.onSubmit}
                validate = {this.validate}
                enableReinitialize={true}
            >
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning" />
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate" />
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )
                }
            </Formik>
            </div>
        </div>
        )
    }
}

export default TodoComponent