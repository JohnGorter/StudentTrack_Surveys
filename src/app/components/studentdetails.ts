// YOUR IMPORTS HERE...
import {Component, EventEmitter, NgClass} from 'angular2/angular2';
import {student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected', 'deleted'],
	directives:[NgClass],
	pipes:[StudentFormatter],
	template:`
	<div><span (click)="setSelected()" [ng-class]="{defaultPrimaryColor:isselected, student:true}" [inner-html] ="student |  studentFormatter">
	</span><button (click)="onDeleted()">remove</button></div>
	`
})
export class StudentDetails
{
	student:student;
	isselected:boolean;
	selected:EventEmitter = new EventEmitter();
	deleted:EventEmitter = new EventEmitter(); 
	
	setSelected(){
		this.selected.next(this.student); 
	}
	onDeleted(){
		this.deleted.next(this.student); 
	}
}	