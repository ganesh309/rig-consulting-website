'use client';

import { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, ChartConfiguration, PieController } from 'chart.js';

// Register the required components
ChartJS.register(PieController, ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  };
  options?: any;
}

export default function PieChart({ data, options }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Register required Chart.js components
        ChartJS.register(ArcElement, Tooltip, Legend);
        
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create new chart instance with proper typing
        const config: ChartConfiguration = {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
              },
              ...options?.plugins
            },
            ...options
          }
        };
        
        chartInstance.current = new ChartJS(ctx, config);
      }
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={chartRef} />;
}
