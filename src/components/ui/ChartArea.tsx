import { createChart, ColorType, AreaSeries } from 'lightweight-charts';
import { Card, CardBody } from '@heroui/react';
import { useEffect, useRef } from 'react';
import { useTheme } from '@state';
import type { IChartData } from '@interfaces';

const themes = {
    dark: {
        layout: { background: { color: '#09090b' }, textColor: '#857575' },
        grid: { vertLines: { color: '#001111' }, horzLines: { color: '#001111' }, border: { color: '#141414' } },
        areaStyles: { topColor: '#4B0082', bottomColor: '#09090b', lineColor: '#004493' }
    },
    light: {
        layout: { background: { color: '#FFFFFF' }, textColor: '#141414' },
        grid: { vertLines: { color: '#E6E6E6' }, horzLines: { color: '#E6E6E6' }, border: { color: '#c1c1c1' } },
        areaStyles: { topColor: '#4B0082', bottomColor: '#ffffff', lineColor: '#004493' }
    }
};

interface ChartComponentProps {
    data?: IChartData[];
}

export const ChartArea = ({ data = [] }: ChartComponentProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    data.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

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
            handleScale: false,
            handleScroll: false,
            timeScale: {
                borderColor: themes[theme].grid.border.color,
            },
            rightPriceScale: {
                borderColor: themes[theme].grid.border.color,
            }
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
        <Card className="shadow-inset">
            <CardBody>
                <div className="chart" ref={chartContainerRef} />
            </CardBody>
        </Card>
    );
};