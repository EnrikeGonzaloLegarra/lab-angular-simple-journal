import { Component, OnInit } from '@angular/core';
import {JournalServiceService} from '../journal-service.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entryId: string;
  entry :Object;
  constructor(private journalService : JournalServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.entryId = params['id']);
    this.entry = this.getOneEntry();
  }
  getOneEntry(){
    return this.journalService.getEntry(this.entryId).subscribe((entry)=>this.entry=entry);
  }
}
