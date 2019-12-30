import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ListService {
    searchTerm: string = 'Test'

    getSearchTerm() {
        return this.searchTerm;
    }

    setSearchTerm(newTerm: string) {
        this.searchTerm = newTerm;
    }
}