// YOUR IMPORTS HERE...
import {Component, EventEmitter, NgClass} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';
import { StudentService } from '../services/studentservice';

@Component({
	selector:'student-card',
	inputs:['student'],
	directives:[NgClass],
	pipes:[StudentFormatter],
	template:`
	<div class="dialog light-primary-color text-primary-color"><div [ng-class]="{defaultPrimaryColor:true}"> 
	{{ student.firstname }} {{ student.lastname }}</div>
	<p> Address: {{ student.address }} <br/> Phone: {{ student.phone }} </p></div>
	`,
	styles:[`
	.dialog { border:1px solid black;};
	.header { margin-top:0px;}
	`]
})
export class StudentCard
{
	student:student;
	constructor(studentservice:StudentService, routeParams:RouteParams){
		this.student = studentservice.getStudentById(routeParams.params.id); 
		
	}
}	