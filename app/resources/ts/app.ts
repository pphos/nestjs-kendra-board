import './bootstrap';

const hello = () => {
  console.log('HOGE');
};

(window as any).app = {
  hello,
};
