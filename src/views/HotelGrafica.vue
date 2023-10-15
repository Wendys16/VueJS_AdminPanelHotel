
<template>
    <div>
        <div class="p-0">
            <div class="h-10">
                <h1 class="float-left  text-3xl from-neutral-100 md:text-3x1">Graficas</h1>
            </div>
            <hr>
            <br>
            <div class="grid grid-cols-1 gap-5 mb-4 md:grid-cols-2 lg:grid-cols-2">

                <div class="w-full h-100 bg-white">
                    <Pie id="my-chart-id2" :options="chartOptionsPie" :data="pieChartData" />
                </div>
                <div class="w-full h-100 bg-white">
                    <Doughnut id="my-chart-id" :options="chartOptions" :data="DoughnutChartData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bar, Pie, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale)
export default {
    components: { Bar, Pie, Doughnut },
    props: {
        chartId: {
            type: String,
            default: 'combined-chart'
        }
    },
    data() {
        return {
            pieChartData: {
                labels: ['Estándar', 'Junior', 'Suite'],
                datasets: [{
                    label: 'Gráfico con los totales de habitaciones creadas por tipo',
                    data: [55, 80, 20],
                    borderWidth: 1,
                    backgroundColor: ['#f87979', '#179160', '#c55a17'],
                }]
            },

            DoughnutChartData: {
                labels: ['Sencilla', 'Doble', 'Triple', 'Cuádruple'],
                datasets: [{
                    label: 'Gráfico con los totales de habitaciones creadas por Acomodacion',
                    data: [13, 11, 22, 10],
                    borderWidth: 1,
                    backgroundColor: ['#f87979', '#179160', '#c55a17']
                }]
            },
            chartOptions: {
                responsive: true,
            },
        }
    }
}
</script>