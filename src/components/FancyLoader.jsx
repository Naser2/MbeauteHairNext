export default function FancyLoader({}){
    return    <div className="mobile-navigation-wrap">
    <div id="fetch-header-menu-mobile">
      <div className="section-loader">
        <svg
          id="section-loader-svg"
          className="hide"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={40}
          height={40}
        >
          <circle
            className="loader-circle-border"
            r="40%"
            cx="50%"
            cy="50%"
            style={{ fill: "rgb(238,238,238 )", strokeWidth: 0 }}
          />
          <mask id="mask">
            <circle r="45%" cx="50%" cy="50%" className="c-mask-circle" />
          </mask>
          <g mask="url(#mask)">
            <circle
              r="50%"
              cx="50%"
              cy="50%"
              style={{ fill: "rgb(255,255,255 )", strokeWidth: 0 }}
            />
            <g id="clip-trs">
              <rect
                x="-200%"
                y={0}
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="30%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="60%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="90%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="120%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="150%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="180%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="210%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="240%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="270%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="300%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
}