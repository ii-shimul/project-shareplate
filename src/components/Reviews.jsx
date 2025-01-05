import me from "../assets/me.jpg";
import einstein from "../assets/Albert-Einstein.webp";
import newton from "../assets/newton.avif";
import elon from "../assets/elon-musk.jpg";
import mark from "../assets/mark-zuckerberg.jpg";
import sam from "../assets/Sam-Altman.webp";


const Reviews = () => {
  return (
    <div className="container mx-auto max-sm:w-[90%] pb-16 pt-10 max-sm:py-8">
      <div className="flex justify-center items-center">
        <a className="btn rounded-full bg-green-600 text-white  text-base font-bold w-fit">
          Our Reviews From Happy Clients
        </a>
      </div>
      <div className="mb-8">
        <h1 className="font-black text-4xl leading-[50px] mt-4 mb-6 max-sm:text-2xl text-center">
          Meet Our Regular Users
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={me} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">II Shimul</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Bax Corp.</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "SharePlate has been a lifesaver for me and my family. It’s
                  heartwarming to see how the community comes together to share
                  resources and help those in need. The platform is so easy to
                  use, and I’ve never felt more supported."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={einstein} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Albert Einstein</p>
              <p className="text-sm opacity-70 mt-1 mb-3">
                Representative, Physics
              </p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "I used to feel guilty about throwing away leftover food from
                  my restaurant, but SharePlate has given me a way to make a
                  difference. Knowing that my contributions are helping feed
                  people in need is the most rewarding feeling."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={newton} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Issac Newton</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Calculus</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "This platform is not just about sharing food; it’s about
                  building connections. I’ve met amazing people while
                  volunteering, and it feels great to be part of such a caring
                  community."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={elon} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Elon Musk</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Tesla</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "The interface is so user-friendly! Within minutes, I was able
                  to list my extra groceries for donation. SharePlate has made
                  giving back incredibly simple and impactful."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={mark} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Mark Zuckerberg</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, Meta</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "I was amazed at how quickly my food request was fulfilled.
                  The pickup process was smooth, and the quality of the donated
                  food was excellent. SharePlate truly brings hope to those in
                  need."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 p-5 pb-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition duration-300">
            <figure className="pt-4 pb-5">
              <div className="avatar">
                <div className="ring-[#ABEF5F] ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                  <img src={sam} />
                </div>
              </div>
            </figure>
            <div className="flex flex-col items-center text-center flex-grow">
              <p className="font-bold">Sam Altman</p>
              <p className="text-sm opacity-70 mt-1 mb-3">CEO, OpenAI</p>
              <div className="flex flex-col items-center flex-grow justify-between">
                <h2 className="card-title text-base font-bold">
                  "Reducing food waste has always been my goal, and SharePlate
                  aligns perfectly with that mission. It’s a great platform for
                  anyone looking to make a positive impact on both the
                  environment and people’s lives."
                </h2>
                <div className="card-actions mt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked="checked"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;