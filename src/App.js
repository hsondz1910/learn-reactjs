import "./App.css";
import Game from "./components/tictactoe/Game";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Toggle from "./components/state/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  return (
    <div>
      {/* <YoutubeList>
        <h2>
          ReactJS được phát triển bởi Facebook và được giới thiệu lần đầu tiên
          vào năm 2011. Ban đầu, ReactJS được phát triển để xây dựng giao diện
          người dùng trên trang web Facebook, nhằm cải thiện tốc độ và hiệu suất
          của ứng dụng web.
        </h2>
      </YoutubeList> */}
      {/* <Toggle/> */}
      <Game/>
    </div>
  );
}

export default App;
