import * as SS from "styled-system";

export type GridContainerProps = SS.GridGapProps &
  SS.GridRowGapProps &
  SS.GridColumnGapProps &
  SS.GridAutoFlowProps &
  SS.GridAutoRowsProps &
  SS.GridAutoColumnsProps &
  SS.GridTemplatesRowsProps &
  SS.GridTemplatesColumnsProps &
  SS.GridTemplatesAreasProps;

export const gridContainer = SS.compose(
  SS.gridGap,
  SS.gridRowGap,
  SS.gridColumnGap,
  SS.gridAutoFlow,
  SS.gridAutoRows,
  SS.gridAutoColumns,
  SS.gridTemplateRows,
  SS.gridTemplateColumns,
  SS.gridTemplateAreas
);

export type GridItemProps = SS.GridColumnProps &
  SS.GridRowProps &
  SS.GridAreaProps;

export const gridItem = SS.compose(
  SS.gridColumn,
  SS.gridRow,
  SS.gridArea
);
