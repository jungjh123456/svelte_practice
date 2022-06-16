# Svelte 맛보기

## Svelte 초기 설정

1. Svelte를 설치한다.

```
npm init vite my-app -- --template svelte
cd my-app

```

그 후 실행을 하면 첫 화면이 나온다.

```
npm install
npm run dev
```

App.svelte에 보면 정말 신기하게 되어 있다.

script 영역 html영역 그리고 style영역으로 되어 있다.

```js
<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello world!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>

```

script에 import를 하고 script 닫히는 바로 아래에 html을 불려올 수 있는데 여기서 react와 비슷하게 컴포넌트를 불려와서 렌더링 할 수 있다.

## Svelte로 라우터 지정

svelte에서 router설정하려면

```
 npm i -D svelte-routing
```

이것을 설치해준다.

설치 후

페이지 별로 보여줄 components를 만들어 주고 App.svelte에

```js
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

```

이런식으로 만들어 주면 링크를 클릭하면 잘 라우팅이 되었다.

그리고 params나 query string을 가져오고 싶으면

params는

```js
<Route path="about/:id" component="{About}" />
```

이렇게 /:id로 path를 설정해 놓으면

About.svelte의 script에서

```js
export let id;
```

이렇게 코드를 짜면 잘 나온다. query string을 가져오고 싶어서 서치를 해봤는데 query-string npm을 사용한다.

```
npm i query-string
```

```js
let parsed = {};

if (typeof window !== "undefined") {
  parsed = queryString.parse(window.location.search);
}
console.log(parsed);
```

이렇게 설정을 하면 ?token=sdfsdfsdf
이런 쿼리스트링이 있으면

parsed => {token: 'sdfsdfsdf'}

이렇게 할 수 있다.
