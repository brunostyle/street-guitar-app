import { Card, CardBody } from "@nextui-org/react";
import ChartLibrary, { Props } from "react-apexcharts";

const options: Props["options"] = {
    chart: {
        type: "area",
        animations: {
            easing: "linear",
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: "basic-bar",
        foreColor: "hsl(var(--nextui-default-800))",
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        axisBorder: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
        axisTicks: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
    },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "hsl(var(--nextui-default-200))",
    },
    stroke: {
        curve: "smooth",
    },
    // @ts-ignore
    markers: false,
};

export interface IChart {
	clients?: number[];
	sells?: number[];
}

export const Chart = ({clients = [], sells = []}:IChart) => {
    const state: Props["series"] = [
        {
            name: "Clientes",
            data: clients
        },
        {
            name: "Ventas",
            data: sells
        },
    ];
    return (
        <Card>
            <CardBody id="chart">
                <ChartLibrary type="area" options={options} series={state} height={425} />
            </CardBody>
        </Card>
    )
}