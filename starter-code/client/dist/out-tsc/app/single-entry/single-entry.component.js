var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';
import { ActivatedRoute } from '@angular/router';
var SingleEntryComponent = (function () {
    function SingleEntryComponent(journalService, route) {
        this.journalService = journalService;
        this.route = route;
    }
    SingleEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.entryId = params['id']; });
        this.entry = this.getOneEntry();
    };
    SingleEntryComponent.prototype.getOneEntry = function () {
        var _this = this;
        return this.journalService.getEntry(this.entryId).subscribe(function (entry) { return _this.entry = entry; });
    };
    return SingleEntryComponent;
}());
SingleEntryComponent = __decorate([
    Component({
        selector: 'app-single-entry',
        templateUrl: './single-entry.component.html',
        styleUrls: ['./single-entry.component.css']
    }),
    __metadata("design:paramtypes", [JournalServiceService, ActivatedRoute])
], SingleEntryComponent);
export { SingleEntryComponent };
//# sourceMappingURL=../../../../src/app/single-entry/single-entry.component.js.map