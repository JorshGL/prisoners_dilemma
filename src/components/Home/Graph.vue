<template>
    <Line
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
</template>
  
<script>
import { Line } from "vue-chartjs";
import { watchEffect, computed, ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

export default {
    name: 'BarChart',
    components: { Line },
    props: {
        chartId: {
        type: String,
        default: 'bar-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: window.innerWidth/5
        },
        height: {
        type: Number,
        default: window.innerHeight/3
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        entanglementParameter: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        let y = ref([])
        let timer;

        const fetchState = (w) => {
            fetch("http://localhost:5000/", {
                body: JSON.stringify({ w: w/100 }),
                headers: { "Content-Type": "application/json" },
                mode: "cors",
                method: "POST"
            })
            .then((res) => res.json())
            .then((res) => y.value = Array.from(res.y))
        }

        watchEffect(() => {
            let w = parseInt(props.entanglementParameter)
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => fetchState(w), 100)
        })

        let chartData = computed(() => {
            return {
                labels: Array(100).fill(""),
                datasets: [
                    { 
                        label: "Quantum Correlation",
                        borderColor: "#6EDCD9",
                        data: [...y.value],
                        fill: false,
                        borderWidht: 5
                    }
                ]
            }
        })

        const chartOptions = {
                responsive: true,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 1
                        }
                },
                animation: {
                    duration: 0
                }
            }
        

        return {
            chartData,
            chartOptions
        }
    }
}
</script>