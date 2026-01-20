'use client'

import React from 'react';
import ReactECharts from 'echarts-for-react';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface InteractivePieChartProps {
  data: PieChartData[];
  title?: string;
}

export const InteractivePieChart: React.FC<InteractivePieChartProps> = ({ data, title }) => {
  const option = {
    title: {
      text: title,
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'transparent',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      show: false // We'll use custom legend below the chart
    },
    series: [
      {
        name: 'Distribution',
        type: 'pie',
        radius: ['45%', '75%'], // Slightly larger donut
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#000',
          borderWidth: 2
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false, // Remove background ghost text
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {
          show: false
        },
        data: data.map(item => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: item.color
          }
        })),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx: number) {
          return Math.random() * 200;
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <ReactECharts
        option={option}
        style={{ height: '320px', width: '100%' }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};
