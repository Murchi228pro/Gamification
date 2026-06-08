
import { createMemoryHistory, createRouter } from "vue-router";


const routes = [
    {path: "miner/", component => ''}
]

export const router = createRouter(
    {   
        history: createMemoryHistory(),
        routes: []
    }
)