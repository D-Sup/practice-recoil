import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { myNewAtom, myNewSelector } from './recoil/UserAtom';

const btnStyle = {
  width: '800px',
  height: '100px',
  fontSize : '18px',
  marginTop : '10px'
};
const divStyle = {
  fontSize : '18px',
  fontWeight: 'bold',
};

export default function UsingRecoil() {
  const [atom, setAtom] = useRecoilState(myNewAtom);
  const [selector, setSelector] = useRecoilState(myNewSelector);
  // const selector = useRecoilValue(myNewSelector);
  // const setSelector = useSetRecoilState(myNewSelector);

  return (
    <>
      <div style={divStyle}>
        <h3>선언</h3>
        const [atom, setAtom] = useRecoilState(myNewAtom);
        <br />
        const [selector, setSelector] = useRecoilState(myNewSelector);
      </div>
      <button style={btnStyle} onClick={() => {
        console.log('현재 atom : ' + atom);
      }}>
        현재 atom 값 보기
        <div style={divStyle}>코드: atom</div>
      </button>
      <br />

      <button style={btnStyle} onClick={() => {
        setAtom((prev) => prev + 1);
      }}>
        atom값 바꾸기 (+1)
        <div style={divStyle}>코드: setAtom((prev) =&gt; prev + 1)</div>
      </button>
      <br />

      <button style={btnStyle} onClick={() => {
        console.log('selector에서 가져온 값 : ' + selector);
        console.log("'현재 atom 값 보기' 버튼을 클릭해보세요");
      }}>
        get 이용해 selector에 연결된 atom의 원래값 변경하지않고, 변형한 값 가져오기 (+10)
        <div style={divStyle}>코드: selector</div>
      </button>
      <br />

      <button style={btnStyle} onClick={() => {
        console.log('setSelector(인자)에서 인자로 들어온 값 + 10');
        setSelector(atom);
        console.log("'현재 atom 값 보기' 버튼을 클릭해보세요");
      }}>
        set 이용해 selector에 연결된 atom의 원래값의 변경하기 (+10)
        <div style={divStyle}>코드: setSelector(atom)</div>
      </button>
    </>
  );
}
