import { writable } from "svelte/store";

const PollStore = writable({ a: [{ id: 1, question: "스토어 연습" }] }); // 저장소가 쓰기 가능과 같다. 이게 저장소로 생성되도록 혹출하고 데이터 쓰기 가능한 저장소를 전달 할 수 있다. (redux의 store 만들고 호출하는것과 동일) 초기 데이터를 지정할 수 있다.

export default PollStore;
