<script>
  export let id;
  export let onSuccess;
 


  async function onSubmit(){
    onSuccess('some message');
  }
   import queryString from "query-string";

  let parsed = {};

  if (typeof window !== 'undefined') {
    parsed = queryString.parse(window.location.search);
  }
  console.log(parsed)
</script>

<h1>Avout</h1>


<h2>{id ?? 'dd'}</h2>
<h2>{parsed.token}</h2>

<style>
    h1 {
        color: red;
    }
</style>