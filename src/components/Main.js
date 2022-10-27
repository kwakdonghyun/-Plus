import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addAge, changeName } from "../store/Store.js"
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ReactPlayer from 'react-player/lazy';
import { width } from "@mui/system";
import { Button } from '@mui/material';
import whatsNewItems from './whatsNewItems.js'
const Main = () => {
    // let state = useSelector((state) => { return state })
    // console.log('state=',state)
    // let user = state.user.name
    // let age = state.user.age

    // let dispatch = useDispatch();

    const [carouselItems, setCarouselItems] = useState();
    const [interval, setInterval] = useState(4000);
    const row1Items = makeRowItems(whatsNewItems.row1)
    const row2Items = makeRowItems(whatsNewItems.row2)

    function makeRowItems(row) {
        const items = row
        let data = []
        items.map((item, index) => {
            data.push(
                <div className="col-lg-4" key={item.title}>
                    <a
                        className="whatsNewItem"
                        href="#"
                        onclick="goDetail(this)"
                    >
                        <div className="tmb">
                            <img
                                title={item.title}
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                        <div className="con">
                            <strong className="">
                                더 진한 풍미의 피자 소스와 페퍼로니<br />
                                NEW 페퍼로니 피자 버거
                            </strong>
                        </div>
                    </a>
                </div>
            )
        })
        return data
    }

    useEffect(() => {

        console.log('row1Items=', row1Items)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        let data = [
            {
                key: '1',
                value: 'wowvalue'
            }
        ]
        console.log('data=', data)
        setCarouselItems(makeCarouselData());
    }, []);

    const makeCarouselData = () => {
        let imgData = [
            {
                title: "image_1",
                imageUrl: "/image/main/리워드.png",
            },
            {
                title: "image_2",
                imageUrl: "/image/main/맥런치.jpg",
            },
            {
                title: "image_3",
                imageUrl: "/image/main/맥모닝.png",
            },
            {
                title: "image_4_1",
                url: "/image/main/맥커피.mp4",
            },
            {
                title: "image_4_2",
                url: "/image/main/목장.mp4",
            },
            {
                title: "image_5",
                imageUrl: "/image/main/맥크리스피버거.jpg",
            },
            {
                title: "image_6",
                imageUrl: "/image/main/맥플러리.png",
            },
            {
                title: "image_7",
                imageUrl: "/image/main/스낵랩.jpg",
            },
            {
                title: "image_8",
                imageUrl: "/image/main/크루.png",
            },
        ];
        let data = [];
        for (let i = 0; i < imgData.length; i++) {
            if (imgData[i]['title'] == "image_4_1" || imgData[i]['title'] == "image_4_2") {
                data.push(
                    <div key={imgData[i]['title']} >
                        <ReactPlayer
                            url={imgData[i].url}
                            playing={true}        // 자동 재생 on
                            muted={true}
                            loop={true}
                            width='100%'
                            height={'540px'}
                        />
                    </div>
                );
            } else {
                data.push(
                    <div key={imgData[i]['title']} style={{ height: '540px', cursor: 'pointer' }} >
                        <img
                            title={imgData[i].title}
                            src={imgData[i].imageUrl}
                            onClick={() => {
                                console.log('ddd')
                            }}
                        />
                    </div>
                );
            }
        }
        return data;
    }

    return (
        <div className="">
            <div>
                <Carousel
                    autoPlay={true}
                    animation={"slide"}
                    indicatorIconButtonProps={{
                        style: {
                            padding: '15px',    // 1
                            marginTop: '-90px',
                            zIndex: 1
                        }
                    }}
                    interval={interval}
                    onChange={(now, prev) => {
                        if (now == 3) {
                            setInterval(6000)
                        } else if (now == 4) {
                            setInterval(30000)
                        } else {
                            setInterval(4000)
                        }
                    }}
                >
                    {carouselItems}
                </Carousel>
            </div>
            <div className="content contArea">
                <div className="inner">
                    <h2 className="titMain">McDonal's LIVE</h2>
                    <div>
                        <div className="row col-lg-12">
                            {row1Items}
                        </div>
                        <div style={{ marginTop: '30px' }} className="row col-lg-12">
                            {row2Items}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



export default Main;