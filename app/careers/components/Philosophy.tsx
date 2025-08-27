'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Philosophy() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !chartRef.current) return;

    // Clean up previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Create the chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Entry Level', '1 Year', '2 Years', '3 Years', '4 Years', '5+ Years'],
        datasets: [
          {
            label: 'Salary Growth Potential',
            data: [100, 150, 250, 350, 500, 750],
            backgroundColor: '#C5A47E',
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `₹${context.raw}K/month`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#E5E7EB',
            },
            ticks: {
              callback: function(value) {
                return `₹${value}K`;
              },
              color: '#6B7280',
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#6B7280',
            },
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="philosophy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose RIG Global Solutions?
          </h2>
          <div className="w-20 h-1 bg-[#C5A47E] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12">
            We believe in fostering an environment where talent thrives. Our philosophy is built on three core principles that make us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <PhilosophyPoint 
              title="Guaranteed Growth"
              description="We provide a clear, structured career path with guaranteed promotions based on performance, not just tenure."
              number="01"
            />
            <PhilosophyPoint 
              title="Competitive Compensation"
              description="Enjoy industry-leading salaries with a transparent pay structure and performance-based incentives."
              number="02"
            />
            <PhilosophyPoint 
              title="Work-Life Harmony"
              description="We value your time and well-being with flexible work arrangements and a supportive culture."
              number="03"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="aspect-w-16 aspect-h-9 h-80">
              <canvas ref={chartRef}></canvas>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              * Projected salary growth based on performance metrics and career progression
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophyPoint({ title, description, number }: { title: string; description: string; number: string }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#C5A47E] font-bold text-xl mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
