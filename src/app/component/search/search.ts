import {Component, inject, input, output,} from '@angular/core';
import {SearchResult, SearchType} from '../../model/models';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, of, switchMap} from 'rxjs';
import {ProfileService} from '../../service/profile-service';

@Component({
  selector: 'app-search',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  profileService = inject(ProfileService);

  searchText = new FormControl();
  searchType = input.required<SearchType>();

  readonly searchResEvt = output<SearchResult>();

  ngOnInit() {
    this.getSearchResult();
  }

  clearSearch() {
    this.searchText.reset('');
  }

  private getSearchResult() {
    this.searchText.valueChanges.pipe(
      debounceTime(500),
      //distinctUntilChanged((previous: string, current: string) => previous !== current),
      switchMap((searchTerm: string) => {
        if (searchTerm === undefined) {
          return of([]);
        }

        switch (this.searchType()) {
          case 'JOBS':
            return of(this.profileService.getJobsByTerm(searchTerm));
          case 'SKILLS':
            return of(this.profileService.getSkillsByTerm(searchTerm));
          default:
            console.error("No search type found.");
            return of([]);
        }
      })
    ).subscribe(result => {
      this.searchResEvt.emit({type: this.searchType(), searchRes: result});
    });
  }




}
