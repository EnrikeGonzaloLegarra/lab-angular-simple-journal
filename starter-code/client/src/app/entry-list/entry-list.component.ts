import { Component, OnInit } from '@angular/core';
import {JournalServiceService} from '../journal-service.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries : Object[];
  constructor(private journalService : JournalServiceService) { }

  ngOnInit() {
    this.getAllEntries();
  }
  getAllEntries(){
    this.journalService.getEntries().subscribe((entries)=>this.entries=entries);
  }
  
}
