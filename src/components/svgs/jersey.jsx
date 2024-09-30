export const Jersey = ({
  className,
  name = "Player",
  jersey,
  primaryColor,
  secondaryColor,
  neckLineColor,
  textColor,
}) => {
  const neckLine = neckLineColor || "#659C35";
  return (
    <div className={`jersey_container ${className}`}>
      <style>{`
            .jersey_container{
                // border:1px solid white;
                max-width:200px;
                display:flex;
                flex-direction:column;
                place-content:center;
                place-items:center;
                position:relative;
                .player_name{
                    // border:1px solid blue;
                    display:flex;
                    place-content:center;
                    place-items:center;
                    padding:2px;
                    padding-left:20px;
                    padding-right:20px;
                    border-radius:10px;
                    background-color:gray;
                    min-height:20px;
                    p{
                        font-size:0.7rem;

                    }
                }
                    .jersey_no{
                        position:absolute;
                        top:10px;
                        font-size:1.8rem;
                        color:${textColor || "green"};
                    }
            }
        `}</style>
      <h1 className="jersey_no">{jersey}</h1>
      <svg
        width="70"
        height="60"
        viewBox="0 0 262 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: primaryColor || "#F0C419", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: secondaryColor || "#FF5733", stopOpacity: 1 }}
          />
        </linearGradient>
        <path
          d="M216.906 22.5472L167.302 0L182.467 6.89492L194.359 40.5849H131.227H68.0946L79.986 6.89492L95.1512 0L45.5475 22.5472L0.453125 94.6981L36.5286 121.755L63.5852 90.1887V239H131.227H198.868V90.1887L221.415 121.755L262 94.6981L216.906 22.5472Z"
          fill="url(#myGradient)"
        />
        <path
          d="M109.072 29.1074C111.945 31.9529 114.894 33.9551 117.613 35.371C114.894 33.9596 111.945 31.9529 109.072 29.1074Z"
          fill={neckLine}
        />
        <path
          d="M68.0947 40.5849H131.227V38.5511C129.897 38.718 129.058 38.7496 129.058 38.7496C129.058 38.7496 123.958 38.6729 117.613 35.3765C114.894 33.9651 111.944 31.9584 109.072 29.1129C107.155 27.2189 105.275 24.9462 103.516 22.2315C100.878 18.1595 98.5154 13.0819 96.7296 6.75513C96.1344 4.64472 95.6068 2.39451 95.1513 0L79.9861 6.89492L68.0947 40.5849Z"
          fill={neckLine}
        />
        <path
          d="M133.396 38.7496C133.396 38.7496 132.557 38.7225 131.227 38.5511V40.5849H194.359L182.467 6.89492L167.302 0C160.037 38.3437 133.396 38.7496 133.396 38.7496Z"
          fill={neckLine}
        />
        <path
          d="M198.868 202.924H63.585V216.452H198.868V202.924Z"
          fill={neckLine}
        />
      </svg>

      <div className="player_name">
        <p>{name}</p>
      </div>
    </div>
  );
};
