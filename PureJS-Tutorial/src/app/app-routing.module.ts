import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from './wijmo5-Info/overview/overview.component';
import { ReferencingComponent } from './wijmo5-Info/referencing/referencing.component';
import { WijmoControlsComponent } from './wijmo5-Info/wijmo-controls/wijmo-controls.component';
import { Ng1DirectiveComponent } from './wijmo5-Info/ng1-directive/ng1-directive.component';
import { SizingStyleComponent } from './wijmo5-Info/sizing-style/sizing-style.component';
import { PsesudoComponent } from './wijmo5-Info/psesudo/psesudo.component';
import { EventsComponent } from './wijmo5-Info/events/events.component';
import { EnumerationsComponent } from './wijmo5-Info/enumerations/enumerations.component';
import { GlobalizationComponent } from './wijmo5-Info/globalization/globalization.component';
import { GlyphsComponent } from './wijmo5-Info/glyphs/glyphs.component';
import { IntellisenseComponent } from './wijmo5-Info/intellisense/intellisense.component';
import { LesscssComponent } from './wijmo5-Info/lesscss/lesscss.component';


//1. Concept
import { ArchitectureComponent } from './flexgrid/introduction/architecture/architecture.component';
import { GridPanelsComponent } from './flexgrid/introduction/grid-panels/grid-panels.component';
import { RowsColsComponent } from './flexgrid/introduction/rows-cols/rows-cols.component';
import { FgSizingScrollComponent } from './flexgrid/introduction/fg-sizing-scroll/fg-sizing-scroll.component';
import { FgRowAutoSizingComponent } from './flexgrid/introduction/fg-row-auto-sizing/fg-row-auto-sizing.component';
import { FgNoScrollbarComponent } from './flexgrid/introduction/fg-no-scrollbar/fg-no-scrollbar.component';
import { VisualizationComponent } from './flexgrid/introduction/visualization/visualization.component';
import { FgScrollingViewrangeComponent } from './flexgrid/introduction/fg-scrolling-viewrange/fg-scrolling-viewrange.component';
import { FgFastScrollerComponent } from './flexgrid/introduction/fg-fast-scroller/fg-fast-scroller.component';
import { CellComponent } from './flexgrid/introduction/cell/cell.component';
import { BidingComponent } from './flexgrid/introduction/biding/biding.component';
import { DeepBidingComponent } from './flexgrid/introduction/deep-biding/deep-biding.component';
import { SelectionComponent } from './flexgrid/introduction/selection/selection.component';
import { ClipboardComponent } from './flexgrid/introduction/clipboard/clipboard.component';
import { CellMergeComponent } from './flexgrid/introduction/cell-merge/cell-merge.component';
import { FgServerSideFilterComponent } from './flexgrid/introduction/fg-server-side-filter/fg-server-side-filter.component';
import { FgFilterOptimizationComponent } from './flexgrid/introduction/fg-filter-optimization/fg-filter-optimization.component';
import { FgPagingComponent } from './flexgrid/introduction/fg-paging/fg-paging.component';
import { FgMultiRangeSelComponent } from './flexgrid/introduction/fg-multi-range-sel/fg-multi-range-sel.component';

//2. Column
import { CollectionsComponent } from './flexgrid/columns/collections/collections.component';
import { PropertiesComponent } from './flexgrid/columns/properties/properties.component';
import { ColumnMoveComponent } from './flexgrid/columns/column-move/column-move.component';
import { ReOrderingComponent } from './flexgrid/columns/re-ordering/re-ordering.component';
import { DataMapComponent } from './flexgrid/columns/data-map/data-map.component';
import { DyanmicDatamapComponent } from './flexgrid/columns/dyanmic-datamap/dyanmic-datamap.component';
import { SortingComponent } from './flexgrid/columns/sorting/sorting.component';
import { SizingComponent } from './flexgrid/columns/sizing/sizing.component';
import { AutoSizingComponent } from './flexgrid/columns/auto-sizing/auto-sizing.component';
import { LayoutComponent } from './flexgrid/columns/layout/layout.component';
import { FreezingComponent } from './flexgrid/columns/freezing/freezing.component';
import { StickyHeaderComponent } from './flexgrid/columns/sticky-header/sticky-header.component';
import { FilteringComponent } from './flexgrid/columns/filtering/filtering.component';
import { GroupingComponent } from './flexgrid/columns/grouping/grouping.component';
import { AggregatesComponent } from './flexgrid/columns/aggregates/aggregates.component';
import { AggregatesUpperComponent } from './flexgrid/columns/aggregates-upper/aggregates-upper.component';
import { AggregatesBelowComponent } from './flexgrid/columns/aggregates-below/aggregates-below.component';
import { AggregatesCustomComponent } from './flexgrid/columns/aggregates-custom/aggregates-custom.component';
import { CustomCellsComponent } from './flexgrid/columns/custom-cells/custom-cells.component';
import { ColumnStylingComponent } from './flexgrid/columns/column-styling/column-styling.component';
import { CellFormattingComponent } from './flexgrid/columns/cell-formatting/cell-formatting.component';
import { SearchTextComponent } from './flexgrid/columns/search-text/search-text.component';

//3. Rows
import { RowCollectionsComponent } from './flexgrid/rows/collections/collections.component';
import { AddDeleteComponent } from './flexgrid/rows/add-delete/add-delete.component';
import { RowMoveComponent } from './flexgrid/rows/row-move/row-move.component';
import { DetailRowComponent } from './flexgrid/rows/detail-row/detail-row.component';
import { RowPropertiesComponent } from './flexgrid/rows/row-properties/row-properties.component';
import { RowStylingComponent } from './flexgrid/rows/row-styling/row-styling.component';
import { RowHeightComponent } from './flexgrid/rows/row-height/row-height.component';
import { RowVerticalAlignmentComponent } from './flexgrid/rows/row-vertical-alignment/row-vertical-alignment.component';
import { RowHoverComponent } from './flexgrid/rows/row-hover/row-hover.component';

//4. Header
import { HeaderMergeComponent } from './flexgrid/header/header-merge/header-merge.component';
import { FilterPanelComponent } from './flexgrid/header/filter-panel/filter-panel.component';
import { FgHdResizeComponent } from './flexgrid/header/fg-hd-resize/fg-hd-resize.component';

//5. Footer
import { FooterAreaComponent } from './flexgrid/footer/footer-area/footer-area.component';

//6. custom cells
import { ConditionalStylingComponent } from './flexgrid/custom-cells/conditional-styling/conditional-styling.component';
import { CustomCellFactoryComponent } from './flexgrid/custom-cells/custom-cell-factory/custom-cell-factory.component';
import { DynamicUpdatesComponent } from './flexgrid/custom-cells/dynamic-updates/dynamic-updates.component';
import { SparklineComponent } from './flexgrid/custom-cells/sparkline/sparkline.component';
import { CustomEditorsComponent } from './flexgrid/custom-cells/custom-editors/custom-editors.component';
import { FgCellTemplateComponent } from './flexgrid/custom-cells/fg-cell-template/fg-cell-template.component';

//7. data binding
import { DataBindingComponent } from './flexgrid/data-binding/data-binding/data-binding.component';
import { CollectionViewComponent } from './flexgrid/data-binding/collection-view/collection-view.component';
import { JsonDataComponent } from './flexgrid/data-binding/json-data/json-data.component';
import { MaterDetailComponent } from './flexgrid/data-binding/mater-detail/mater-detail.component';
import { TreeGridComponent } from './flexgrid/data-binding/tree-grid/tree-grid.component';
import { EditableTreeGridComponent } from './flexgrid/data-binding/editable-tree-grid/editable-tree-grid.component';
import { UnboundTreeGridComponent } from './flexgrid/data-binding/unbound-tree-grid/unbound-tree-grid.component';
import { OdataComponent } from './flexgrid/data-binding/odata/odata.component';
import { VirtualDataComponent } from './flexgrid/data-binding/virtual-data/virtual-data.component';

//8. Editing
import { ReadonlyRequiredComponent } from './flexgrid/editing/readonly-required/readonly-required.component';
import { ValidationComponent } from './flexgrid/editing/validation/validation.component';
import { CollectionviewValidationComponent } from './flexgrid/editing/collectionview-validation/collectionview-validation.component';
import { EditingEventComponent } from './flexgrid/editing/editing-event/editing-event.component';
import { AlwaysEditingComponent } from './flexgrid/editing/always-editing/always-editing.component';
import { InlineEditorComponent } from './flexgrid/editing/inline-editor/inline-editor.component';
import { PopupEditorComponent } from './flexgrid/editing/popup-editor/popup-editor.component';
import { ImeComponent } from './flexgrid/editing/ime/ime.component';

//9. Events
import { EventInfoComponent } from './flexgrid/events/event-info/event-info.component';
import { EventMouseComponent } from './flexgrid/events/event-mouse/event-mouse.component';
import { EventSelectionComponent } from './flexgrid/events/event-selection/event-selection.component';
import { EventResizeComponent } from './flexgrid/events/event-resize/event-resize.component';
import { EventReorderingComponent } from './flexgrid/events/event-reordering/event-reordering.component';

//10. import-export
import { ExcelIoComponent } from './flexgrid/import-export/excel-io/excel-io.component';
import { PdfIoComponent } from './flexgrid/import-export/pdf-io/pdf-io.component';

//11. CollectionViewComponent
import { CvGettingStartComponent } from './collectionview/cv-getting-start/cv-getting-start.component';
import { CvRecordManagementComponent } from './collectionview/cv-record-management/cv-record-management.component';
import { CvSortingComponent } from './collectionview/cv-sorting/cv-sorting.component';
import { CvFilteringComponent } from './collectionview/cv-filtering/cv-filtering.component';
import { CvGroupingComponent } from './collectionview/cv-grouping/cv-grouping.component';
import { CvEditingComponent } from './collectionview/cv-editing/cv-editing.component';
import { CvPagingComponent } from './collectionview/cv-paging/cv-paging.component';
import { CvTrackingComponent } from './collectionview/cv-tracking/cv-tracking.component';
import { CvPerformanceComponent } from './collectionview/cv-performance/cv-performance.component';
import { CvValidationComponent } from './collectionview/cv-validation/cv-validation.component';
import { CvDataProviderComponent } from './collectionview/cv-data-provider/cv-data-provider.component';

//12. Other service
import { SvIntroComponent } from './other-service/sv-intro/sv-intro.component';
import { SvToolTipComponent } from './other-service/sv-tool-tip/sv-tool-tip.component';
import { SvPrintDocComponent } from './other-service/sv-print-doc/sv-print-doc.component';
import { SvColorComponent } from './other-service/sv-color/sv-color.component';
import { SvHttpRequestComponent } from './other-service/sv-http-request/sv-http-request.component';
import { SvAnimateComponent } from './other-service/sv-animate/sv-animate.component';
import { SvShowPopupComponent } from './other-service/sv-show-popup/sv-show-popup.component';
import { SvCustomGlyphsComponent } from './other-service/sv-custom-glyphs/sv-custom-glyphs.component';
import { SvFormatComponent } from './other-service/sv-format/sv-format.component';

//2. FlexChart
//2-1. Intro
import { ChartIntoComponent } from './flexchart/chart-into/chart-into.component';
import { ChartTypeComponent } from './flexchart/chart-type/chart-type.component';
import { ChartFunnelComponent } from './flexchart/chart-funnel/chart-funnel.component';
import { ChartMixedComponent } from './flexchart/chart-mixed/chart-mixed.component';
import { ChartLegendTitleComponent } from './flexchart/chart-legend-title/chart-legend-title.component';
import { ChartTooltipComponent } from './flexchart/chart-tooltip/chart-tooltip.component';

const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'referencing', component: ReferencingComponent },  
    { path: 'wijmo-contorls', component: WijmoControlsComponent },      
    { path: 'ng1-directive', component: Ng1DirectiveComponent },
    { path: 'sizing-style', component: SizingStyleComponent },
    { path: 'psesudo', component: PsesudoComponent },    
    { path: 'events', component: EventsComponent },    
    { path: 'enumerations', component: EnumerationsComponent },    
    { path: 'globalization', component: GlobalizationComponent },    
    { path: 'glyphs', component: GlyphsComponent },
    { path: 'intellisense', component: IntellisenseComponent },    
    { path: 'lesscss', component: LesscssComponent },    
    
    { path: 'fg-architecture', component: ArchitectureComponent},
    { path: 'fg-grid-panels', component: GridPanelsComponent},    
    { path: 'fg-rows-cols', component: RowsColsComponent},    
    { path: 'fg-row-auto-sizing', component: FgRowAutoSizingComponent},      
    { path: 'fg-sizing-scroll', component: FgSizingScrollComponent},        
    { path: 'fg-no-scrollbar', component: FgNoScrollbarComponent},            
    { path: 'fg-visualization', component: VisualizationComponent},            
    { path: 'fg-scrolling-viewrange', component: FgScrollingViewrangeComponent},                
    { path: 'fg-fast-scroller', component: FgFastScrollerComponent},                    
    { path: 'fg-cell', component: CellComponent},    
    { path: 'fg-binding', component: BidingComponent},        
    { path: 'fg-deep-binding', component: DeepBidingComponent},            
    { path: 'fg-selection', component: SelectionComponent },
    { path: 'fg-clipboard', component: ClipboardComponent },    
    { path: 'fg-cell-merge', component: CellMergeComponent },  
    { path: 'fg-server-side-filter', component: FgServerSideFilterComponent      },      
    { path: 'fg-filter-optimization', component: FgFilterOptimizationComponent      },   
    { path: 'fg-paging', component: FgPagingComponent         },      
    { path: 'fg-multi-range-sel', component: FgMultiRangeSelComponent         },  
    

    { path: 'fg-col-collections', component: CollectionsComponent },        
    { path: 'fg-col-properties', component: PropertiesComponent },            
    { path: 'fg-col-move', component: ColumnMoveComponent },    
    { path: 'fg-col-move-control', component: ReOrderingComponent },        
    { path: 'fg-col-data-map', component: DataMapComponent },   
    { path: 'fg-col-dynamic-datamap', component: DyanmicDatamapComponent },       
    { path: 'fg-sorting', component: SortingComponent },
    { path: 'fg-sizing', component: SizingComponent },
    { path: 'fg-col-auto-sizing', component: AutoSizingComponent },    
    { path: 'fg-layout', component: LayoutComponent },        
    { path: 'fg-freezing', component: FreezingComponent },
    { path: 'fg-filtering', component: FilteringComponent },
    { path: 'fg-col-sticky-header', component: StickyHeaderComponent },    
    { path: 'fg-grouping', component: GroupingComponent },
    { path: 'fg-col-aggregations', component: AggregatesComponent },
    { path: 'fg-col-aggregations-upper', component: AggregatesUpperComponent },
    { path: 'fg-col-aggregations-below', component: AggregatesBelowComponent },   
    { path: 'fg-col-aggregations-custom', component: AggregatesCustomComponent  },   
    { path: 'fg-col-custom-cell', component: CustomCellsComponent  },   
    { path: 'fg-col-styling', component: ColumnStylingComponent  }, 
    { path: 'fg-col-cell-format', component: CellFormattingComponent    },    
    { path: 'fg-col-search-text', component: SearchTextComponent    },       


    { path: 'fg-rw-collections', component: RowCollectionsComponent },        
    { path: 'fg-rw-properties', component: RowPropertiesComponent },            
    { path: 'fg-rw-add-delete', component: AddDeleteComponent },        
    { path: 'fg-rw-move', component: RowMoveComponent },
    { path: 'fg-rw-deailRow', component: DetailRowComponent },
    { path: 'fg-rw-styling', component: RowStylingComponent },
    { path: 'fg-rw-height', component: RowHeightComponent },    
    { path: 'fg-rw-valignment', component: RowVerticalAlignmentComponent },    
    { path: 'fg-rw-hover', component: RowHoverComponent },    
   
   
    { path: 'fg-hd-merge', component: HeaderMergeComponent },
    { path: 'fg-hd-filter-panel', component: FilterPanelComponent },       
    { path: 'fg-hd-resize', component: FgHdResizeComponent },   

    { path: 'fg-ft-area', component: FooterAreaComponent },

    { path: 'fg-cs-conditional-styling', component: ConditionalStylingComponent },
    { path: 'fg-cs-cell-factory', component: CustomCellFactoryComponent },      
    { path: 'fg-cs-dynamic-updates', component: DynamicUpdatesComponent },
    { path: 'fg-cs-sparkline', component: SparklineComponent },
    { path: 'fg-cs-editors', component: CustomEditorsComponent },  
    { path: 'fg-cell-template', component: FgCellTemplateComponent },      
    

    { path: 'fg-db-binding', component: DataBindingComponent },  
    { path: 'fg-db-collection-view', component: CollectionViewComponent },  
    { path: 'fg-db-json-data', component: JsonDataComponent },  
    { path: 'fg-db-mater-detail', component: MaterDetailComponent },  
    { path: 'fg-db-tree-grid', component: TreeGridComponent },      
    { path: 'fg-db-editable-tree-grid', component: EditableTreeGridComponent },       
    { path: 'fg-db-unbound-tree-grid', component: UnboundTreeGridComponent },   
    { path: 'fg-db-odata', component: OdataComponent },   
    { path: 'fg-db-virtual-data', component: VirtualDataComponent },       
    
    { path: 'fg-editing-readonly-required', component: ReadonlyRequiredComponent },       
    { path: 'fg-col-data-map', component: DataMapComponent },       
    { path: 'fg-editing-validation', component: ValidationComponent },      
    { path: 'fg-editing-cv-validation', component: CollectionviewValidationComponent  },      
    { path: 'fg-editing-event', component: EditingEventComponent  },              
    { path: 'fg-always-editing-event', component: AlwaysEditingComponent  },
    { path: 'fg-editing-inline', component: InlineEditorComponent},
    { path: 'fg-editing-popup', component: PopupEditorComponent},    
    { path: 'fg-editing-ime', component: ImeComponent},    

    { path: 'fg-event-info', component: EventInfoComponent},    
    { path: 'fg-event-mouse', component: EventMouseComponent},   
    { path: 'fg-event-selection', component: EventSelectionComponent},       
    { path: 'fg-event-resize', component: EventResizeComponent},           
    { path: 'fg-event-reordering', component: EventReorderingComponent},    

    { path: 'fg-io-excel', component: ExcelIoComponent },
    { path: 'fg-io-pdf', component: PdfIoComponent },


    { path: 'cv-getting-start', component: CvGettingStartComponent },    
    { path: 'cv-record-management', component: CvRecordManagementComponent },    
    { path: 'cv-sorting', component: CvSortingComponent },    
    { path: 'cv-filtering', component: CvFilteringComponent },    
    { path: 'cv-grouping', component: CvGroupingComponent },    
    { path: 'cv-editing', component: CvEditingComponent },   
    { path: 'cv-paging', component: CvPagingComponent },       
    { path: 'cv-tracking', component: CvTrackingComponent },     
    { path: 'cv-validation', component: CvValidationComponent }, 
    { path: 'cv-performance', component: CvPerformanceComponent },     
    { path: 'cv-date-provider', component: CvDataProviderComponent },         

    { path: 'sv-intro', component: SvIntroComponent },          
    { path: 'sv-tool-tip', component: SvToolTipComponent  },                              
    { path: 'sv-print-doc', component: SvPrintDocComponent  },              
    { path: 'sv-color', component: SvColorComponent  },           
    { path: 'sv-http-request', component: SvHttpRequestComponent },           
    { path: 'sv-animate', component: SvAnimateComponent },    
    { path: 'sv-show-popup', component: SvShowPopupComponent },    
    { path: 'sv-custom-glyphs', component: SvCustomGlyphsComponent },    
    { path: 'sv-format', component: SvFormatComponent },    
    
    { path: 'chart-intro', component: ChartIntoComponent },    
    { path: 'chart-type', component: ChartTypeComponent },        
    { path: 'chart-funnel', component: ChartFunnelComponent },        
    { path: 'chart-mixed', component: ChartMixedComponent },        
    { path: 'chart-legend-title', component: ChartLegendTitleComponent },     
    { path: 'chart-tooltip', component: ChartTooltipComponent        },         
        
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}



