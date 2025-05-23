import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => {
        var mainPosts = data;
        mainPosts.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        });

        setPostData(mainPosts);
      })
      .catch(console.error);
  }, []);

  return (
    <main className='bg-black min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive mb-12 text-white'>
          My Projects Page
        </h1>
        {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my Blogs Posts Page.
        </h2> */}
        <div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-500'
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 text-small px-3 py-2 bg-red-600 text-red-100 bg-opacity-75 rounded'>
                        {post.title}{" "}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
