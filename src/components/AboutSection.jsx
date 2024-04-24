'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';

const AboutSection = ({ property }) => {

return <div className="blocks blocks--full-width">
  <div className="blocks__row">
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-1 bg-white">
        <img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          alt="Present Futures: Virtual and Augmented Reality in Art image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          data-ll-status="loaded"
          className="entered lazyloaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          alt="Present Futures: Virtual and Augmented Reality in Art image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/present-futures-virtual-and-augmented-reality-in-art/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>Present Futures: Virtual and Augmented Reality in Art</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-1">
        <img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2019/08/04102832/MarkLeckey_Still012_EditHighRes-960x640.jpg"
          alt="Mark Leckey image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2019/08/04102832/MarkLeckey_Still012_EditHighRes-960x640.jpg"
          data-ll-status="loaded"
          className="entered lazyloaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2019/08/04102832/MarkLeckey_Still012_EditHighRes-960x640.jpg"
          alt="Mark Leckey image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/mark-leckey/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>Mark Leckey</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
  
  
  </div>
  <div className="blocks__row"></div>
  <div className="blocks__row blocks__item--half"></div>
</div>
}


export default AboutSection