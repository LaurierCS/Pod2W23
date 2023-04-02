import { ResponsivePie } from '@nivo/pie';
import categoryToColor from '../../../tools/categoryToColor';

interface SliceData {
  id: string;
  label: string;
  value: number;
}

interface PieData {
  data: SliceData[];
  colors: string[];
}

interface PieGraphProps {
  data: PieData;
}

const PieGraph = ({ data }: PieGraphProps) => (
  <ResponsivePie
      colors={data.colors}
      data={data.data}
      margin={{ top: 40, right: 10, bottom: 90, left: 10 }}
      sortByValue={true}
      innerRadius={0.15}
      padAngle={1}
      cornerRadius={15}
      activeOuterRadiusOffset={8}
      borderWidth={0}
      enableArcLinkLabels={false}
      arcLabelsRadiusOffset={0.55}
      arcLabelsSkipAngle={12}
      arcLabelsTextColor="#ffffff"
      motionConfig="wobbly"
  />
);

export default PieGraph;