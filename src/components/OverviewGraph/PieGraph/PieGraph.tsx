import { ResponsivePie } from '@nivo/pie';

interface PieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface PieGraphProps {
  data: PieData[];
}

const PieGraph = ({ data }: PieGraphProps) => (
  <ResponsivePie
      data={data}
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