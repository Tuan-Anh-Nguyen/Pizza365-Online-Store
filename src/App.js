import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarComponent from './components/header/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';
import IntroduceComponent from './components/contents/IntroduceComponent';
import PizzaSizeComponent from './components/contents/PizzaSizeComponent';
import PizzaTypeComponent from './components/contents/PizzaTypeComponent';
import DrinkComponent from './components/contents/DrinkComponent';
import FormComponent from './components/contents/FormComponent';

function App() {
  return (
    <div>
      {/* Navigation bar */}
      <NavbarComponent />
      {/* Body Content */}
      <div className='container' style={{ padding: '100px 0 50px 0' }}>
        <div className='row'>
          {/* Introduction */}
          <IntroduceComponent />
          {/* Menu Combo */}
          <PizzaSizeComponent />
          {/* Chọn loại pizza */}
          <PizzaTypeComponent />
          {/* Chọn đồ uống */}
          <DrinkComponent />
          {/* Gửi đơn hàng */}
          <FormComponent />
        </div>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
