import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

 toc = [
    { header: 'Wijmo5 알아보기', path: '/', items: [
        { header: '개요', path: '/referencing' },
        { header: '레퍼런싱', path: '4w5vzopr' },
        { header: '컨트롤 크기 및 스타일', path: 'h79d5u77' },
        { header: 'Pseudo 클래스', path: '9tkuuf5t' },
        { header: '이벤트/Events', path: 'eg3yfe56' },
        { header: 'Enumeration', path: 'euta6t2d'},
        { header: '세계화/지역화', path: 'euta6t2d'},
        { header: 'Wijmo Glyphs', path: 'euta6t2d'},
        { header: 'JavaScript 인텔리센스', path: 'euta6t2d'},
        { header: 'LESS CSS 사용', path: 'euta6t2d'},]
    },
    { header: '그리드(FlexGrid)', path: '/', items: [ 
        { header: 'Introduction', path: '/', items: [
            { header: 'Architecture', path: '2vosx6m7' },
            { header: 'Grpath Panels', path: '152hy1w9' },
            { header: 'Rows and Columns', path: 'bzb13rpv' },
            { header: 'Virtualization', path: 'ujfroryj' },
            { header: 'Cells', path: 'd21zrqgd' },
            { header: 'Binding', path: 'y9Lj6os0' },
            { header: 'Deep Binding', path: '3kLqwp9e' },
            { header: 'Selection', path: 't5n993gq' },
            { header: 'Clipboard', path: '04fsxxbo' }, 
            { header: 'Cell Merging', path: 'od6emykh', items: [
                { header: 'Custom Merging', path: 'p9qv7dmt' },
                { header: 'Restricted Merging', path: '42t9j95q' }]
            }]
        },
        { header: 'Columns', path: 'ayuvd5sm', items: [ 
            { header: 'Collections', path: 'ayuvd5sm' },
            { header: 'Properties', path: 'w9p0em0d' },
            { header: 'DataMaps', path: 'cn3p3wq7', items: [
                { header: 'Dynamic DataMaps', path: '6b68fwkp' }, // << check with latest build!!!
                { header: 'Filtered DataMaps', path: '9aoo7mzm' } ]
            },
            { header: 'Sorting', path: 'pu062h9t' },
            { header: 'Sizing', path: 'Lb786a3f' },
            { header: 'Reordering', path: 'ejtt0jx8' },
            { header: 'Column Layout', path: 'daxp8gm6' },
            { header: 'Freezing', path: 'pctunrd9' },
            { header: 'Sticky Headers', path: '8zLr88n6' },
            { header: 'Filtering', path: '0p5r9csy' },
            { header: 'Grouping', path: 'ah2f5w7f' },
            { header: 'Aggregates', path: '1pg27ffw', items: [
                { header: 'Above the Data', path: 'st9jw19v' },
                { header: 'Below the Data', path: 'Lrrmzsnw' },
                { header: 'Custom Aggregates', path: 'cg2f5kfj' }]
            },
            { header: 'Custom Content', path: '8Lgc37dc' },
            { header: 'Styling', path: 'nLdmgjng' } ]
        },
        { header: 'Rows', path: 'ye46ku04', items: [
            { header: 'Collections', path: 'ye46ku04' },
            { header: 'Properties', path: 'xup60a1t' },
            { header: 'Adding/Removing', path: 'fwn44Lyy' },
            { header: 'Freezing', path: 'pctunrd9' },
            { header: 'Details', path: 'r9up8exz' },
            { header: 'Styling', path: '???', items: [  // <<<
                { header: 'Alternating', path: '???' },
                { header: 'Vertical Alignment', path: '???' },
                { header: 'Hover', path: 'khcym8zp' }] // <<<<<< revise to use row elements
            }]
        },
        { header: 'Data', items: [
            { header: 'CollectionView', tip: 'grpath/collectionView/itemSource', path: '???' },
            { header: 'Hierarchical Data', tip: 'master/detail, childItemsPath, row details', path: '???' },
            { header: 'OData', tip: 'odatacollectionview', path: '???' },
            { header: 'Virtual Data', tip: 'odatacollectionview', path: '???' } ]
        },
        { header: 'Editing', items: [
            { header: 'Excel-style', tip: 'f2/checkbox/lists/clipboard/editRange', path: '???' },
            { header: 'Clipboard', path: '04fsxxbo' },
            { header: 'Read-only, Required Columns', tip: 'isReadOnly/isRequired/cellEditStarting', path: '???' },
            { header: 'DataMaps', tip: 'conditional/filtered dataMaps', path: '???' },
            { header: 'Valpathation', tip: '', path: '???' },
            { header: 'Custom Editing', tip: '', path: '???', items: [
                { header: 'Always Editing', tip: '', path: '???' },
                { header: 'Custom Editors', tip: '', path: '???' },
                { header: 'Popup Editors', tip: '', path: '???' },
                { header: 'Inline Editors', tip: '', path: '???' },
                { header: 'IME', tip: 'imeEnabled', path: '???' } ]
            }]
        },
        { header: 'Custom Cells', items: [
            { header: 'Conditional Formatting', tip: 'formatItem', path: '???' },
            { header: 'Spark Lines', tip: 'formatItem', path: '???' },
            { header: 'Spark Columns', tip: 'formatItem', path: '???' },
            { header: 'Editors', tip: 'customGrpathEdt', path: '???' },
            { header: 'Templates', tip: 'framework-specific', path: '???' } ]
        },
        { header: 'Events', items: [
            { header: 'HitTesting', tip: 'detect what grpath element was clicked', path: '???' },
            { header: 'Drag & Drop', tip: 'handle HTML5 drag & drop events', path: '???' },
            { header: 'Editing', tip: 'startEditing, valpathation, etc', path: '???' },
            { header: 'Selection', tip: 'changing, changed', path: '???' },
            { header: 'Resizing', tip: 'row, column', path: '???' }]
        },
        { header: 'Import/Export', items: [
            { header: 'Excel (XLSX)', tip: 'Excel/XLSX extension', path: '???' },
            { header: 'PDF', tip: 'extension', path: '???' } ]
        }]
    }
];
    
    

  constructor() { }

  ngOnInit() {
  }

}
