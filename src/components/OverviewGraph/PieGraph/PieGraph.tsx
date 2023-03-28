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
      colors={{ scheme: 'accent' }}
      borderWidth={0}
      enableArcLinkLabels={false}
      arcLabelsRadiusOffset={0.55}
      arcLabelsSkipAngle={12}
      arcLabelsTextColor="#ffffff"
      motionConfig="wobbly"
      legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 65,
              itemsSpacing: 0,
              itemWidth: 80,
              itemHeight: 40,
              itemTextColor: '#DEE2E6',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 20,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#FFF'
                      }
                  }
              ]
          }
      ]}
  />
);

export default PieGraph;