import { Box, Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineCheckCircle,AiOutlineArrowRight } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import ReactPlayer from "react-player";
import img from "../img/img.jpg";
import img2 from "../img/announcement.svg";
import "./_dataAnalyticsTest.scss";
const DataAnalyticsTest = ({
  name,
  testAttempted,
  testFail,
  testReattempted,
  isSessionBooked,
  testPass
}) => {
  const [open, setOpen] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const playerRef = useRef(null);

  const videoURlSet = (val) => {
    setVideoURL(hightlightVideoSrcArray[val]);
  };

  const hightlightVideoSrcArray = [
    // "https://www.youtube.com/watch?v=YIUH7V12blU",
    // "https://www.youtube.com/watch?v=YIUH7V12blU",
    // "https://www.youtube.com/watch?v=YIUH7V12blU",
    "1",
    "2",
    "3",
  ];

  const thumbnailArray = [img, img, img];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 450,
    bgcolor: "background.paper",
    border: "2px solid rgba(0,0,0,0.5)",
    boxShadow: 24,
    p: 1,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <ReactPlayer
        width="100%"
        muted={true}
        height={"100%"}
        style={{ borderRadius: "10px" }}
        url={videoURL}
        controls={true}
        ref={playerRef}
      /> */}
          {videoURL}
        </Box>
      </Modal>
      <div className="test-outer-wrapper">
        <p className="top-heading">Welcome to AccioJobs {name} !</p>
        <div className="top-banner-outer">
          <div className="top-banner-left">
            <p className="top-banner-text-1">Congratulations {name} ! 🎉 </p>
            <p className="top-banner-text-2">
              You have cleared the technical interview and are all set to join
              the next batch.
            </p>
            <div className="top-banner-text-3">
              <div className="text-green">Check it out now</div>
              <div className="icon-green">
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
          <div className="top-banner-right">
            <img src={img2} alt="" className="top-banner-right-svg" />
          </div>
        </div>
        <div className="bottom-content">
          <div className="bottom-content-1">
            <p className="bottom-content-top-left">Payment Methods</p>
            <p className="bottom-content-top-right">
              Batch Starting on 5th February - 4 Days left
            </p>
          </div>

          <div className="bottom-content-2">
            {/*--------------------------------------------------------- step-1 --------------------------------------------------------- */}
            <div
              className={`card ${
                !testFail ? "card-outline" : "card-border-outline"
              }`}
            >
              <div className={`card-div-1`}>
                <div
                  className={`card-div-1-left ${!testFail ? "tag-border" : ""}`}
                >
                  Step 1
                </div>

                <div className={`card-div-1-right`}>
                  {/* test not given */}
                  {!testAttempted || testFail || testReattempted ? (
                    <div className={`card-div-1-right-day-show`}>
                      10 day left
                    </div>
                  ) : null}
                  {testPass ? (
                    <div className={`card-div-1-right-done`}>
                      done
                    </div>
                  ) : null}
                  {/* test pass */}
                  {/* {!testFail ? (
                    <div className={`card-div-1-right-2-test-clear`}>done</div>
                  ) : null} */}
                  {/* test Reattempt false */}
                  {/* {!testReattempted ? (
                    <div className={`card-div-1-right-2-test-not-clear`}>
                      day
                    </div>
                  ) : null} */}
                  {/* test Reattempt true */}
                  {/* {testReattempted ? (
                    <div className={`card-div-1-right-1-reattempt`}></div>
                  ) : null}
                  {testReattempted ? (
                    <div className={`card-div-1-right-2-reattempt`}></div>
                  ) : null} */}
                </div>
              </div>

              <div className={`card-div-2`}>
                <div className={`card-div-2-center`}>
                  Take a short and simple Online Test
                </div>
              </div>

              <div className={`card-div-3`}>
                <div className={`card-div-3-left`}>
                  <span className="icon"><MdTimer/></span>
                  <span className="text">Duration: 2 Hrs</span>
                </div>
                <div className={`card-div-3-right`}>
                  <span className="icon"><RxDotFilled/></span>
                  <span className="text">Check Test Syllabus</span>
                </div>
              </div>


              <div className={`card-div-4`}>
                <div className={`card-div-4-center`}>
                  {/* test not given */}
                  {!testAttempted ? (
                    <button className={`button `}>
                       <span className="text">Attempt Now</span>
                      <span className="icon"><AiOutlineArrowRight/></span>
                    </button>
                  ) : null}
                  {/* test pass */}
                  {testPass ? (
                    <div className={`card-div-4-right-2-test-clear`}>
                        <span className="icon"><AiOutlineCheckCircle/></span>
                  <span className="text">You are selected for the course</span>
                    </div>
                  ) : null}
                  {/* test Reattempt false */}
                  {!testReattempted ? (
                    <div className={`card-div-4-right-2-test-not-clear`}>
                     <span className="icon"><BiError/></span>
                  <span className="text">Test not cleared. You can reattempt in 7 days</span>
                    </div>
                  ) : null}
                  {/* test Reattempt true */}
                  {testReattempted ? (
                    <button className={`button re-attempt`}>
                      <span className="text">Re-Attempt Now</span>
                      <span className="icon"><AiOutlineArrowRight/></span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            {/*--------------------------------------------------------- step-2 --------------------------------------------------------- */}

            <div
              className={`card  ${
                testPass ? "card-border-outline" : "card-outline"
              } `}
            >
               <div className={`card-div-1`}>
                <div
                  className={`card-div-1-left ${!testPass ? "tag-border" : ""}`}
                >
                  Step 1
                </div>

                <div className={`card-div-1-right`}>
                  {/* test not given */}
                  {!testAttempted || testFail || testReattempted ? (
                    <div className={`card-div-1-right-day-show`}>
                      10 day left
                    </div>
                  ) : null}
                  {testPass ? (
                    <div className={`card-div-1-right-done`}>
                      done
                    </div>
                  ) : null}
                  {/* test pass */}
                  {/* {!testFail ? (
                    <div className={`card-div-1-right-2-test-clear`}>done</div>
                  ) : null} */}
                  {/* test Reattempt false */}
                  {/* {!testReattempted ? (
                    <div className={`card-div-1-right-2-test-not-clear`}>
                      day
                    </div>
                  ) : null} */}
                  {/* test Reattempt true */}
                  {/* {testReattempted ? (
                    <div className={`card-div-1-right-1-reattempt`}></div>
                  ) : null}
                  {testReattempted ? (
                    <div className={`card-div-1-right-2-reattempt`}></div>
                  ) : null} */}
                </div>
              </div>
              <div className={`card-div-2`}>
                <p className={`card-div-2-center`}>
                  Get on 1v1 call with our Councellor
                </p>
              </div>

              <div className={`card-div-3`}>
                <p className={`card-div-3-center`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et harum praesentium minima. Hic nihil et quaerat, animi, facilis velit consequatur eos voluptatum ratione ipsam sint itaque tenetur voluptates provident!
                </p>
              </div>

              <div className={`card-div-4`}>
                {!testAttempted ? (
                 
                    <button className="button not-attempt-disable">
                        <span className="text">Attempt online test first</span>
                      <span className="icon"><AiOutlineArrowRight/></span>
                      
                    </button>
                
                ) : null}
                {!testFail ? (
                  
                    <button className="button not-attempt-disable">
                     
                      <span className="text"> Book Session</span>
                      <span className="icon"><AiOutlineArrowRight/></span>
                    </button>
                
                ) : null}
                {testReattempted ? (
                
                    <button className="button not-attempt-disable">
                     
                      <span className="text">  Session Booked</span>
                      <span className="icon"><AiOutlineArrowRight/></span>
                    </button>
                
                ) : null}
              </div>
            </div>

            {/*--------------------------------------------------------- step-3 --------------------------------------------------------- */}

            <div className={`card card-border-outline`}>
              <div className={`card-div-1`}>
                <div className={`card-div-1-left`}>Step 3</div>
              </div>
              <div className={`card-div-2`}>
                <p className={`card-div-2-center`}>
                  Get on 1v1 call with our Councellor
                </p>
              </div>

              <div className={`card-div-3`}>
                <p className={`card-div-3-center`}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nesciunt nihil impedit quos non minus quibusdam cumque. Illum, repudiandae? Illum animi similique eaque nesciunt, aliquid totam ut et vero pariatur?
                </p>
              </div>

              <div className={`card-div-4`}>
                <button className="button not-attempt-disable">
                  Attempt online test first
                </button>
              </div>
            </div>
          </div>

          <div className="bottom-content-3">
            {thumbnailArray.map((el, index) => (
              <div
                key={index}
                id={index}
                className="thumbnail-div"
                onClick={(e) => {
                  setOpen(true);
                  //@ts-ignore
                  videoURlSet(e.target.id);
                }}
              >
                <img
                  className="thumbnail-div-img"
                  src={thumbnailArray[index]}
                  alt="video"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalyticsTest;
