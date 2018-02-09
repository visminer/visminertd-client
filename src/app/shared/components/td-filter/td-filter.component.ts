import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-td-filter',
  templateUrl: './td-filter.component.html',
  styleUrls: ['./td-filter.component.css']
})
export class TDFilterComponent implements OnInit {

  checked = 'null';
  intentional = 'null';

  indicatorsList = [];
  selectedIndicators = [];
  indicatorsSettings = {};

  @Output('update') updateFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.indicatorsList = [
      // Code Debt
      { 'id': 'GOD_CLASS', itemName: 'God Class', category: 'Code Debt' },
      { 'id': 'COMPLEX_METHOD', itemName: 'Complex Method', category: 'Code Debt' },
      { 'id': 'FEATURE_ENVY', itemName: 'Feature Envy', category: 'Code Debt' },
      { 'id': 'BRAIN_METHOD', itemName: 'Brain Method', category: 'Code Debt' },
      { 'id': 'DATA_CLASS', itemName: 'Data Class', category: 'Code Debt' },
      { 'id': 'DUPLICATED_CODE', itemName: 'Duplicated Code', category: 'Code Debt' },
      { 'id': 'CODE_WITHOUT_STANDARDS', itemName: 'Code Without Standards', category: 'Code Debt' },
      { 'id': 'AUTOMATIC_STATIC_ANALYSIS_ISSUES', itemName: 'Automatic Static Analysis Issues', category: 'Code Debt' },
      { 'id': 'MULTITHREAD_CORRECTNESS', itemName: 'Multithread Correctness', category: 'Code Debt' },
      { 'id': 'SLOW_ALGORITHM', itemName: 'Slow Algorithm', category: 'Code Debt' },

      // Design Debt
      { 'id': 'GOD_CLASS', itemName: 'God Class', category: 'Design Debt' },
      { 'id': 'COMPLEX_METHOD', itemName: 'Complex Method', category: 'Design Debt' },
      { 'id': 'FEATURE_ENVY', itemName: 'Feature Envy', category: 'Design Debt' },
      { 'id': 'BRAIN_METHOD', itemName: 'Brain Method', category: 'Design Debt' },
      { 'id': 'DATA_CLASS', itemName: 'Data Class', category: 'Design Debt' },
      { 'id': 'DUPLICATED_CODE', itemName: 'Duplicated Code', category: 'Design Debt' },
      { 'id': 'AUTOMATIC_STATIC_ANALYSIS_ISSUES', itemName: 'Automatic Static Analysis Issues', category: 'Design Debt' }
    ];

    this.indicatorsSettings = {
      singleSelection: false,
      text: 'Select Fields',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 6,
      groupBy: 'category'
    };
  }

  updateQuery() {
    const request = {
      indicators: this.selectedIndicators.length > 0 ? this.selectedIndicators.map(elem => elem.id) : 'null',
      checked: this.checked,
      intentional: this.intentional
    };
    this.updateFilter.emit(request);
  }

}
