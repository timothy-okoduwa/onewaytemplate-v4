import React from 'react';
import Button from './Button';
import Image from 'next/image';
import a from '../Images/advert.png';
const Payment = () => {
  return (
    <div className="alpha">
      <div>
        <div className="PermiumDownloads">Purchase History</div>
        <div>
          <div className="fanta">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="trtr_ist">
                    Image
                  </th>
                  <th scope="col" className="trtr">
                    Name
                  </th>
                  <th scope="col" className="trtr">
                    Download Date
                  </th>
                  <th scope="col" className="trtr">
                    Price
                  </th>
                  <th scope="col" className="trtr_lst">
                    Payment Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="mt-5">
                  <td className="trtr_tbody ">
                    <div className="wikkos ">
                      <Image
                        src={a}
                        className="TableImage"
                        alt="template image"
                      />
                    </div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">UX Design 101 by Anita Gift</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">1/10/2023</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">₦ 3,000</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className=" wikkos">
                      <Button type="successful">Successful</Button>
                    </div>
                  </td>
                </tr>
                <tr className="mt-5">
                  <td className="trtr_tbody ">
                    <div className="wikkos ">
                      <Image
                        src={a}
                        className="TableImage"
                        alt="template image"
                      />
                    </div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">UX Design 101 by Anita Gift</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">1/10/2023</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">₦ 3,000</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className=" wikkos">
                      <Button type="failed">Failed</Button>
                    </div>
                  </td>
                </tr>
                <tr className="mt-5">
                  <td className="trtr_tbody ">
                    <div className="wikkos ">
                      <Image
                        src={a}
                        className="TableImage"
                        alt="template image"
                      />
                    </div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">UX Design 101 by Anita Gift</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">1/10/2023</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className="wikkos ">₦ 3,000</div>
                  </td>
                  <td className="trtr_tbody ">
                    <div className=" wikkos">
                      <Button type="successful">Successful</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
