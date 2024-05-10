import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import bg from "../img/bg.jpg";
import imageUrlBulder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBulder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
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

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <div className='relative'>
        <img src={bg} alt='author' className='absolute w-full ' />
        <div className='p-10 lg:pt-30 container mx-auto relative'>
          <section className='bg-gray-800 rounded-lg shadow-2xl lg:flex p-20'>
            <img
              src={urlFor(author.authorImage).url()}
              className='rounded w-auto h-32 lg:w-auto lg:h-64 mr-8'
              alt={author.name}
            />
            <div className='text-lg flex flex-col justify-center '>
              <h1 className='text-6xl text-red-500 mb-4'>
                Hey... I'm <span className='text-gray-100'>{author.name}</span>
              </h1>
              <div className='lg:prose-xl text-white opacity-70'>
                <BlockContent
                  blocks={author.bio}
                  projectId='q2ozz9d4'
                  dataset='production'
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='relative'>
        <div className='p-10 lg:pt-30 container mx-auto relative'>
          <section className='card bg-gray-800 rounded-lg shadow-2xl lg:flex p-20'>
            <p className='text-white bold'>
              I always try to learn new things and do experiment with them and I
              always try to keep myself up-to-date as this field is constantly
              evolving.
            </p>
            <p className='text-white pb-10 bold mt-3'>
              Here are some of the technologies I have worked with :
            </p>

            <div class='card-group'>
              <div class='card text-dark bg-info opacity-80 m-3'>
                <div class='card-body text-center'>
                  <h5 class='card-title'>Skills</h5>
                  <hr></hr>
                  <p class='card-text'>
                    HTML
                    <br />
                    CSS
                    <br />
                    SCSS
                    <br />
                    MUI
                    <br />
                    JavaScript
                    <br />
                    ReactJS
                    <br />
                    NextJs
                    <br />
                    ContextApi
                    <br />
                    Redux toolkit
                    <br />
                  </p>
                </div>
              </div>
              <div class='card text-dark bg-warning opacity-80 m-3'>
                <div class='card-body text-center'>
                  <h5 class='card-title'>Familiar</h5>
                  <hr></hr>
                  <p class='card-text mt-3'>
                    Typescript,
                    <br />
                    Node.js,
                    <br />
                    Express.js,
                    <br />
                    Laravel basic rest api,
                    <br />
                    MySQL Database
                  </p>
                </div>
              </div>
              <div class='card text-white bg-success opacity-80 m-3'>
                <div class='card-body text-center'>
                  <h5 class='card-title'>Others</h5>
                  <hr></hr>
                  <p class='card-text mt-5'>
                    Git
                    <br />
                    JIRA
                    <br />
                    Postman
                    <br />
                    Web hosting
                    <br />
                    Responsive Design
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='relative'>
        <div className='p-10 lg:pt-30 container mx-auto relative'>
          <section className='card bg-gray-800 rounded-lg shadow-2xl lg:flex p-10'>
            <p className='text-white bold'>
              Education : BSc in CSE at Daffodil International University
              (Passing Year-2021)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
