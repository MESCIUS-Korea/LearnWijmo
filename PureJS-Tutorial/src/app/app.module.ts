import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferencingComponent } from './wijmo5-Info/referencing/referencing.component';
import { OverviewComponent } from './wijmo5-Info/overview/overview.component';
import { Ng1DirectiveComponent } from './wijmo5-Info/ng1-directive/ng1-directive.component';
import { SizingStyleComponent } from './wijmo5-Info/sizing-style/sizing-style.component';
import { PsesudoComponent } from './wijmo5-Info/psesudo/psesudo.component';
import { EventsComponent } from './wijmo5-Info/events/events.component';
import { EnumerationsComponent } from './wijmo5-Info/enumerations/enumerations.component';
import { GlobalizationComponent } from './wijmo5-Info/globalization/globalization.component';
import { GlyphsComponent } from './wijmo5-Info/glyphs/glyphs.component';
import { IntellisenseComponent } from './wijmo5-Info/intellisense/intellisense.component';
import { LesscssComponent } from './wijmo5-Info/lesscss/lesscss.component';
import { SelectionComponent } from './flexgrid/introduction/selection/selection.component';
import { ClipboardComponent } from './flexgrid/introduction/clipboard/clipboard.component';
import { ColumnMoveComponent } from './flexgrid/columns/column-move/column-move.component';
import { SortingComponent } from './flexgrid/columns/sorting/sorting.component';
import { SizingComponent } from './flexgrid/columns/sizing/sizing.component';
import { LayoutComponent } from './flexgrid/columns/layout/layout.component';
import { FreezingComponent } from './flexgrid/columns/freezing/freezing.component';
import { FilteringComponent } from './flexgrid/columns/filtering/filtering.component';
import { GroupingComponent } from './flexgrid/columns/grouping/grouping.component';
import { AddDeleteComponent } from './flexgrid/rows/add-delete/add-delete.component';
import { RowMoveComponent } from './flexgrid/rows/row-move/row-move.component';
import { DetailRowComponent } from './flexgrid/rows/detail-row/detail-row.component';
import { HeaderMergeComponent } from './flexgrid/header/header-merge/header-merge.component';
import { FilterPanelComponent } from './flexgrid/header/filter-panel/filter-panel.component';
import { FgHdResizeComponent } from './flexgrid/header/fg-hd-resize/fg-hd-resize.component';
import { CellMergeComponent } from './flexgrid/introduction/cell-merge/cell-merge.component';
import { ArchitectureComponent } from './flexgrid/introduction/architecture/architecture.component';
import { GridPanelsComponent } from './flexgrid/introduction/grid-panels/grid-panels.component';
import { RowsColsComponent } from './flexgrid/introduction/rows-cols/rows-cols.component';
import { VisualizationComponent } from './flexgrid/introduction/visualization/visualization.component';
import { CellComponent } from './flexgrid/introduction/cell/cell.component';
import { BidingComponent } from './flexgrid/introduction/biding/biding.component';
import { DeepBidingComponent } from './flexgrid/introduction/deep-biding/deep-biding.component';
import { CollectionsComponent } from './flexgrid/columns/collections/collections.component';
import { PropertiesComponent } from './flexgrid/columns/properties/properties.component';
import { DataMapComponent } from './flexgrid/columns/data-map/data-map.component';
import { DyanmicDatamapComponent } from './flexgrid/columns/dyanmic-datamap/dyanmic-datamap.component';
import { AutoSizingComponent } from './flexgrid/columns/auto-sizing/auto-sizing.component';
import { StickyHeaderComponent } from './flexgrid/columns/sticky-header/sticky-header.component';
import { ReOrderingComponent } from './flexgrid/columns/re-ordering/re-ordering.component';
import { AggregatesComponent } from './flexgrid/columns/aggregates/aggregates.component';
import { AggregatesUpperComponent } from './flexgrid/columns/aggregates-upper/aggregates-upper.component';
import { AggregatesBelowComponent } from './flexgrid/columns/aggregates-below/aggregates-below.component';
import { AggregatesCustomComponent } from './flexgrid/columns/aggregates-custom/aggregates-custom.component';
import { CustomCellsComponent } from './flexgrid/columns/custom-cells/custom-cells.component';
import { ColumnStylingComponent } from './flexgrid/columns/column-styling/column-styling.component';
import { CellFormattingComponent } from './flexgrid/columns/cell-formatting/cell-formatting.component';
import { RowCollectionsComponent } from './flexgrid/rows/collections/collections.component';
import { RowPropertiesComponent } from './flexgrid/rows/row-properties/row-properties.component';
import { RowStylingComponent } from './flexgrid/rows/row-styling/row-styling.component';
import { RowHeightComponent } from './flexgrid/rows/row-height/row-height.component';
import { RowVerticalAlignmentComponent } from './flexgrid/rows/row-vertical-alignment/row-vertical-alignment.component';
import { RowHoverComponent } from './flexgrid/rows/row-hover/row-hover.component';
import { FooterAreaComponent } from './flexgrid/footer/footer-area/footer-area.component';
import { SearchTextComponent } from './flexgrid/columns/search-text/search-text.component';
import { ConditionalStylingComponent } from './flexgrid/custom-cells/conditional-styling/conditional-styling.component';
import { CustomCellFactoryComponent } from './flexgrid/custom-cells/custom-cell-factory/custom-cell-factory.component';
import { DynamicUpdatesComponent } from './flexgrid/custom-cells/dynamic-updates/dynamic-updates.component';
import { SparklineComponent } from './flexgrid/custom-cells/sparkline/sparkline.component';
import { CustomEditorsComponent } from './flexgrid/custom-cells/custom-editors/custom-editors.component';
import { DataBindingComponent } from './flexgrid/data-binding/data-binding/data-binding.component';
import { CollectionViewComponent } from './flexgrid/data-binding/collection-view/collection-view.component';
import { JsonDataComponent } from './flexgrid/data-binding/json-data/json-data.component';
import { MaterDetailComponent } from './flexgrid/data-binding/mater-detail/mater-detail.component';
import { TreeGridComponent } from './flexgrid/data-binding/tree-grid/tree-grid.component';
import { EditableTreeGridComponent } from './flexgrid/data-binding/editable-tree-grid/editable-tree-grid.component';
import { UnboundTreeGridComponent } from './flexgrid/data-binding/unbound-tree-grid/unbound-tree-grid.component';
import { OdataComponent } from './flexgrid/data-binding/odata/odata.component';
import { VirtualDataComponent } from './flexgrid/data-binding/virtual-data/virtual-data.component';
import { ReadonlyRequiredComponent } from './flexgrid/editing/readonly-required/readonly-required.component';
import { ValidationComponent } from './flexgrid/editing/validation/validation.component';
import { CollectionviewValidationComponent } from './flexgrid/editing/collectionview-validation/collectionview-validation.component';
import { EditingEventComponent } from './flexgrid/editing/editing-event/editing-event.component';
import { AlwaysEditingComponent } from './flexgrid/editing/always-editing/always-editing.component';
import { InlineEditorComponent } from './flexgrid/editing/inline-editor/inline-editor.component';
import { PopupEditorComponent } from './flexgrid/editing/popup-editor/popup-editor.component';
import { ImeComponent } from './flexgrid/editing/ime/ime.component';
import { EventInfoComponent } from './flexgrid/events/event-info/event-info.component';
import { EventMouseComponent } from './flexgrid/events/event-mouse/event-mouse.component';
import { EventSelectionComponent } from './flexgrid/events/event-selection/event-selection.component';
import { EventResizeComponent } from './flexgrid/events/event-resize/event-resize.component';
import { EventReorderingComponent } from './flexgrid/events/event-reordering/event-reordering.component';
import { ExcelIoComponent } from './flexgrid/import-export/excel-io/excel-io.component';
import { PdfIoComponent } from './flexgrid/import-export/pdf-io/pdf-io.component';
import { CvRecordManagementComponent } from './collectionview/cv-record-management/cv-record-management.component';
import { CvSortingComponent } from './collectionview/cv-sorting/cv-sorting.component';
import { CvFilteringComponent } from './collectionview/cv-filtering/cv-filtering.component';
import { CvGroupingComponent } from './collectionview/cv-grouping/cv-grouping.component';
import { CvEditingComponent } from './collectionview/cv-editing/cv-editing.component';
import { CvPagingComponent } from './collectionview/cv-paging/cv-paging.component';
import { CvTrackingComponent } from './collectionview/cv-tracking/cv-tracking.component';
import { SvIntroComponent } from './other-service/sv-intro/sv-intro.component';
import { SvToolTipComponent } from './other-service/sv-tool-tip/sv-tool-tip.component';
import { SvPrintDocComponent } from './other-service/sv-print-doc/sv-print-doc.component';
import { SvColorComponent } from './other-service/sv-color/sv-color.component';
import { SvHttpRequestComponent } from './other-service/sv-http-request/sv-http-request.component';
import { SvAnimateComponent } from './other-service/sv-animate/sv-animate.component';
import { SvShowPopupComponent } from './other-service/sv-show-popup/sv-show-popup.component';
import { CvValidationComponent } from './collectionview/cv-validation/cv-validation.component';
import { CvPerformanceComponent } from './collectionview/cv-performance/cv-performance.component';
import { CvDataProviderComponent } from './collectionview/cv-data-provider/cv-data-provider.component';
import { WijmoControlsComponent } from './wijmo5-Info/wijmo-controls/wijmo-controls.component';
import { FgSizingScrollComponent } from './flexgrid/introduction/fg-sizing-scroll/fg-sizing-scroll.component';
import { FgRowAutoSizingComponent } from './flexgrid/introduction/fg-row-auto-sizing/fg-row-auto-sizing.component';
import { FgNoScrollbarComponent } from './flexgrid/introduction/fg-no-scrollbar/fg-no-scrollbar.component';
import { FgScrollingViewrangeComponent } from './flexgrid/introduction/fg-scrolling-viewrange/fg-scrolling-viewrange.component';
import { FgFastScrollerComponent } from './flexgrid/introduction/fg-fast-scroller/fg-fast-scroller.component';
import { FgServerSideFilterComponent } from './flexgrid/introduction/fg-server-side-filter/fg-server-side-filter.component';
import { FgFilterOptimizationComponent } from './flexgrid/introduction/fg-filter-optimization/fg-filter-optimization.component';
import { FgPagingComponent } from './flexgrid/introduction/fg-paging/fg-paging.component';
import { FgMultiRangeSelComponent } from './flexgrid/introduction/fg-multi-range-sel/fg-multi-range-sel.component';
import { FgCellTemplateComponent } from './flexgrid/custom-cells/fg-cell-template/fg-cell-template.component';
import { CvGettingStartComponent } from './collectionview/cv-getting-start/cv-getting-start.component';
import { SvCustomGlyphsComponent } from './other-service/sv-custom-glyphs/sv-custom-glyphs.component';
import { SvFormatComponent } from './other-service/sv-format/sv-format.component';
import { ChartIntoComponent } from './flexchart/chart-into/chart-into.component';
import { ChartTypeComponent } from './flexchart/chart-type/chart-type.component';
import { ChartFunnelComponent } from './flexchart/chart-funnel/chart-funnel.component';
import { ChartMixedComponent } from './flexchart/chart-mixed/chart-mixed.component';
import { ChartLegendTitleComponent } from './flexchart/chart-legend-title/chart-legend-title.component';
import { ChartTooltipComponent } from './flexchart/chart-tooltip/chart-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    ReferencingComponent,
    OverviewComponent,   
    Ng1DirectiveComponent,
    SizingStyleComponent,
    PsesudoComponent,
    EventsComponent,
    EnumerationsComponent,
    GlobalizationComponent,
    GlyphsComponent,
    IntellisenseComponent,
    LesscssComponent,
    SelectionComponent,
    ClipboardComponent,
    ColumnMoveComponent,
    SortingComponent,
    SizingComponent,
    LayoutComponent,
    FreezingComponent,
    FilteringComponent,
    GroupingComponent,
    AddDeleteComponent,
    RowMoveComponent,
    DetailRowComponent,
    HeaderMergeComponent,
    FilterPanelComponent,
    FgHdResizeComponent,
    CellMergeComponent,
    ArchitectureComponent,
    GridPanelsComponent,
    RowsColsComponent,
    VisualizationComponent,
    CellComponent,
    BidingComponent,
    DeepBidingComponent,
    CollectionsComponent,
    PropertiesComponent,
    DataMapComponent,
    DyanmicDatamapComponent,
    AutoSizingComponent,
    StickyHeaderComponent,
    ReOrderingComponent,
    AggregatesComponent,
    AggregatesUpperComponent,
    AggregatesBelowComponent,
    AggregatesCustomComponent,
    CustomCellsComponent,
    ColumnStylingComponent,
    CellFormattingComponent,
    RowCollectionsComponent,
    RowPropertiesComponent,
    RowStylingComponent,
    RowHeightComponent,
    RowVerticalAlignmentComponent,
    RowHoverComponent,
    FooterAreaComponent,
    SearchTextComponent,
    ConditionalStylingComponent,
    CustomCellFactoryComponent,
    DynamicUpdatesComponent,
    SparklineComponent,
    CustomEditorsComponent,
    DataBindingComponent,
    CollectionViewComponent,
    JsonDataComponent,
    MaterDetailComponent,
    TreeGridComponent,
    EditableTreeGridComponent,
    UnboundTreeGridComponent,
    OdataComponent,
    VirtualDataComponent,
    ReadonlyRequiredComponent,
    ValidationComponent,
    CollectionviewValidationComponent,
    EditingEventComponent,
    AlwaysEditingComponent,
    InlineEditorComponent,
    PopupEditorComponent,
    ImeComponent,
    EventInfoComponent,
    EventMouseComponent,
    EventSelectionComponent,
    EventResizeComponent,
    EventReorderingComponent,
    ExcelIoComponent,
    PdfIoComponent,
    CvRecordManagementComponent,
    CvSortingComponent,
    CvFilteringComponent,
    CvGroupingComponent,
    CvEditingComponent,
    CvPagingComponent,
    CvTrackingComponent,
    SvIntroComponent,
    SvToolTipComponent,
    SvPrintDocComponent,
    SvColorComponent,
    SvHttpRequestComponent,
    SvAnimateComponent,
    SvShowPopupComponent,
    CvValidationComponent,
    CvPerformanceComponent,
    CvDataProviderComponent,
    WijmoControlsComponent,
    FgSizingScrollComponent,
    FgRowAutoSizingComponent,
    FgNoScrollbarComponent,
    FgScrollingViewrangeComponent,
    FgFastScrollerComponent,
    FgServerSideFilterComponent,
    FgFilterOptimizationComponent,
    FgPagingComponent,
    FgMultiRangeSelComponent,
    FgCellTemplateComponent,
    CvGettingStartComponent,
    SvCustomGlyphsComponent,
    SvFormatComponent,
    ChartIntoComponent,
    ChartTypeComponent,
    ChartFunnelComponent,
    ChartMixedComponent,
    ChartLegendTitleComponent,
    ChartTooltipComponent,        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
