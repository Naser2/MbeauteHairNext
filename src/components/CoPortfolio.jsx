'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';

const CoPortfolio = ({ property }) => {

return <div className="blocks blocks--full-width">
  <div className="blocks__row">
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-1">
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
  <div className="blocks__row blocks__item--half">
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-2">
        <img
          alt="Ho Tzu Nyen image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/screenshot_direct_06092022142422-480x453.png"
          className="entered lazyloaded"
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/screenshot_direct_06092022142422-480x453.png"
          data-ll-status="loaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/screenshot_direct_06092022142422-480x453.png"
          alt="Ho Tzu Nyen image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/ho-tzu-nyen/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>Ho Tzu Nyen</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-2">
        <img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/Screenshot-2023-03-28-at-16.02.04-480x640.png"
          alt="Carsten Höller image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/Screenshot-2023-03-28-at-16.02.04-480x640.png"
          data-ll-status="loaded"
          className="entered lazyloaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/Screenshot-2023-03-28-at-16.02.04-480x640.png"
          alt="Carsten Höller image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/carsten-holler/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>Carsten Höller</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
    <div className="blocks__item">
      <div className="blocks__item__image blocks__item__image--news-size-1">
        <img
          alt="David Shrigley image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/David-Shrigley_Worm_ABMB_Design-District_9470_Web-960x640.jpeg"
          className="entered lazyloaded"
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/David-Shrigley_Worm_ABMB_Design-District_9470_Web-960x640.jpeg"
          data-ll-status="loaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/03/04100846/David-Shrigley_Worm_ABMB_Design-District_9470_Web-960x640.jpeg"
          alt="David Shrigley image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/david-shrigley/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>David Shrigley</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
  </div>
  <div className="blocks__row blocks__row--half tall">
    <div className="blocks__item">
      <div className="blocks__item__image blocks__item__image--news-size-3">
        <img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2021/07/04100919/screenshot_direct_02072021140850-960x828.png"
          alt="Julie Curtiss image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2021/07/04100919/screenshot_direct_02072021140850-960x828.png"
          data-ll-status="loaded"
          className="entered lazyloaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2021/07/04100919/screenshot_direct_02072021140850-960x828.png"
          alt="Julie Curtiss image"&gt;
        </noscript> */}
      </div>
      <a
        href="https://acuteart.com/artist/julie-curtiss/"
        className="blocks__item__overlay"
      >
        <div>
          <h4>Julie Curtiss</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
  </div>
  <div className="blocks__row"></div>
  <div className="blocks__row blocks__item--half"></div>
</div>
}


export default CoPortfolio