// YOUR IMPORTS HERE...
import {Component, EventEmitter, NgClass} from 'angular2/angular2';
import {student} from '../models/student';
// ?code? //


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected'],
	directives:[NgClass],
	// ?code? //
	,
	template:`
	<div (click)="setSelected()" [ng-class]="{defaultPrimaryColor:isselected, student:true}" ?code? </div>
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