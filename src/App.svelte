<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  // import routes from '../routes'
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";

  export let url = "";

</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about/1">About</Link>

  </nav>
  <div>
    <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
    <Route path="/"><Home /></Route>

    <Route path="about/:id" component="{About}" />
  </div>
</Router>

<style>
 
</style>
