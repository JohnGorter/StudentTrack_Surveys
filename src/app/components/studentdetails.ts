// YOUR IMPORTS HERE...
import {Component, EventEmitter, NgClass} from 'angular2/angular2';
import {student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected'],
	directives:[NgClass],
	pipes:[StudentFormatter],
	template:`
	<div (click)="setSelected()" [ng-class]="{defaultPrimaryColor:isselected, student:true}" [inner-html] ="student |  studentFormatter"></div>
	`
})
export class StudentDetails
{
	student:student;
	isselected:boolean;
	selected:EventEmitter = new EventEmitter();
	 
	setSelected(){
		this.selected.next(this.student); 
	}
}	