"use client"
import React from 'react';
import '../../../public/sass/pages/post.scss';
import Image from 'next/image';
import { Navigation,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function SlideProfiles() {
  const profiles = [
    {name: "Jon Tucker",
      userName: "@JonTuckerUSA",
      comment: "Email is a killer channel, but if you layer in postal mail you can really supercharge results.The team at @getpostpilot will spark ideas for ya.",
      specialTag: {
        tag: "@getpostpilot",
        rem: "killer tool"
      },
      img: "/images/pro1.jpeg"
    },
    {name: "Nathan Wood",
      userName: "@HeisNathan",
      comment: "Email is a killer channel, but if you layer in postal mail you can really supercharge results.The team at @getpostpilot will spark ideas for ya.",
      
      img: "/images/pro1.jpeg"
    },
    {name: "Jon Tucker",
      userName: "@JonTuckerUSA",
      comment: "Email is a killer channel, but if you layer in postal mail you can really supercharge results.The team at @getpostpilot will spark ideas for ya.",
      specialTag: {
        tag: "@getpostpilot",
        rem: "killer tool"
      },
      img: "/images/pro1.jpeg"
    },
    {name: "Jon Tucker",
      userName: "@JonTuckerUSA",
      comment: "Email is a killer channel, but if you layer in postal mail you can really supercharge results.The team at @getpostpilot will spark ideas for ya.",
      
      img: "/images/pro1.jpeg"
    },
    {name: "Jon Tucker",
      userName: "@JonTuckerUSA",
      comment: "Email is a killer channel, but if you layer in postal mail you can really supercharge results.The team at @getpostpilot will spark ideas for ya.",
      
      img: "/images/pro1.jpeg"
    },
  ]
  return (
    <>
      <div className="slider_section">
        <h3 className='heading'>
          PostPilot is 🔥 for <div className="other">DTC</div>
        </h3>
        <div className='slider'>
          <Swiper
            modules={[Navigation,Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false ,}} 
            navigation
            // spaceBetween={50}
            slidesPerView={3}
            loop={true}
            speed={3000}
          >
            
            {
              profiles.map((i,k)=>{
                console.log(i)
                return <SwiperSlide key={k}>
                  <div className='profile'>
                    <div className='top_area'>
                      <div className='profile_img'>
                        <Image src={i?.img} width={64} height={64} alt='...' title='...'/>
                      </div>
                      <div className='profile_detail'>
                        <div className="name">

                          <h5>{i?.userName}</h5>
                          <h>{i?.name}</h>
                        </div>
                        <div className="twitter_icon">
                          <FontAwesomeIcon icon={faTwitter} />
                        </div>
                      </div>
                    </div>
                    <div className="bottom_area">
                    <p>
                      {i?.comment}
                    </p>
                     {i.specialTag ? 
                        <div className='special_tag'><span className='bold_tag'>@getpostpilot.  </span>Killer tool.</div>
                      : ""
                     }
                    </div>
                  </div>
                </SwiperSlide>
              })
            }
            
          </Swiper>
        </div>
        <div className='slider_btn'>
          <Link className='slider_link' href={'/'} alt='...' title='...'>
            TRY it RISK-free
          </Link>
        </div>
      </div>
    </>
  )
}
