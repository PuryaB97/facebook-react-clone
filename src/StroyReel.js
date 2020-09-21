import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StroyReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://vvazw1o18pf4bhdd434btzh7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01-1-1080x675.jpg"
        profileSrc="https://iasbh.tmgrup.com.tr/898f7a/366/218/0/0/2048/1221?u=https://isbh.tmgrup.com.tr/sbh/2018/01/18/mark-zuckerberg-kimdir-1516259232282.jpg"
        title="Mark Zuckerberg"
      ></Story>
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyKFFi7FvVSWTDwUKu9yiSxxEM8hHge_PUg&usqp=CAU"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        title="Jeff Bezos"
      ></Story>
      <Story
        image="https://tele1.com.tr/wp-content/uploads/2020/06/204544_814x458-1280x720.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
        title="Elon Musk"
      ></Story>
      <Story
        image="https://i.pinimg.com/originals/dd/97/ed/dd97ed2a239c725ebe57e60b48499a66.jpg"
        profileSrc="https://i2.milimaj.com/i/milliyet/75/0x0/5f22c9d0554281119c9fce15.jpg"
        title="Bill Gates"
      ></Story>
      <Story
        image="https://im.haberturk.com/2019/06/07/ver1559912366/2486059_810x458.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg"
        title="Pavel Durov"
      ></Story>
    </div>
  );
}

export default StroyReel;
