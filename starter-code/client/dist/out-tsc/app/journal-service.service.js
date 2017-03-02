var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var JournalServiceService = (function () {
    function JournalServiceService(http) {
        this.http = http;
    }
    JournalServiceService.prototype.getEntries = function () {
        return this.http.get('http://localhost:3000/api/journal-entries').map(function (res) { return res.json(); });
    };
    JournalServiceService.prototype.getEntry = function (id) {
        id = String(id);
        console.log('the ID is: ', "http://localhost:3000/api/journal-entries/" + id);
        return this.http.get("http://localhost:3000/api/journal-entries/" + id).map(function (res) { return res.json(); });
    };
    return JournalServiceService;
}());
JournalServiceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], JournalServiceService);
export { JournalServiceService };
//# sourceMappingURL=../../../src/app/journal-service.service.js.map