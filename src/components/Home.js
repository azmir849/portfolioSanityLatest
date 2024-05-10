import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
            name,
            bio,
            'authorImage': image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  return (
    <div id='home' class='header'>
      <div class='container'>
        <div class='banner-info'>
          <div class='col-md-7 header-right'>
            <h1>Hi !</h1>
            <h6>I am a</h6>
            <h6>Software Developer</h6>
            <br />
            <small className='text-muted'>
              🌱🌱 Now I'm working as a REACT JS Developer at
              https://lemmesaybd.app/ .Since (March 2022) 🌱🌱
            </small>
            <br />
            <br />
            <p className='text-muted'>
              <BlockContent
                blocks={author?.bio}
                projectId='q2ozz9d4'
                dataset='production'
              />
            </p>
            <ul class='address'>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>NAME</b>
                  </li>
                  <li>MD. Azmir Hossen (Naeem)</li>
                </ul>
              </li>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>PHONE </b>
                  </li>
                  <li>+88 01627-297942</li>
                </ul>
              </li>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>ADDRESS </b>
                  </li>
                  <li>H-39,Road-17A,Sector-12,Uttara,Dhaka-1230</li>
                </ul>
              </li>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>E-MAIL </b>
                  </li>
                  <li>
                    <a href='mailto:m.azmir.cse@gmail.com'>
                      {" "}
                      m.azmir.cse@gmail.com
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>LINKEDIN</b>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/ah-naeem/'>
                      https://www.linkedin.com/in/ah-naeem/
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul class='address-text'>
                  <li>
                    <b>GITHUB</b>
                  </li>
                  <li>
                    <a href='https://github.com/azmir849'>
                      https://github.com/azmir849
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class='flex-column col-md-5 header-left d-flex justify-content-center'>
            <a href='https://drive.google.com/file/d/1-_sqnTaZiXxlIAqGvPllHX7_V5ZvyrRa/view'>
              <button type='button' class='btn btn-warning btn-lg'>
                Download Resume
              </button>
            </a>
          </div>
          <div class='clearfix'> </div>
        </div>
      </div>
    </div>
  );
}
