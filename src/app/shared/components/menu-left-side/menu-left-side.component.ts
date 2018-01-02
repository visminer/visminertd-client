import { Component, OnInit } from '@angular/core';

import { RepositoryService } from './../../services/repository.service';
import { Repository } from '../../model/Repository';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-left-side',
  templateUrl: './menu-left-side.component.html',
  styleUrls: ['./menu-left-side.component.css']
})
export class MenuLeftSideComponent implements OnInit {

  repositories: Observable<Repository[]>;

  constructor(private repositoryServ: RepositoryService) { }

  ngOnInit() {
    this.repositories = this.repositoryServ.getRepositories();
    this.repositories.subscribe(r => console.log(this.repositories));
  }

}
