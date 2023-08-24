// import React from 'react';
// import Image from 'next/image';
// import mk1 from '../Images/test1.webp';
// import malt from '../Images/test2.webp';
// import soap from '../Images/test3.webp';
// import l1 from '../Images/l1.png';
// import l2 from '../Images/l2.jpeg';
// import l3 from '../Images/l3.jpeg';
// import l4 from '../Images/l4.jpeg';
// import ad from '../Images/advert.png';
// // ... other imports

// const MockupsPreview = () => {
//   return (
//     <div className="holding">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-lg-6 mb-4">
//             <div>
//               <div className="gracias ">
//                 <Image src={mk1} className="Imaggg " alt="category images" />
//                 <div className="overlay ">
//                   <div className="csb">Counter Sign Board</div>
//                   <div className="Psd">PSD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias2">
//               <div className="row " style={{ height: '100%' }}>
//                 <div className="col-12 col-lg-12 mb-4 neglience">
//                   <div className="forover2">
//                     <Image
//                       src={soap}
//                       className="Imaggg2"
//                       alt="category images"
//                     />
//                     <div className="overlay2">
//                       <div className="csb">Counter Sign Board</div>
//                       <div className="Psd">PSD</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-lg-12 neglience">
//                   <div className="forover2">
//                     <Image
//                       src={malt}
//                       className="Imaggg2"
//                       alt="category images"
//                     />
//                     <div className="overlay2">
//                       <div className="csb">Counter Sign Board</div>
//                       <div className="Psd">PSD</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={l1} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Counter Sign Board</div>
//                 <div className="Psd">PSD</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={l2} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Counter Sign Board</div>
//                 <div className="Psd">PSD</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={l3} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Counter Sign Board</div>
//                 <div className="Psd">PSD</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={l4} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Counter Sign Board</div>
//                 <div className="Psd">PSD</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={l1} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Counter Sign Board</div>
//                 <div className="Psd">PSD</div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-lg-4 mb-4">
//             <div className="ufufu">
//               <Image src={ad} className="others" />
//               <div className="overlay2">
//                 <div className="csb">Vestarplus</div>
//                 <div className="Psd">AD</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-6 mb-4">
//             <div>
//               <div className="gracias ">
//                 <Image src={mk1} className="Imaggg " alt="category images" />
//                 <div className="overlay ">
//                   <div className="csb">Counter Sign Board</div>
//                   <div className="Psd">PSD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias2">
//               <div className="row " style={{ height: '100%' }}>
//                 <div className="col-12 col-lg-12 mb-4 neglience">
//                   <div className="forover2">
//                     <Image
//                       src={soap}
//                       className="Imaggg2"
//                       alt="category images"
//                     />
//                     <div className="overlay2">
//                       <div className="csb">Counter Sign Board</div>
//                       <div className="Psd">PSD</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 col-lg-12 neglience">
//                   <div className="forover2">
//                     <Image
//                       src={malt}
//                       className="Imaggg2"
//                       alt="category images"
//                     />
//                     <div className="overlay2">
//                       <div className="csb">Counter Sign Board</div>
//                       <div className="Psd">PSD</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MockupsPreview;
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import ReactPaginate from 'react-paginate';

// const itemsPerPage = 12;
// // ... other imports

// const cardData = [
//   {
//     image: require('../Images/test1.webp').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/test2.webp').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/test3.webp').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/l1.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/l2.jpeg').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/l3.jpeg').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/l4.jpeg').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   {
//     image: require('../Images/advert.png').default,
//     overlayText: 'Counter Sign Board',
//     overlayType: 'PSD',
//   },
//   // ... add more card data objects
// ];

// const MockupsPreview = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const visibleCardData = cardData.slice(startIndex, endIndex);

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };
//   const renderCard = (card, index) => {
//     return (
//       <div key={index}>
//         <div className="">
//           <Image src={card.image} className="others" />
//           <div className="overlay2">
//             <div className="csb">{card.overlayText}</div>
//             <div className="Psd">{card.overlayType}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="holding">
//       <div className="container">
//         {/* First row */}
//         <div className="row">
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias ">
//               {/* Render first card */}
//               {renderCard(visibleCardData[0], 0)}
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias2">
//               {/* Render second row */}
//               <div className="row" style={{ height: '100%' }}>
//                 <div className="col-12 col-lg-12 mb-4 neglience">
//                   <div className="forover2">
//                     {visibleCardData
//                       .slice(1, 3)
//                       .map((card, index) => renderCard(card, index + 1))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second row */}
//         <div className="row">
//           <div className="col-12 col-lg-4 mb-4 bg-dnager">
//             {visibleCardData
//               .slice(3, 9)
//               .map((card, index) => renderCard(card, index + 3))}
//           </div>
//         </div>

//         {/* Third row */}
//         <div className="row">
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias ">
//               {/* Render first card */}
//               {renderCard(visibleCardData[0], 9)}
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-4">
//             <div className="gracias2">
//               {/* Render third row */}
//               <div className="row" style={{ height: '100%' }}>
//                 {visibleCardData
//                   .slice(10, 12)
//                   .map((card, index) => renderCard(card, index + 10))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pagination */}
//         <ReactPaginate
//           pageCount={Math.ceil(cardData.length / itemsPerPage)}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={handlePageChange}
//           containerClassName="pagination"
//           activeClassName="active"
//         />
//       </div>
//     </div>
//   );
// };

// export default MockupsPreview;
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import l1 from '../Images/l1.png';
const itemsPerPage = 12;
// ... other imports

const cardData = [
  {
    image: require('../Images/test1.webp').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/test2.webp').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/test3.webp').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/l1.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/l2.jpeg').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/l3.jpeg').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/l4.jpeg').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  {
    image: require('../Images/advert.png').default,
    overlayText: 'Counter Sign Board',
    overlayType: 'PSD',
  },
  // ... add more card data objects
];

const MockupsPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleCardData = cardData.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <div>
          <Image src={card.image} className="others" />
          <div className="overlay">
            <div className="csb">{card.overlayText}</div>
            <div className="Psd">{card.overlayType}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="holding">
      <div className="container">
        {/* First row */}
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="gracias ">{renderCard(visibleCardData[0], 0)}</div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <div
              className="row "
              style={{ height: '600px', backgroundColor: 'green' }}
            >
              <div style={{ backgroundColor: 'blue', height: '100%' }}>
                {visibleCardData.slice(1, 3).map((card, index) => (
                  <div
                    key={index}
                    className="  col-12 col-lg-12 mb-4 "
                    style={{
                      height: '48%',
                      backgroundColor: 'pink',
                    }}
                  >
                    <div>
                      {' '}
                      <Image src={l1} className="wonderrr" />
                    </div>

                    {/* <div className="">{renderCard(card, index + 1)}</div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row">
          {cardData.slice(3, 9).map((card, index) => (
            <div key={index} className="col-12 col-lg-4 mb-4">
              <div className="ufufu">
                <Image src={card.image} className="others" />
                <div className="overlay2">
                  <div className="csb">{card.overlayText}</div>
                  <div className="Psd">{card.overlayType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repeat first row */}
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="gracias ">
              <Image
                src={cardData[0].image}
                className="Imaggg "
                alt="category images"
              />
              <div className="overlay ">
                <div className="csb">{cardData[0].overlayText}</div>
                <div className="Psd">{cardData[0].overlayType}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <div className="gracias">
              <div className="row " style={{ height: '100%' }}>
                {cardData.slice(9, 11).map((card, index) => (
                  <div key={index} className="col-12 col-lg-12 mb-4 neglience">
                    <div className="forover2">
                      <Image
                        src={card.image}
                        className="Imaggg2"
                        alt="category images"
                      />
                      <div className="overlay2">
                        <div className="csb">{card.overlayText}</div>
                        <div className="Psd">{card.overlayType}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupsPreview;
