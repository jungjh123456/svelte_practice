<script>
    import PollStore from '../stores/store.js';
    import testStore from '../stores/test.js';
    import time from '../stores/timer.js';

    import {onMount,onDestroy} from 'svelte'
    export let params = {}
   export  let a = [];
   export  let b = [];
    console.log(time);

    // time.subscribe((data) => {
    //     console.log(data)
    // })
//   const unsub = PollStore.subscribe((data) => {
//         // console.log(data.a)
//         a = data.a;
//     })

const unsub3 = testStore.subscribe((data) => {
        // console.log(data.a)
        b = data;
})
//     console.log(b);
//   onMount(() => {
//   console.log("component mounted");
//         });

//     onDestroy(() => {
//   console.log("component destroyed");
// });
const clickBtn = (a) => {
    testStore.update(state => [...state, {id: Math.max(...state.map(item => item.id)) +1 , question:'ddd'}])
};
</script>

<h1>Home</h1>
<h2>{params.id}</h2>
<!-- <span>{a[0].question}</span> -->

<div>
    {#each $testStore as poll (poll.id)}
        <div on:click={() => clickBtn('id')}>
            {poll.question}
        </div>
    {/each}
</div>
<style>
    h1 {
        color: red;
    }
</style>