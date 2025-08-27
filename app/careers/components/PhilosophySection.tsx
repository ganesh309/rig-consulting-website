'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function PhilosophySection() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Trainee (Year 1)', 'Associate (Year 1)', 'Asst. & Exec.'],
            datasets: [{
              label: 'Potential Salary Growth (%)',
              data: [50, 35, 30],
              backgroundColor: ['#E9D8C7', '#C5A47E', '#A08466'],
              borderColor: ['#D4BBA5', '#B5946E', '#8F7359'],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Salary Hike Potential (%)'
                }
              }
            },
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Performance-Based Salary Growth Potential',
                font: {
                  size: 16
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `Up to ${context.raw}% salary hike potential.`;
                  }
                }
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="philosophy" className="py-20 bg-[#F8F5F1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose RIG Global Solutions?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our unique philosophy is built on four key pillars designed to foster your professional and personal growth in a purpose-driven environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Guaranteed Growth</h3>
              <p className="text-gray-600">A transparent and structured promotion pathway, with advancement opportunities every 12-18 months based on bi-annual performance reviews.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Learn While You Earn</h3>
              <p className="text-gray-600">Benefit from continuous, high-impact training programs and dedicated mentorship at every stage of your career.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Purpose-Driven Work</h3>
              <p className="text-gray-600">Contribute directly to national development goals like 'Make in India' and 'Skill India' while driving sustainable transformation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Inclusive Environment</h3>
              <p className="text-gray-600">We are a committed equal opportunity employer, fostering a diverse and collaborative workplace where merit is the only measure of success.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="chart-container" style={{ position: 'relative', height: '400px' }}>
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
