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
      // Unknown Debt
      { 'id': 'COMMENT_ANALYSIS_UNKNOWN_DEBT', itemName: 'Comment Analysis', category: 'Unknown Debt'}

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
      { 'id': 'COMMENT_ANALYSIS_CODE_DEBT', itemName: 'Comment Analysis', category: 'Code Debt'},

      // Design Debt
      { 'id': 'GOD_CLASS', itemName: 'God Class', category: 'Design Debt' },
      { 'id': 'COMPLEX_METHOD', itemName: 'Complex Method', category: 'Design Debt' },
      { 'id': 'FEATURE_ENVY', itemName: 'Feature Envy', category: 'Design Debt' },
      { 'id': 'BRAIN_METHOD', itemName: 'Brain Method', category: 'Design Debt' },
      { 'id': 'DATA_CLASS', itemName: 'Data Class', category: 'Design Debt' },
      { 'id': 'DUPLICATED_CODE', itemName: 'Duplicated Code', category: 'Design Debt' },
      { 'id': 'AUTOMATIC_STATIC_ANALYSIS_ISSUES', itemName: 'Automatic Static Analysis Issues', category: 'Design Debt' },
      { 'id': 'COMMENT_ANALYSIS_DESIGN_DEBT', itemName: 'Comment Analysis', category: 'Design Debt'},

      // Architecture Debt
      { 'id': 'COMMENT_ANALYSIS_ARCHITECTURE_DEBT', itemName: 'Comment Analysis', category: 'Architecture Debt'},

      // Build Debt
      { 'id': 'COMMENT_ANALYSIS_BUILD_DEBT', itemName: 'Comment Analysis', category: 'Build Debt'},

      // Defect Debt
      { 'id': 'COMMENT_ANALYSIS_DEFECT_DEBT', itemName: 'Comment Analysis', category: 'Defect Debt'},

      // Documentation Debt
      { 'id': 'COMMENT_ANALYSIS_DOCUMENTATION_DEBT', itemName: 'Comment Analysis', category: 'Documentation Debt'},

      // People Debt
      { 'id': 'COMMENT_ANALYSIS_PEOPLE_DEBT', itemName: 'Comment Analysis', category: 'People Debt'},

      // Requirement Debt
      { 'id': 'COMMENT_ANALYSIS_REQUIREMENT_DEBT', itemName: 'Comment Analysis', category: 'Requirement Debt'},

      // Test Debt
      { 'id': 'COMMENT_ANALYSIS_TEST_DEBT', itemName: 'Comment Analysis', category: 'Test Debt'}
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
