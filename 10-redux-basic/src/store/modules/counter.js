import { createAction, handleActions } from "redux-actions";

// 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것
// 여기서는 더했을 때와 뺏을 때
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수(action creator) : 액션 객체를 만들어 주는 함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// => createAction을 사용하면 더욱 간단하게 액션 생성 함수 선언 가능하다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서(reducer) : 변화를 일으키는 함수
// 초기값 설정
const initialState = {
  counter: 0,
};

// 리듀서 함수 정의
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         counter: state.counter + 1,
//       };
//     case DECREASE:
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

//=> 더 간단하게 변경
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ counter: state.counter + 1 }),
    [DECREASE]: (state, action) => ({ counter: state.counter - 1 }),
    //첫 번째 파라미터
  },
  initialState //두 번째 파라미터
);
export default counter;
