const testimonials = [
    {
      body: 'NasDesign built a great website for me. I am honnestly pleased to have worked with them, Nasser made it very straight forward and easy as a process. Thank you',
      author: {
        name: 'Joe West',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Leslie Alexander',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Alexis Page',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Ladawn Tailor ',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Sojourner Coffee Inc',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Omari Hills',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Cam Fonte',
        handle: 'lesliealexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More testimonials...
  ]
  
  export default function TestimonialSection() {
    return (
      <>
        <div className="bg-black  py-14 sm:py-22 overflow-hidden ">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
            {/* <div class="mx-auto max-w-2xl lg:mx-0"> */}
             <div id="section-itro-wrap" className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 text-center lg:text-left ">
             <h2 class="text-4xl headline typography-headline large-centered dark:text-slate-100 text-white font-bold tracking-tight dark:text-white sm:text-6xl text-left">Testimonials</h2>
  
              {/* <h2 className="text-lg font-semibold leading-8 tracking-tight dark:text-slate-300">
                Nasser Sanou
              </h2> */}
              <p className="text-left p4-8 text-2xl font-bold tracking-tight text-crema text-gray-400 dark:text-white sm:pb-14 sm:text-4xl">
                Amazing people i was able to touch.
              </p>  </div>
            </div>
            <section className="black-2-bg max-w-10xl py-14 sm:py-14 border-top border-1 border-gray-100 sm:p-4">
              <div className="lg:px-8">
                <div className="flex pl-2 inline-flex overflow-x-auto flex pt-4  max-w-7xl lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 sm:space-x-4 w-full">
                  <div className="flex-none  px-6  mr-2 mb-6 ring-1 hover:ring-gray-500 rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">

                    <figure className=" mt-10 flex flex-auto flex-col justify-between">
                      <blockquote className="text-lg leading-8 text-white">
                        <p>
                          “Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign ”
                        </p>
                      </blockquote>
                      <figcaption className="mt-10 flex items-center gap-x-6 testimonial_figure__LeL_Y">
                      <figure class="testimonial_figure__LeL_Y">
                        <div class="testimonial_avatarWrapper__aFJO8 sm:hidden"><div class="utils_mobileOnly__pEh2w"><span aria-label="" class="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{"--size":"60px"}}>
                        <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" class="image_intrinsic__ulrJk"  src="https://images.ctfassets.net/e5382hct74si/7mlje7mNxEK4jvgqWKu507/bc064f44b3a0fc67695e354003fb3d1c/image.png"/>
                        </span>
                        </div>
                        <div class="utils_desktopOnly__RlogC sr-only sm:not-sr-only"><span aria-label="" class="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{"--size":"68px"}}>
                          <img data-version="v1" alt="" title="" loading="eager" width="68" height="68" decoding="async" data-nimg="1" class="image_intrinsic__ulrJk"  src="https://images.ctfassets.net/e5382hct74si/7mlje7mNxEK4jvgqWKu507/bc064f44b3a0fc67695e354003fb3d1c/image.png"/>
                          </span>
                          </div>
                        </div>
                      </figure>
                        {/* <img
                          className="testimonial_avatarWrapper__aFJO8 h-14 w-14 rounded-full bg-gray-800"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        <div className="text-base">
                          <div className="font-semibold text-white">
                            Komal Kehar
                          </div>
                          <div className="mt-1 text-gray-400">CEO of Mira Projects</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="flex-none  px-6  mr-2 mb-6 ring-1 hover:ring-gray-500 rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">

                    <figure className="mt-10 flex flex-auto flex-col justify-between">
                      <blockquote className="text-lg leading-8 text-white">
                        <p>
                          “NasDesign built a great website for me. I am honnestly pleased to have worked with them, Nasser made it very straight forward and easy as a process. Thank you”
                        </p>
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-x-6">
                        <img
                          className="h-14 w-14 rounded-full bg-gray-800"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="text-base">
                          <div className="font-semibold text-white">
                            Amit 
                          </div>
                          <div className="mt-1 text-gray-400">Director and Cinematographe -Film Maker</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="flex-none  px-6  mr-2 mb-6 ring-1 hover:ring-gray-500 rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">

<figure className="mt-10 flex flex-auto flex-col justify-between">
  <blockquote className="text-lg leading-8 text-white">
    <p>
      “Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign ”
    </p>
  </blockquote>
  <figcaption className="mt-10 flex items-center gap-x-6">
    <img
      className="h-14 w-14 rounded-full bg-gray-800"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div className="text-base">
      <div className="font-semibold text-white">
        Komal Kehar
      </div>
      <div className="mt-1 text-gray-400">CEO of Mira Projects</div>
    </div>
  </figcaption>
</figure>
</div>
                </div>
              </div>
              <div class="mt-4 -mb-3"><div class="not-prose relative  rounded-xl overflow-hidden dark:bg-slate-800/25">
                <div style={{"background-position":"10px 10px"}} class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto"><div class="max-w-2xl mx-auto bg-black shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
  <div class="overflow-x-auto flex">
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Andrew</strong>
      </div>
    </div>
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Emily</strong>
      </div>
    </div>
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Whitney</strong>
      </div>
    </div>
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">David</strong>
      </div>
    </div>
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Kristin</strong>
      </div>
    </div>
    <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div class="flex flex-col items-center justify-center gap-3">
        <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Sarah</strong>
      </div>
    </div>
  </div>
</div></div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div></div>
            </section>
            {/* <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author.handle}
                    className="pt-8 sm:inline-block sm:w-full sm:px-4"
                  >
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </>
    )
  }
  