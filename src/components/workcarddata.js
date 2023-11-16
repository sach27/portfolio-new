import indicator from "../assets/indicator.png";
import chess from "../assets/chess.png";
import pushup from "../assets/pushup.png";

const ProjectCardData = [
    {
        imgscr : indicator,
        title: "Trading indicator",
        text: "I made this indicator using PineScript programming language which is native to TradingView, since I made it for a stock broking firm so I am not allowed to share condition or any other details about the strategy behind it, therefore view and source won't be available",
        view: "url.com",
        source: "url.com"
    },
    {
        imgscr : chess,
        title: "Chess bot",
        text: "It is an AI based chess bot, which has capacity to play without human guidance, it has been programmed in Python and uses Nega-max algorithm and hurestics at it's core, though it might not be the best bot in industry it can still display intelligent behaviour and surprise humans at times.",
        view: "https://www.linkedin.com/posts/sach-thadani-5888101b2_best-ai-carokann-activity-7123184613866225664-qNMZ?utm_source=share&utm_medium=member_desktop",
        source: "https://github.com/sach27/chess_engine"
    },
    {
        imgscr : pushup,
        title: "Pushup-Pullup detector",
        text: "As the name suggest this project is able to detect and count total number of pushups and pullups that have been executed successfully in an video, I have used OpenCV and MediaPipe's Python wrap around for this project.",
        view: "https://www.linkedin.com/posts/sach-thadani-5888101b2_opencv-mediapipe-python-activity-7116290614920417280-C-wB?utm_source=share&utm_medium=member_desktop",
        source: "https://github.com/sach27/pushup-pullup-detector"
    }
]
export default ProjectCardData;