import { createChart, ColorType, AreaSeries } from 'lightweight-charts';
import { Card } from '@heroui/react';
import { useEffect, useRef } from 'react';
import { useTheme } from '@state';

const themes = {
    dark: {
        layout: { background: { color: '#000000' }, textColor: '#c1c1c1' },
        grid: { vertLines: { color: '#001111' }, horzLines: { color: '#001111' } },
        areaStyles: { topColor: '#4B0082', bottomColor: '#000000', lineColor: '#8A2BE2' }
    },
    light: {
        layout: { background: { color: '#FFFFFF' }, textColor: '#141414' },
        grid: { vertLines: { color: '#E6E6E6' }, horzLines: { color: '#E6E6E6' } },
        areaStyles: { topColor: '#4B0082', bottomColor: '#ffffff', lineColor: '#8A2BE2' }
    }
};

interface ChartComponentProps {
    data: { time: string; value: number }[];
}

export const ChartArea = ({ data }: ChartComponentProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const newChart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: themes[theme].layout.background.color },
                textColor: themes[theme].layout.textColor,
            },
            grid: {
                vertLines: { color: themes[theme].grid.vertLines.color },
                horzLines: { color: themes[theme].grid.horzLines.color },
            },
            width: chartContainerRef.current.clientWidth,
            height: 400,
        });

        const newAreaSeries = newChart.addSeries(AreaSeries, {
            topColor: themes[theme].areaStyles.topColor,
            bottomColor: themes[theme].areaStyles.bottomColor,
            lineColor: themes[theme].areaStyles.lineColor,
            lineWidth: 2,
        });

        newAreaSeries.setData(data);
        newChart.timeScale().fitContent();

        const handleResize = () => {
            if (chartContainerRef.current) {
                newChart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            newChart.remove();
        };
    }, [data, theme]);

    return (
        <Card>
            <div className="chart" ref={chartContainerRef} />
        </Card>
    );
};